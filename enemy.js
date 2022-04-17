
class enemy
{
    attacking = false;
    follow_speed = 10;

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    drawenemy()
    {
        ctx.fillStyle = "#E9361E";
        ctx.fillRect(this.x, this.y, 30, 30);
    }
    followplayer()
    {
        this.x -=  (this.x - player.x) * this.follow_speed / 10000;
        this.y -=  (this.y - player.y) * this.follow_speed / 10000;
        this.drawenemy();
    }
}