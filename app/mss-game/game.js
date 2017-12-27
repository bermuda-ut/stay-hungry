import {getAllById} from "mss/common";
import {render} from "./renderer";
import {mapdeco, mapinfo} from "./map-info";
import {player, layer, targetFps, TILE_SIZE, visibleHeight} from "./game-info";
import {keyInputs} from "../mss/input-manager";

let waitTime = 1000 / targetFps;

let divs = {};
let inputs = {};
let ctx;
let renderCanvas;
let prevTime = 0;
let prevFps = 0;
let currPos = {};

//TODO: separate it out to an isolated class
let movement = {x: 0, y: 0};
let currSpeed = {x: 0, y: 0};

const deccel = 0.2;
let accel = 0.1;
const stopThreshold = 0.1;

function hasCollision(tileX, tileY) {
    let collisionMap;
    // return collisionMap[tileY][tileX] > 0;
}

function handleMovement(deltaTime) {
    if(Math.abs(currSpeed.x) < stopThreshold) currSpeed.x = 0;
    if(Math.abs(currSpeed.y) < stopThreshold) currSpeed.y = 0;

    if (movement.x || movement.y) {
        if(movement.x)
            currSpeed.x = movement.x * accel;

        if(movement.y)
            currSpeed.y += movement.y * accel;
    }

    player.x += currSpeed.x;
    player.y += currSpeed.y;

    currSpeed.x *= deccel;
    currSpeed.y *= deccel;

    console.log(`curr speed ${currSpeed.x} ${currSpeed.y}`);
}

function handleInput() {
    currPos = {x: player.x / TILE_SIZE, y: player.y / TILE_SIZE};
    if ((keyInputs[87] || keyInputs[38])) {
        movement.y = -1;
    } else if (movement.y < 0) {
        movement.y = 0;
    }

    if ((keyInputs[65] || keyInputs[37])) {
        movement.x = -1;
    } else if (movement.x < 0) {
        movement.x = 0;
    }

    if ((keyInputs[83] || keyInputs[40])) {
        movement.y = 1;
    } else if (movement.y > 0) {
        movement.y = 0;
    }

    if ((keyInputs[68] || keyInputs[39])) {
        movement.x = 1;
    } else if (movement.x > 0) {
        movement.x = 0;
    }
    // console.log(`currPos ${currPos.x} ${currPos.y}`);
}

function stepFrame() {
    const currTime = performance.now();
    const diff = currTime - prevTime;
    let fps = 1000 / diff;

    handleInput();
    // handle movement only player for now, once isolated out to a class, handle all character movement
    handleMovement(diff);
    render(renderCanvas, ctx, player, mapinfo, mapdeco, fps);

    // console.log(`FPS: ${Math.round(fps)}, Diff:${diff}`);
    prevTime = currTime;
    prevFps = fps;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loading game");

    // right-click menu will mess up the inputs
    document.addEventListener('contextmenu', event => event.preventDefault());

    divs = getAllById("div");
    inputs = getAllById("input");
    renderCanvas = document.getElementById("render-canvas");
    ctx = renderCanvas.getContext("2d");

    setInterval(stepFrame, waitTime);

    console.log("Game loaded");
});
