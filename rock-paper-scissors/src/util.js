export var getNpcRandChoice = function(type){
    var randNumber = Math.floor((Math.random() * type) + 1);

    var choice = getChoice(randNumber);
    return choice
}

function getChoice(randNumber){

    switch(randNumber){
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
} 