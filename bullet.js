
var bullet_sprite = new Image();

bullet_sprite.src = 'sprites/bullet.png';

class bullet
{
    speed = 10;
    lifetime = 2;
    distx;
    disty;
    constructor(x, y, distx, disty)
    {
        this.x = x;
        this.y = y;
        this.distx = distx;
        this.disty = disty;
        shoot_sound.play();
        console.log("X:" + this.distx);
        console.log("Y:" + this.disty);
    }
    draw ()
    {
        bullet_sprite.width = 10;
        bullet_sprite.height = 10;
        ctx.drawImage(bullet_sprite, this.x, this.y);
    }
    update()
    {
        this.distx = mousex - player.x;
        this.disty = mousey - player.y;
        let x;
        let y;
        if (enemies.length > 0)
        {
            x = this.x - enemies[0].x;
            y = this.y - enemies[0].y;
            this.dist = Math.sqrt((x * x) + (y * y));
        }
        this.x +=  ( mousex - player.x) * this.speed / 100.0;
        this.y +=  ( mousey - player.y) * this.speed / 100.0;
        this.draw();
    }
}
