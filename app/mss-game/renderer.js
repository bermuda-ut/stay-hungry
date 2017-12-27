import {TILE_SIZE, showFps, visibleHeight} from "./game-info";

function drawMap(obj, ctx, player, centerX, centerY, width, height, ratio) {
    const toDraw = document.getElementById(obj.id);
    const visibleWidth = visibleHeight * ratio;
    if (toDraw) {
        ctx.drawImage(
            toDraw,
            (player.x - visibleWidth / 2) * TILE_SIZE,
            (player.y - visibleHeight / 2) * TILE_SIZE,
            visibleWidth * TILE_SIZE,
            visibleHeight * TILE_SIZE,
            0,
            0,
            width,
            height
        );
    } else {
        console.warn("Unable to find sprite for " + obj.id);
    }
}

export function render(c, ctx, player, mapinfo, mapdeco, fps) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // dynamic canvas size adjustment
    c.height = height;
    c.width = width;
    let ratio = width / height;

    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    let [centerX, centerY] = [c.width / 2, c.height / 2];
    // draw map entities
    for (const i in mapinfo) {
        drawMap(mapinfo[i], ctx, player, centerX, centerY, width, height, ratio);
    }

    // draw player
    ctx.fillRect(centerX, centerY, TILE_SIZE, TILE_SIZE);

    for (const i in mapdeco) {
        drawMap(mapdeco[i], ctx, player, centerX, centerY);
    }

    if (showFps) {
        ctx.font = "20px Arial";
        ctx.fillText(Math.floor(fps), 0, 20);
    }
}