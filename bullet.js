
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
            console.log(this.dist);
        }
        this.x -=  (this.x - mousex) * this.speed / 100;
        this.y -=  (this.y - mousey) * this.speed / 100;
        if (this.dist < 30)
        {
            if (enemies.length > 1)
                enemies.shift();
            else
                enemies.pop();
        }
        this.draw();
    }
}
