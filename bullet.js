
class bullet
{
    speed = 20;
    lifetime = 2;
    dist;
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        shoot_sound.play();
    }
    draw ()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    update()
    {
        let x;
        let y;
        if (enemies.length > 0)
        {
            x = this.x - enemies[0].x;
            y = this.y - enemies[0].y;
            this.dist = Math.sqrt((x * x) + (y * y));
        }
        this.x +=  (mousex - player.x) * this.speed / 100;
        this.y +=  (mousey - player.y) * this.speed / 100;
        if (this.dist < 30)
        {
            if (enemies.length > 1)
            {
                enemies.shift();
                bloodsplashes.push(new bloodsplash(this.x, this.y));
            }
            else
                enemies.pop();
        }
        this.draw();
    }
}
