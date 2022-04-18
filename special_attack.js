const specialcanvas = document.getElementById("specialbar");
const specialcontext = specialcanvas.getContext('2d');

let megabullets = [];
let megabullets_num = 35;

class megabullet
{
    speed = 10;
    lifetime = 2;
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    draw ()
    {
        specialcontext.beginPath();
        specialcontext.arc(this.x, this.y, 13, 0, Math.PI * 2);
        specialcontext.fillStyle = "black";
        specialcontext.fill();
    }
    update(i)
    {
        this.x +=  this.speed * Math.cos(i * 5);
        this.y +=  this.speed * Math.sin(i * 5);
        this.draw();
    }
}

for (let i = 0 ; i < megabullets_num; i++)
    megabullets.push(new megabullet(player.x, player.y));

function spec_attack()
{
    for (let i = 0 ; i < megabullets.length ; i++)
        megabullets[i].update(i);
}

let specialbar = 
{
    updatespecialbar: function()
    {
        specialcontext.fillStyle = "orange";
        specialcontext.beginPath();
        specialcontext.rect(10, 10, player.special_attack_capacity * 22, 30);
        specialcontext.fill();
        specialcontext.fillStyle = "gray";
        specialcontext.beginPath();
        specialcontext.rect(10, 60, 220, 30);
        specialcontext.fill();
    }
};

