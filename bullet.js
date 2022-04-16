
class bullet
{
    speed;
    constructor(x, y, direction)
    {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    update()
    {
        this.x += this.speed;
        this.y += this.speed;
    }
}