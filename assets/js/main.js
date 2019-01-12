var gameFaceArray = ['Stalin','Stalin','Trotsky','Trotsky','Lenin','Lenin','Marx','Marx','Sverdlov','Sverdlov','Kamenev','Kamenev'];
var gameValues = [];
var gameTileIds = [];
var gameFaceFlipped = 0;

console.log(gameFaceArray);

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
        output += '<div id="tile_'+i+'" onclick="flipTile(this,\''+gameFaceArray[i]+'\')"></div>';
    }
    document.getElementById('game-field').innerHTML = output;
}
