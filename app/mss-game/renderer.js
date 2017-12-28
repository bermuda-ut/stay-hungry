import {TILE_SIZE, showFps, visibleHeight} from "./game-info";

function drawMap(obj, ctx, player, width, height, ratio) {
    const toDraw = document.getElementById(obj.id);
    if (toDraw) {
        const visibleWidth = visibleHeight * ratio;

        const offsetX = (player.x - visibleWidth / 2) * TILE_SIZE;
        const offsetY = (player.y - visibleHeight / 2) * TILE_SIZE;

        const offsetXFloor = Math.floor(offsetX);
        const offsetYFloor = Math.floor(offsetY);
        const offsetXDiff = offsetX - offsetXFloor;
        const offsetYDiff = offsetY - offsetYFloor;

        const drawWidth = visibleWidth * TILE_SIZE;
        const drawHeight = visibleHeight * TILE_SIZE;

        const deltaX = (offsetXDiff) * width / drawWidth;
        const deltaY = (offsetYDiff) * width / drawWidth;

        ctx.drawImage(
            toDraw,
            offsetXFloor,
            offsetYFloor,
            drawWidth + Math.round(offsetXDiff),
            drawHeight + Math.round(offsetYDiff),
            -deltaX,
            -deltaY,
            width + deltaX,
            height + deltaY
        );
    } else {
        console.warn("Unable to find sprite for " + obj.id);
    }
}

function drawEntity(entity, ctx, player, width, height, scale) {
    const toDraw = document.getElementById(entity.tilemap);
    if (toDraw) {
        const scaleX = entity.flipX ? -1 : 1;
        const scaleY = entity.flipY ? -1 : 1;
        const offsetX = entity.flipX ? entity.sprite.width : 0;
        const offsetY = entity.flipY ? entity.sprite.width : 0;
        ctx.save();
        ctx.scale(scaleX, 1);
        ctx.translate(
            (width / 2 + entity.sprite.width * scale / 2) / scaleX,
            (height / 2 + entity.sprite.height * scale / 2) / scaleY
        );
        ctx.rotate(entity.currRotation);

        ctx.drawImage(
            toDraw,
            entity.sprite.startX,
            entity.sprite.startY,
            entity.sprite.width,
            entity.sprite.height,
            ((offsetX - entity.sprite.width / 2) * scale) / scaleX + entity.renderOffset.x,
            ((offsetY - entity.sprite.height / 2) * scale) / scaleY + entity.renderOffset.y,
            entity.sprite.width * scale,
            entity.sprite.height * scale,
        );
        ctx.restore();
    } else {
        console.log("Tilemap not found for " + entity);
    }

}

export function render(c, ctx, player, mapinfo, mapdeco, fps, entityInfo) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // dynamic canvas size adjustment
    c.height = height;
    c.width = width;
    let ratio = width / height;
    let scale = height / visibleHeight / TILE_SIZE;

    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    // draw map entities
    for (const i in mapinfo) {
        drawMap(mapinfo[i], ctx, player, width, height, ratio);
    }

    for (const i in entityInfo) {
        if (i !== "player")
            drawEntity(entityInfo[i], ctx, player, width, height, scale)
    }
    drawEntity(player, ctx, player, width, height, scale);

    for (const i in mapdeco) {
        drawMap(mapdeco[i], ctx, player, width, height, ratio);
    }

    if (showFps) {
        ctx.font = "20px Arial";
        ctx.fillText(Math.floor(fps), 0, 20);
    }
}