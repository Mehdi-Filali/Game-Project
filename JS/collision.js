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

/* Exit */

var exit=document.getElementById('exit');

var quit = function(){
    location=('Index.html');
}

exit.addEventListener('click', quit);

/* Restart */

var restart = document.getElementById('restart');

var replay = function(){
    var _g = document.getElementById('game-over'),
        _e = document.getElementById('exit'),
        _st = document.getElementById('Stickman1'),
        _r = document.getElementById('restart'),
        _blcs = document.getElementsByClassName('bloc'),
        _score = document.getElementById('score');
    
    _g.style.display = 'none';
    _e.style.display = 'none';
    _r.style.display ='none';
    _st.style.display = 'inline-block';
    for(var s=0; s<_blcs.length; s++){
        _blcs[s].style.display = 'inline-block';
    }
    interval = setInterval(evolution_score, 900);
    setTimeout(decompte, 3200);
    clearInterval(interval);
    score.innerHTML = 0;
    evolution = 0;
}

restart.addEventListener('click', replay);


