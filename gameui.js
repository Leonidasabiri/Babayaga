
document.querySelectorAll('.playbutton')[0].addEventListener('click', (e) => {
	document.getElementById('play').setAttribute("class","hiddenButton");
});

if (player.health <= 0)
{
	document.getElementById('Retry').setAttribute("class","retrybutton");
}