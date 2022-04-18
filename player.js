
function clamp(vx, minv, maxv)
{
	return Math.min(Math.max(vx, minv), maxv);
}

let player = 
{
	health: 10.0,
	speed: 10.4,
	x: canvas.width / 2,
	y: canvas.height / 2,
	vx: 0,
	vy: 0,
	minv: -0.05,
	maxv: 0.05,
	dead: this.health > 0 ? true : false,
	talking: false,
	moveangle : 1,
	angle: 0,
	input : function(e)
	{
		switch (e.key)
		{
			case "w":
				this.vy -= 0.001;
				break;
			case "s":
				this.vy += 0.001;
				break;
			case "a":
				this.vx -= 0.001;
				break;
			case "d":
				this.vx += 0.001;
				break;
		}
		this.vx = clamp(this.vx, this.minv, this.maxv);
		this.vy = clamp(this.vy, this.minv, this.maxv);
	},
	move: function(dt)
	{
		this.x += this.vx * this.speed * dt;
		this.y += this.vy * this.speed * dt;
		this.x = clamp(this.x, 0, canvas.width - 30);
		this.y = clamp(this.y, 0, canvas.height - 30);
	}
}

function drawplayer(dt)
{
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.rect(player.x, player.y, 30, 30);
	ctx.fill();
}

window.addEventListener('keydown', (e) => {
	player.input(e);
});