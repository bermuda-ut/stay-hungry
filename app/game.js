import {getAllById} from "./mss/common";
import {render} from "./renderer";
import {indoorCollision, mapdeco, mapinfo, outdoorCollision} from "./map-info";
import {player, layer, movementSpeed, targetFps, TILE_SIZE} from "./game-info";
import {keyInputs} from "./mss/input-manager";

let waitTime = 1000 / targetFps;

let divs = {};
let currPos = {x: player.x / TILE_SIZE, y: player.y / TILE_SIZE};
let inputs = {};
let ctx;
let renderCanvas;
let moving = false,
    movingDown = false,
    movingUp = false,
    movingLeft = false,
    movingRight = false;


function hasCollision(x, y) {
    let collisionMap;
    if (layer === "outdoor")
        collisionMap = outdoorCollision;
    if (layer === "indoor-0")
        collisionMap = indoorCollision;
    let centerX = x + TILE_SIZE / 2,
        centerY = y + TILE_SIZE / 2;
    let tileX = Math.floor(centerX / TILE_SIZE),
        tileY = Math.floor(centerY / TILE_SIZE);

    // console.log(`${tileX} ${tileY} ${tileXP} ${tileYP} ${tileXM} ${tileYM}`);
    return collisionMap[tileY][tileX] > 0;
}

function handleMovement() {
    if (moving) {
        let playerPos = {x: player.x / TILE_SIZE, y: player.y / TILE_SIZE};
        let deltaX = currPos.x - playerPos.x,
            deltaY = currPos.y - playerPos.y;

        if (deltaX === 0) {
            movingLeft = false;
            movingRight = false;
        }

        if (deltaY === 0) {
            movingUp = false;
            movingDown = false;
        }

        if (deltaX === 0 && deltaY === 0) {
            moving = false;
            player.x = currPos.x * TILE_SIZE;
            player.y = currPos.y * TILE_SIZE;
            return;
        }

        console.log(`${deltaX} ${deltaY}`);

        if (deltaX > 0) player.x += movementSpeed;
        else if (deltaX < 0) player.x -= movementSpeed;

        if (deltaY > 0) player.y += movementSpeed;
        else if (deltaY < 0) player.y -= movementSpeed;
    }
}

function handleInput() {
    if (!movingUp && (keyInputs[87] || keyInputs[38])) {
        currPos.y -= 1;
        movingUp = true;
        moving = true;
    }

    if (!movingLeft && (keyInputs[65] || keyInputs[37])) {
        currPos.x -= 1;
        movingLeft = true;
        moving = true;
    }

    if (!movingDown && (keyInputs[83] || keyInputs[40])) {
        currPos.y += 1;
        movingDown = true;
        moving = true;
    }

    if (!movingRight && (keyInputs[68] || keyInputs[39])) {
        currPos.x += 1;
        movingRight = true;
        moving = true;
    }

    console.log(`currPos ${currPos.x} ${currPos.y}`);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loading game");

    divs = getAllById("div");
    inputs = getAllById("input");
    renderCanvas = document.getElementById("render-canvas");
    ctx = renderCanvas.getContext("2d");

    setInterval(() => {
        handleInput();
        handleMovement();
        render(renderCanvas, ctx, player, mapinfo, mapdeco);
    }, waitTime);

    console.log("Game loaded");
});
