
function clamp(vx, minv, maxv)
{
	return Math.min(Math.max(vx, minv), maxv);
}

let player = 
{
	health: 10.0,
	speed: 10.4,
	special_attack_capacity: 0.0,
	special_realese: false,
	x: canvas.width / 2,
	y: canvas.height / 2,
	vx: 0,
	vy: 0,
	minv: -0.05,
	maxv: 0.05,
	dead: this.health > 0 ? true : false,
	moveangle : 1,
	input : function(e)
	{
		switch (e.key)
		{
			case "w":
				this.vy = -0.01;
				break;
			case "s":
				this.vy = 0.01;
				break;
			case "a":
				this.vx = -0.01;
				break;
			case "d":
				this.vx = 0.01;
				break;
			case "f":
				this.special_realese = true;
				if (this.special_attack_capacity >= 10.0)
				{
					this.special_attack_capacity = 0.0;
					for (let i = 0 ; i < megabullets_num; i++)
						megabullets.push(new megabullet(player.x, player.y));
				}
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
	},
	special_shooy: function()
	{
		for (let i = 0 ; i < megabullets.length ; i++)
        	megabullets[i].update(i);
	}
}

function drawplayer(dt)
{
	console.log(player.vx);
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.rect(player.x, player.y, 30, 30);
	ctx.fill();
}

window.addEventListener('keydown', (e) => {
	player.input(e);
});

window.addEventListener('keyup', (e) => 
{
	// if (player.vx < 0)
	// 	player.vx += 0.05;
	// else if (player.vx > 0)
	// 	player.vx -= 0.05;
	// if (player.vy < 0)
	// 	player.vy += 0.05;
	// else if (player.vy > 0)
	// 	player.vy -= 0.05;
});