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
let kills = 0;

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
		bloodsplashes[i].draw(); 
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
		enemies[i].drawenemy();
		if (gamerunning)
			enemies[i].followplayer();
		if (bullets.length > 0)
		{
			x = enemies[i].x - bullets[0].x;
			y = enemies[i].y - bullets[0].y;
			dist = Math.sqrt((x * x) + (y * y));
			if (dist < 30 || (megabullets.length > 0 && dist <= megabullets[0].dist))
			{
				dead_enemy_index = i;
				kills++;
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

function killstext()
{
	ctx.font = '48px Impact, fantasy';
	ctx.fillStyle = 'red';
	ctx.fillText(kills, 400, 100, 520, 120);
}

function gameovertext()
{
	ctx.font = '48px Impact, fantasy';
	ctx.fillStyle = 'red';
	ctx.fillText('Dead', 350, 200, 720, 120);
}

function gameloop()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	let now = Date.now();
	let dt = now - lastupdate;
	lastupdate = now;
	drawblood();
	drawbackground();
	if (player.health > 0)
		drawplayer(dt);
	enemiesupdate();
	if (gamerunning)
	{
		if (player.special_attack_capacity <= 10.0)
			player.special_attack_capacity += 0.1;
		if (player.health > 0)
		{
			if (player.special_realese)
				spec_attack();
			player.move(dt);
			specialbar.updatespecialbar();
			healthbar.updatehealth();
			bulletupdate();
			timerupdater();
		}
		if (player.health <= 0)
			gameovertext();
		else
			killstext();
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
	if (time_between_shots <= 0 && gamerunning && player.health > 0)
	{
		bullets.push(new bullet(player.x, player.y));
		if (bullets.length >= 2)
			bullets.pop();
		bullets[0].x = player.x;
		bullets[0].y = player.y;
		time_between_shots = 0.2;
		mousex = e.clientX;
		mousey = e.clientY;
	}
});

