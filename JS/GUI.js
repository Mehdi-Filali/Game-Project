/* Home */

var play=document.getElementById('button-play');

var playing = function(){
    document.getElementById('button-play').style.display= 'none';
    
    document.getElementById('button-exit').style.display= 'none';
        
    document.getElementById('timer').style.display= 'inline-block';
}

play.addEventListener('click', playing);

var player=document.getElementById('timer');

var lets_play = function(){
    document.getElementById('head').style.display='inline-block';
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


/* Timer */

var interval,
    c = 3,
    s = document.getElementById('timer');

function countdown(){
    s.innerHTML = c;
    
    if(c > 0){
        c--;
        console.log(c);
    }else{
        location=('Index2.0.html');
        clearInterval(interval);
        s.innerHTML = 'GO!';
    }
}

function ilan(){
    s.innerHTML = c;
    interval = setInterval(countdown, 1000);
}
s.addEventListener('click', ilan);

