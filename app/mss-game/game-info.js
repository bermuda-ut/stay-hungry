let player = {
    x: 1,
    y: 4
};

const TILE_SIZE = 16;
let visibleHeight = 12;
let layer = "outdoor";
let targetFps = 60;
const showFps = true;

module.exports = {
    TILE_SIZE,
    player,
    layer,
    visibleHeight,
    targetFps,
    showFps,
};
