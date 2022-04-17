
let timer = 0;
let time_between_shots = 0;
let enemies = [];
let bullets = [];
let max_enemy_number = 6;
let mousex, mousey;
let off = -1;
let max_bullet_number = 5;
let dead_enemy_index = null;

var e = new enemy(canvas.width, canvas.height);

function drawbackground()
{
    ctx.fillStyle = "#F1DCCC";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}

function gameloop()
{
    drawbackground();
    drawplayer();
    if (time_between_shots > 0)
        time_between_shots -= 0.01;
    if (timer > 0)
        timer--;
    if (timer <= 0 && enemies.length < max_enemy_number)
    {
        enemies.push(new enemy(Math.random() * canvas.width, Math.random() * canvas.height));
        timer = 34;
    }
    for (let i = 0; i < enemies.length ; i++)
        enemies[i].followplayer();
    if (bullets.length > 0)
        bullets[0].update();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);
canvas.addEventListener('mousedown', (e) => {
    if (time_between_shots <= 0)
    {
        bullets.push(new bullet(player.x, player.y));
        if (dead_enemy_index > 0)
            enemies.splice(3, 1);
        if (bullets.length >= 2)
            bullets.pop();
        bullets[0].x = player.x;
        bullets[0].y = player.y;
        time_between_shots = 0.2;
        mousex = e.clientX;
        mousey = e.clientY;
    }
});