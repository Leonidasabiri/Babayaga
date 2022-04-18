
class bloodsplash
{
	alpha = 1;
	width;
	height;
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = Math.random() * 40 + 10;
		this.height = Math.random() * 50 + 20;
	}
	fade()
	{
		if (this.alpha > 0)
			this.alpha -= 0.007;
	}
	draw()
	{
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "rgba(255,0,0," + this.alpha + ")";
		ctx.fill();
		this.fade();
	}
}