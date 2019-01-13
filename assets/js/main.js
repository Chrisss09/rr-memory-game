var gameFaceArray = [
    "assets/images/0.jpg",
    "assets/images/0-1.jpg",
    "assets/images/1.jpg",
    "assets/images/1-1.jpg",
    "assets/images/2.jpg",
    "assets/images/2-2.jpg",
    "assets/images/3.jpg",
    "assets/images/3-3.jpg",
    "assets/images/4.jpg",
    "assets/images/4-4.jpg",
    "assets/images/5.jpg",
    "assets/images/5-5.jpg",
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
}

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
    if(card.innerHTML = "" && gameValues.length < 2) {
        card.style.background = gameFaceArray; //Could be an error
        card.innerHTML = val;
        if(gameValues.length == 0) {
            gameValues.push(val);
            gameCardIds.push(card.id);
        } else if(gameValues.length == 1) {
            gameValues.push(val);
            gameCardIds.push(card.id);
            if(gameValues[0] == gameValues[1]) {
                gameFaceFlipped += 2;
                gameValues = [];
        gameCardIds = [];
                if(gameFaceFlipped == gameFaceArray.length) {
                    alert("Board Cleared....Generating new game");
                    document.getElementById("game-field").innerHTML = "";
                    newGameField();
                }
            }
        }
    }
}
