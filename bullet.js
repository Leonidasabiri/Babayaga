
class bullet
{
    speed;
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
        this.x -=  (this.x - mousex) * 0.2;
        this.y -=  (this.y - mousey) * 0.2;
        console.log(this.x);
        this.draw();
    }
}
