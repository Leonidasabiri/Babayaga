const healthcanvas = document.getElementById("healthbar");
const healthcontext = healthcanvas.getContext('2d');

let healthbar = 
{
    updatehealth: function()
    {
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.rect(10, 10, 220, 30);
        ctx.fill();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.rect(10, 10, player.health * 22, 30);
        ctx.fill();
    }
}
