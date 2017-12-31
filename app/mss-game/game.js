import {getAllById} from "mss/common";
import {render} from "./renderer";
import {mapdeco, mapinfo} from "./map-info";
import {targetFps} from "./game-info";
import {keyInputs} from "../mss/input-manager";
import {entityInfo} from "./entity-info";

let waitTime = 1000 / targetFps;

let divs = {};
let inputs = {};
let ctx;
let chatInput;
let chatLog;
let renderCanvas;
let prevTime = 0;
let prevFps = 0;
let unfocused = true;
const player = entityInfo.player;

function hasCollision(tileX, tileY) {
    let collisionMap;
    // return collisionMap[tileY][tileX] > 0;
}

function handleMovement(entity, deltaTime) {
    if (Math.abs(entity.currSpeed.x) < entity.stopThreshold) entity.currSpeed.x = 0;
    if (Math.abs(entity.currSpeed.y) < entity.stopThreshold) entity.currSpeed.y = 0;

    if (entity.movement.x || entity.movement.y) {
        //accel
        entity.currSpeed.x += entity.movement.x * entity.accel * deltaTime;
        entity.currSpeed.y += entity.movement.y * entity.accel * deltaTime;

        if (entity.currSpeed.x > entity.maxSpeed) entity.currSpeed.x = entity.maxSpeed;
        if (entity.currSpeed.x < -entity.maxSpeed) entity.currSpeed.x = -entity.maxSpeed;
        if (entity.currSpeed.y > entity.maxSpeed) entity.currSpeed.y = entity.maxSpeed;
        if (entity.currSpeed.y < -entity.maxSpeed) entity.currSpeed.y = -entity.maxSpeed;

        // walking animation
        if (Math.abs(entity.currRotation) < Math.abs(entity.maxRotation)) {
            entity.currRotation += entity.rotationSpeed * deltaTime * entity.rotationConst;
        } else {
            if (entity.currRotation < 0) entity.currRotation = -entity.maxRotation;
            else entity.currRotation = entity.maxRotation;

            entity.rotationConst *= -1;
            entity.currRotation += entity.rotationSpeed * deltaTime * entity.rotationConst;
        }

        entity.renderOffset.x = entity.currRotation * 50;
        entity.renderOffset.y = Math.abs(entity.currRotation) * 10 - entity.sprite.height / 2 + 3;
    } else {
        // stop walking animation
        entity.currRotation = 0;
        entity.renderOffset.x = 0;
        entity.renderOffset.y = 0;
    }

    let before = {x: entity.currSpeed.x, y: entity.currSpeed.y};
    if (!entity.movement.x) {
        // deccel
        if (entity.currSpeed.x < 0) entity.currSpeed.x += entity.deccel * deltaTime;
        else if (entity.currSpeed.x > 0) entity.currSpeed.x -= entity.deccel * deltaTime;
        if ((before.x < 0 && entity.currSpeed.x > 0) || (before.x > 0 && entity.currSpeed.x < 0))
            entity.currSpeed.x = 0;
    }
    if (!entity.movement.y) {
        if (entity.currSpeed.y < 0) entity.currSpeed.y += entity.deccel * deltaTime;
        else if (entity.currSpeed.y > 0) entity.currSpeed.y -= entity.deccel * deltaTime;
        if ((before.y < 0 && entity.currSpeed.y > 0) || (before.y > 0 && entity.currSpeed.y < 0))
            entity.currSpeed.y = 0;
    }

    // sprite flipping
    if (entity.movement.x < 0) {
        entity.flipX = true;
    } else if (entity.movement.x > 0) {
        entity.flipX = false;
    }

    entity.x += entity.currSpeed.x / 1000;
    entity.y += entity.currSpeed.y / 1000;
    // console.log(`curr speed ${entity.currSpeed.x} ${entity.currSpeed.y}`);
}

function sendChat(val) {
    console.log(val);
    chatLog.value += "You: " + val + "\n";
    chatLog.scrollTop = chatLog.scrollHeight;
}

function handleInput() {
    // console.log(keyInputs);
    if (keyInputs[13] && unfocused) {
        if (chatInput === document.activeElement) {
            chatInput.blur();
            sendChat(chatInput.value);
            chatInput.value = "";
        } else {
            chatInput.focus();
        }
        unfocused = false;
    } else if (keyInputs[13] === false) {
        unfocused = true;
    }

    if (chatInput === document.activeElement) {
        player.movement.x = 0;
        player.movement.y = 0;
        return;
    }
    if ((keyInputs[87] || keyInputs[38])) {
        player.movement.y = -1;
    } else if (player.movement.y < 0) {
        player.movement.y = 0;
    }

    if ((keyInputs[65] || keyInputs[37])) {
        player.movement.x = -1;
    } else if (player.movement.x < 0) {
        player.movement.x = 0;
    }

    if ((keyInputs[83] || keyInputs[40])) {
        player.movement.y = 1;
    } else if (player.movement.y > 0) {
        player.movement.y = 0;
    }

    if ((keyInputs[68] || keyInputs[39])) {
        player.movement.x = 1;
    } else if (player.movement.x > 0) {
        player.movement.x = 0;
    }
}

function stepFrame() {
    const currTime = performance.now();
    const diff = currTime - prevTime;
    let fps = 1000 / diff;

    handleInput();
    // handle movement only player for now, once isolated out to a class, handle all character movement
    // TODO: Simply run update() function per entity
    for (let k in entityInfo) {
        handleMovement(entityInfo[k], diff);
    }
    render(renderCanvas, ctx, player, mapinfo, mapdeco, fps, entityInfo);

    // console.log(`FPS: ${Math.round(fps)}, Diff:${diff}`);
    prevTime = currTime;
    prevFps = fps;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loading game");

    // right-click menu will mess up the inputs
    document.addEventListener('contextmenu', event => event.preventDefault());

    chatInput = document.getElementById("chat-input");
    chatLog = document.getElementById("chat-log");
    renderCanvas = document.getElementById("render-canvas");
    ctx = renderCanvas.getContext("2d");

    setInterval(stepFrame, waitTime);

    console.log("Game loaded");
});
