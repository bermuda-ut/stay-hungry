import {tilemapInfo} from "./tilemap-info";

const entityInfo = {
    player: {
        x: 1,
        y: 4,
        tilemap: "tilemap-0",
        sprite: tilemapInfo.player,
        flipX: false,
        flipY: false,

        movement: {x: 0, y: 0},
        currSpeed: {x: 0, y: 0},
        maxSpeed: 80,
        deccel: 0.5,
        accel: 1,
        stopThreshold: 5,

        currRotation: 0,
        rotationConst: 1,
        rotationSpeed: 0.003,
        maxRotation: 0.25,

        renderOffset: {x: 0, y: 0}
    }
};

module.exports = {
    entityInfo
};
