import {getAllById} from "./mss/common";
import {render} from "./renderer";
import {indoorCollision, mapdeco, mapinfo, outdoorCollision} from "./map-info";
import {player, layer, movementSpeed, targetFps, TILE_SIZE} from "./game-info";
import {keyInputs} from "./mss/input-manager";

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
let accel = 0.02;
let maxSpeed = 20;
const deccel = 0.8;
const stopThreshold = 0.3;

function hasCollision(tileX, tileY) {
    let collisionMap;
    if (layer === "outdoor")
        collisionMap = outdoorCollision;
    if (layer === "indoor-0")
        collisionMap = indoorCollision;
    return collisionMap[tileY][tileX] > 0;
}

function handleMovement(fps) {
    currSpeed.x *= (deccel * fps) / fps;
    currSpeed.y *= (deccel * fps) / fps;
    if(Math.abs(currSpeed.x) < stopThreshold) currSpeed.x = 0;
    if(Math.abs(currSpeed.y) < stopThreshold) currSpeed.y = 0;

    if (movement.x || movement.y) {
        if(movement.x && Math.abs(currSpeed.x) < maxSpeed)
            currSpeed.x += movement.x * accel * fps;
        else if (movement.x)
            currSpeed.x = movement.x * maxSpeed;

        if(movement.y && Math.abs(currSpeed.y) < maxSpeed)
            currSpeed.y += movement.y * accel * fps;
        else if (movement.y)
            currSpeed.y = movement.y * maxSpeed;
    }

    player.x += Math.round(currSpeed.x);
    player.y += Math.round(currSpeed.y);
    // console.log(`curr speed ${currSpeed.x} ${currSpeed.y}`);
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
    handleMovement(fps);
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
