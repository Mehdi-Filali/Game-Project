/* Home */

var play=document.getElementById('button-play');

var playing = function(){
    document.getElementById('button-play').style.display= 'none';
    document.getElementById('button-exit').style.display= 'none';
    document.getElementById('button-player').style.display= 'inline-block';
}

play.addEventListener('click', playing);

var player=document.getElementById('button-player');

var lets_play = function(){
    document.getElementById('head').style.display='none';
    document.getElementById('window-game').style.display='inline-block';
}

player.addEventListener('click', lets_play);

var exit=document.getElementById('button-exit');

var quit = function(){
    document.getElementById('button-play').style.display= 'none';
    document.getElementById('button-exit').style.display='none';
}

exit.addEventListener('click', quit);

/* Game */

var canvas = document.getElementById("stickman");
var context = canvas.getContext('2d');

var stickman = new Image()
    stickman.src="Img/run1.gif";

context.drawImage(stickman, 50, 50, 100, 100);

canvas.style.position='absolute';
canvas.style.marginTop='95px';