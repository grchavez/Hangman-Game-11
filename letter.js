// Constructor function for letter function, returns to be printed //
function Letter (letter){
    this.letter = letter;
    this.shown = "_";

    this.printLetter = function(){
        return this.shown;
    }
    this.changeShown = function(){
        this.shown = letter;
    }
}
console.log("------------------------PRO WRESTLING--------------------------");

module.exports = Letter;