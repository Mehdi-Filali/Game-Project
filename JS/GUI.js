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

var exit=document.getElementById('button-exit');

var quit = function(){
    document.getElementById('button-play').style.display= 'none';
    document.getElementById('button-exit').style.display='none';
}

if(exit) exit.addEventListener('click', quit);



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

/* Collision */

var check_collision = function(){
    var _s = document.getElementById('Stickman1'),
        _blocs = document.getElementsByClassName('bloc'),
        _end = document.getElementById('game-over'),
        _restart = document.getElementById('restart'),
        _return = document.getElementById('exit');
    
    for (var i= 0; i<_blocs.length ; i++){
        var _bloc = _blocs[i];
    
        if(_bloc.offsetLeft <= (_s.offsetLeft + _s.offsetWidth)){
            if((_s.offsetTop + _s.offsetHeight) > _bloc.offsetTop ){ 
                _s.style.display = 'none' ;
                for (var j=0; j<_blocs.length; j++){
                    _blocs[j].style.display = 'none' ;
                }
                _end.style.display = 'inline-block';
                _restart.style.display = 'inline-block';
                _return.style.display = 'inline-block';
                clearInterval(interval);;
            }
        }
        
    }
}

setInterval(check_collision, 200);


/* Score */

var interval,       
    score = document.getElementById('score'),
    evolution = 0;

var evolution_score = function(){
    do{
        evolution++;
        score.innerHTML = evolution;
    }while(s);
}


var decompte = function(){
    interval = setInterval(evolution_score, 900);
}

setTimeout(decompte, 3200);

