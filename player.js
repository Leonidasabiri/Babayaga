const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let player = 
{
    speed: 20.4,
    x: canvas.width / 2,
    y: canvas.height / 2,
    dead: false,
    talking: false,
    moveangle : 1,
    angle: 0,
    move : function(e)
    {
        switch (e.key)
        {
            case "w":
                this.y -= this.speed;
                break;
            case "s":
                this.y += this.speed;
                break;
            case "a":
                this.x -= this.speed;
                break;
            case "d":
                this.x += this.speed;
                break;
        }
    },
    shoot: function()
    {

    }
}

function drawplayer()
{
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(player.x, player.y, 30, 30);
    ctx.fill();
}

window.addEventListener('keydown', function(e){
   player.move(e);
});