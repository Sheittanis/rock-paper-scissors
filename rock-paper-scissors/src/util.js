export var getNpcRandChoice = function (mode) {

    if (mode === "Vanilla") {
        var item = vanillaSelections[Math.floor(Math.random() * vanillaSelections.length)];
        return item
    }
    else if (mode === "Friends") {       
        var item = friendsSelections[Math.floor(Math.random() * friendsSelections.length)];
        return item
    }
    else if (mode === "The Big Bang Theory") {  
        var item = bbtSelections[Math.floor(Math.random() * bbtSelections.length)];
        return item
    }

}

export var getBalloon = function () {
    const item = {
        id: 1,
        name: "point",
        value: "water balloon",
        description: "Yeah but does it beat water balloon?",
        selected: false
    }

    return item
}


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
        description: "rock smashes scissors and crushes lizard",
        selected: false
    },
    {
        id: 2,
        name: "hand paper",
        value: "paper",
        description: "paper wraps rock and disproves Spock",
        selected: false
    },
    {
        id: 3,
        name: "hand scissors",
        value: "scissors",
        description: "scissors cut paper and decapitate lizard.",
        selected: false
    },    
    {
        id: 4,
        name: "hand lizard",
        value: "lizard",
        description: "lizard poisons Spock and eats paper",
        selected: false
    },
    {
        id: 5,
        name: "hand spock",
        value: "spock",
        description: "Spock vaporizes rock and smashes scissors",
        selected: false
    }
];