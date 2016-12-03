/* Home */
var body = document.getElementsByTagName('body')[0];
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
        blocs[b].style.height = Math.random() * (55 - 30) + 30;
        blocs[b].style.width = Math.random() * (45 - 10) + 10;
     }
}

setInterval(randomize,1000);

var jump = document.getElementById('Stickman1');

function key_down(e){
    console.log(e.keyCode);
    if(e.keyCode === 38){
        jump.style.top = '-70px'; 
    }
}

body.addEventListener('keydown', key_down); 

function key_up(e){
    if(e.keyCode === 38){
        jump.style.top = '0px';
    }
}

body.addEventListener('keyup', key_up);


/* Game Over 
var position = function(){
    var stick = document.getElementById('Stickman1');
    var blocs_collision=document.getElementsByClassName('bloc');
    if((stick.offsetLeft - blocs_collision.offsetLeft < 50) && (stick.offsetLeft - blocs_collision.offsetLeft > -50)){
       console.log("alignés !");
       
   }
}
position();
*/

/* Score */

var t = document.getElementById('score');

var score_evolution = function(){
    t.innerHTML = c;
}









