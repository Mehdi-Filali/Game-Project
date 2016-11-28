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

var randomize = function() {
    var blocs = document.getElementsByClassName("bloc");
    for(var b = 0; b < blocs.length; b++){
        blocs[b].style.height = Math.random() * (50 - 30) + 30;
        blocs[b].style.width = Math.random() * (40 - 20) + 20;
     }
}

setInterval(randomize,1000);