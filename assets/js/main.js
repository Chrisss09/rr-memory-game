var gameFaceArray = [
    "assets/images/stalin.jpg",
    "assets/images/stalin2.jpg",
    "assets/images/lenin.jpg",
    "assets/images/lenin2.jpg",
    "assets/images/trotsky.jpg",
    "assets/images/trotsky2.jpg",
    "assets/images/marx.jpg",
    "assets/images/marx2.jpg",
    "assets/images/sverdlov.jpg",
    "assets/images/sverdlov2.jpg",
    "assets/images/kamenev.jpg",
    "assets/images/kamenev2.jpg"
];
var gameValues = [];
var gameCardIds = [];
var gameFaceFlipped = 0;

Array.prototype.gameFaceShuffle = function() {
    var i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

function newGameField() {
    gameFaceFlipped = 0;
    var output = '';
    gameFaceArray.gameFaceShuffle();
    for(var i = 0; i < gameFaceArray.length; i++) {
        output += '<div id="card_'+i+'" onclick="flipCard(this,\''+gameFaceArray[i]+'\')"></div>';
    }
    document.getElementById('game-field').innerHTML = output;
}

function flipCard(card, val) {
    if(card.innerHTML == "" && gameValues.length < 2) {
        card.innerHTML = val;
        if(gameValues.length == 0) {
            gameValues.push(val);
            gameCardIds.push(card.id);
        } else if(gameValues.length == 1) {
            gameValues.push(val);
            gameCardIds.push(card.id);
            if(gameValues[0] == gameValues[1]) {
                gameFaceFlipped += 2;
                // Clear both arrays
                gameValues = [];
                gameCardIds = [];
                // Check to see if the whole board is cleared
                if(gameFaceFlipped == gameFaceArray.length) {
                    alert("Game Complete");
                    document.getElementById("game-field").innerHTML = "";
                    newGameField();
                }
            } else {
                function flipBackAround() {
                    // Flip the 2 tiles back over
                    var card_1 = document.getElementById(gameCardIds[0]);
                    var card_2 = document.getElementById(gameCardIds[1]);
                    card_1.style.background = 'url("../images/soviet-logo.jpg") no-repeat';
                    card_1.innerHTML = "";
                    card_2.style.background = 'url("../images/soviet-logo.jpg") no-repeat';
                    card_2.innerHTML = "";
                    // Clear both arrays
                    gameValues = [];
                    gameCardIds = [];
                }
                setTimeout(flipBackAround, 700);
            }
        }
    }
}
