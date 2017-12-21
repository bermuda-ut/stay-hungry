import {getAllById} from "./mss/common";
import {render} from "./renderer";
import {mapdeco, mapinfo} from "./map-info";
import {keyInputs} from "./mss/input-manager";

let targetFps = 60;
let movementSpeed = 2;
let waitTime = 1000 / targetFps;

let divs = {};
let inputs = {};
let ctx;
let renderCanvas;

let player = {
    x: 1560,
    y: 2120
};

function handleInput() {
    if (keyInputs[87] || keyInputs[38]) {
        player.y -= movementSpeed;
    }
    
    if (keyInputs[65] || keyInputs[37]) {
        player.x -= movementSpeed;
    }

    if (keyInputs[83] || keyInputs[40]) {
        player.y += movementSpeed;
    }
    
    if (keyInputs[68] || keyInputs[39]) {
        player.x += movementSpeed;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loading game");

    divs = getAllById("div");
    inputs = getAllById("input");
    renderCanvas = document.getElementById("render-canvas");
    ctx = renderCanvas.getContext("2d");

    setInterval(() => {
        handleInput();
        render(renderCanvas, ctx, player, mapinfo, mapdeco);
    }, waitTime);

    console.log("Game loaded");
});
