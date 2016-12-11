/* Home */

var play=document.getElementById('button-play');

var playing = function(){
    document.getElementById('button-play').style.display= 'none';
    
    document.getElementById('button-exit').style.display= 'none';
        
    document.getElementById('timer').style.display= 'inline-block';
}

if(play) play.addEventListener('click', playing);

var player=document.getElementById('timer');

var lets_play = function(){
    //document.getElementById('head').style.display='inline-block';
    document.getElementById('game').style.display='inline-block';
}

// if play doesn't exist : page2
if(!player){
    lets_play();
};


/* Game */

var randomize = function() {
    var blocs = document.getElementsByClassName("bloc");
    for(var b = 0; b < blocs.length; b++){
        blocs[b].style.height = Math.random() * (50 - 30) + 30;
        blocs[b].style.width = Math.random() * (40 - 20) + 20;
     }
}

setInterval(randomize,1000);

var jump = document.getElementById('Stickman1'),
    flag = false;

function key_down(e){
    //console.log(e.keyCode);    
    if(e.keyCode === 32){
        if(flag){
            jump.style.top = '165px';
            return;
        }
        
        jump.style.top = '80px'; 
        flag=true;
    }
}

function key_up(e){
    if(e.keyCode === 32){
        flag = false;
        jump.style.top = '165px';
    }
}

document.addEventListener('keyup', key_up);
document.addEventListener('keydown', key_down);


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

if(s) s.addEventListener('click', ilan);


