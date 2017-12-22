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

let movement = {x: 0, y: 0};
let currSpeed = 0;
let accel = 10;
let maxSpeed = 300;

function hasCollision(tileX, tileY) {
    let collisionMap;
    if (layer === "outdoor")
        collisionMap = outdoorCollision;
    if (layer === "indoor-0")
        collisionMap = indoorCollision;
    return collisionMap[tileY][tileX] > 0;
}

function handleMovement() {
    if (movement.x || movement.y) {
        let frameSpeed = 1 / prevFps;
        player.x += movement.x * frameSpeed * maxSpeed;
        player.y += movement.y * frameSpeed * maxSpeed;
    }
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
    handleMovement();
    render(renderCanvas, ctx, player, mapinfo, mapdeco, fps);

    // console.log(`FPS: ${Math.round(fps)}, Diff:${diff}`);
    prevTime = currTime;
    prevFps = fps;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loading game");

    divs = getAllById("div");
    inputs = getAllById("input");
    renderCanvas = document.getElementById("render-canvas");
    ctx = renderCanvas.getContext("2d");
    setInterval(stepFrame, waitTime);
    console.log("Game loaded");
});
