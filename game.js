

var e = new enemy(200, 200);

function drawbackground()
{
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}

function gameloop()
{
    drawbackground();
    drawplayer();
    e.drawenemy();

    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);