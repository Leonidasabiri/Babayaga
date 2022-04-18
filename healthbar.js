const healthcanvas = document.getElementById("healthbar");
const healthcontext = healthcanvas.getContext('2d');

let healthbar = 
{
    updatehealth: function()
    {
        healthcontext.fillStyle = "gray";
        healthcontext.beginPath();
        healthcontext.rect(10, 10, 220, 30);
        healthcontext.fill();
        healthcontext.fillStyle = "red";
        healthcontext.beginPath();
        healthcontext.rect(10, 10, player.health * 22, 30);
        healthcontext.fill();
    }
}
