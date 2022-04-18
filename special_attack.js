const specialcanvas = document.getElementById("specialbar");
const specialcontext = specialcanvas.getContext('2d');

let megabullets = [];
let megabullets_num = 45;

class megabullet
{
    speed = 10.0;
    lifetime = 2;
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    draw ()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 13, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    update(i)
    {
        this.x +=  this.speed * Math.cos(i * 5);
        this.y +=  this.speed * Math.sin(i * 5);
        this.draw();
    }
}

function spec_attack()
{
    for (let i = 0 ; i < megabullets.length ; i++)
        megabullets[i].update(i);
}

let specialbar = 
{
    updatespecialbar: function()
    {
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.rect(10, 10, player.special_attack_capacity * 22, 30);
        ctx.fill();
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.rect(10, 60, 220, 30);
        ctx.fill();
    }
};

