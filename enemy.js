
class enemy
{
    attacking = false;
    follow_speed = 80;
    max_dist = 100;
    dist;

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
        let x = this.x - player.x;
        let y = this.y - player.y;
        this.dist = Math.sqrt((x * x) + (y * y));
        if (this.dist > this.max_dist)
        {
            this.x -=  x * this.follow_speed / 10000;
            this.y -=  y * this.follow_speed / 10000;
        }
        this.drawenemy();
    }
}