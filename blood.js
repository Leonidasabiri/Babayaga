
class bloodsplash
{
	alpha = 1;
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
	fade()
	{
		if (this.alpha > 0)
			this.alpha -= 0.007;
	}
	draw()
	{
		ctx.fillStyle = "rgba(255,0,0," + this.alpha + ")";
		ctx.rect(this.x, this.y, 30, 40);
		ctx.fill();
		this.fade();
	}
}