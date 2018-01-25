// Constructor function for word object //

function word(word){
    this.word = word;

// Checks if the guessed letter is in the word, if so calls method to reveal character //
this.checkLetter = function(letter, letters){
    var letterFound = false;
    for (var i = 0; i < this.word.length; i++){
        if (this.word.charAt(i).toLowerCase() === letter.toLowerCase()){
            letterFound = true;
            letters[i].changeShown();
        }
    }
    return letterFound;
}

// Checks if word has been solved by checking if all characters are revealed //
    this.checkIfSolved = function(letters){
        var solved = true;
        for (var i = 0; i < this.word.length; i++){
            if (letters[i].shown == "_"){
                solved = false;
            }
        }
        return solved;
    }
}

console.log("--------------------SUCCESS--------------------");

module.exports = word;