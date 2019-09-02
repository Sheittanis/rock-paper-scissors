export var getNpcRandChoice = function(type){
    var choice = Math.floor((Math.random() * type) + 1);
    
    return choice
}