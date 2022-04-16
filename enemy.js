
class enemy
{
    attacking = false;
    
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
}