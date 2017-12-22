import {TILE_SIZE} from "./game-info";

function drawObj(obj, ctx, player, centerX, centerY) {
    const toDraw = document.getElementById(obj.id);

    if (toDraw) {
        ctx.drawImage(toDraw, obj.x - player.x + centerX, obj.y - player.y + centerY, obj.width, obj.height);
    } else {
        console.warn("Unable to find sprite for " + obj.id);
    }
}

export function render(c, ctx, player, mapinfo, mapdeco) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // dynamic canvas size adjustment
    c.height = height;
    c.width = width;

    let [centerX, centerY] = [c.width / 2, c.height / 2];
    // draw map entities
    for (const i in mapinfo) {
        drawObj(mapinfo[i], ctx, player, centerX, centerY);
    }

    // draw player
    ctx.fillRect(centerX, centerY, TILE_SIZE, TILE_SIZE);

    for (const i in mapdeco) {
        drawObj(mapdeco[i], ctx, player, centerX, centerY);
    }
}