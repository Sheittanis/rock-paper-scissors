export var getNpcRandChoice = function (type) {
    // var randNumber = Math.floor((Math.random() * type) + 1);
    // var choice = getChoice(randNumber);

    var item = selectionData[Math.floor(Math.random() * selectionData.length)];

    return item
}

// function getChoice(randNumber){

//     switch(randNumber){
//         case 1: return 'rock';
//         case 2: return 'paper';
//         case 3: return 'scissors';
//     }
// }


export const selectionData = [
    {
        id: 1,
        name: "hand rock",
        value: "rock",
        description: "rock smashes scissors",
        selected: false
    },
    {
        id: 2,
        name: "hand paper",
        value: "paper",
        description: "paper wraps rock",
        selected: false
    },
    {
        id: 3,
        name: "hand scissors",
        value: "scissors",
        description: "scissors cut paper",
        selected: false
    }
];

