const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let timer = 0;
let time_between_shots = 0;
let enemies = [];
let bullets = [];
let bloodsplashes = [];
let max_enemy_number = 3;
let mousex, mousey;
let max_bullet_number = 5;
let dead_enemy_index = -1;
let lastupdate = Date.now();
let gamerunning = false;

var e = new enemy(canvas.width, canvas.height);

function drawbackground()
{
	ctx.fillStyle = "#F2DCCC";
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fill();
}

function drawblood()
{
	for (let i = 0; i < bloodsplashes.length ; i++)
	{
		bloodsplashes[i].draw();
		console.log(ctx.fillStyle);
	}
}

function timerupdater()
{
	if (time_between_shots > 0)
		time_between_shots -= 0.01;
	if (timer > 0)
		timer--;
	if (timer <= 0 && enemies.length < max_enemy_number)
	{
		enemies.push(new enemy(Math.random() * canvas.width, Math.random() * canvas.height));
		timer = 34;
	}
}

function bulletupdate()
{
	if (bullets.length > 0)
		bullets[0].update();
}

function enemiesupdate()
{
	let dist;
	let x;
	let y;
	for (let i = 0; i < enemies.length ; i++)
	{
		enemies[i].followplayer();
		if (bullets.length > 0)
		{
			x = enemies[i].x - bullets[0].x;
			y = enemies[i].y - bullets[0].y;
			dist = Math.sqrt((x * x) + (y * y));
			if (dist < 30)
			{
				dead_enemy_index = i;
				console.log(dead_enemy_index);
				bloodsplashes.push(new bloodsplash(enemies[i].x, enemies[i].y));
			}
		}
	}
}

function startgame()
{
	gamerunning = true;
}

function pausegame()
{
	gamerunning = false;
}

function gameloop()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	let now = Date.now();
	let dt = now - lastupdate;
	lastupdate = now;
	drawbackground();
	drawplayer(dt);
	if (gamerunning)
	{
		player.move(dt);
		bulletupdate();
		timerupdater();
		drawblood();
		enemiesupdate();
	}
	if (dead_enemy_index >=0)
	{
		enemies.splice(dead_enemy_index, 1);
		dead_enemy_index = -1;
	}
	window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);
canvas.addEventListener('mousedown', (e) => {
	if (time_between_shots <= 0 && gamerunning)
	{
		bullets.push(new bullet(player.x, player.y, player.x - mousex, player.y - mousey));
		if (bullets.length >= 2)
			bullets.pop();
		bullets[0].x = player.x;
		bullets[0].y = player.y;
		time_between_shots = 0.2;
		mousex = e.clientX;
		mousey = e.clientY;
	}
});
