export var getNpcRandChoice = function (type) {
    // var randNumber = Math.floor((Math.random() * type) + 1);
    // var choice = getChoice(randNumber);

    var item = vanillaSelections[Math.floor(Math.random() * vanillaSelections.length)];

    return item
}

export var getIce = function (type) {
    const item = {
        id: 1,
        name: "bath",
        value: "water balloon",
        description: "Yeah but does it beat water balloon?",
        selected: false
    }

    return item
}
// function getChoice(randNumber){

//     switch(randNumber){
//         case 1: return 'rock';
//         case 2: return 'paper';
//         case 3: return 'scissors';
//     }
// }


export const vanillaSelections = [
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


export const friendsSelections = [
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
    },
    {
        id: 4,
        name: "fire",
        value: "fire",
        description: "BEATS EVERYTHING",
        selected: false
    }
];


export const bbtSelections = [
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