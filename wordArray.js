var Word = require("./word.js");

// Selects a random word from the array and returns it as an object //
module.exports = {

    selectWord : function(){
        var words = ["Vince McMahon", "The Rock", "HHH", "Stone Cold Steve Austin", "Shawn Michaels",
                     "Bret Hart", "Hulk Hogan", "Macho Man Randy Savage", "The Undertaker", "John Cena",
                     "Kevin Nash", "Scott Hall", "The Ultimate Warrior", "Brock Lesnar", "AJ Styles", 
                     "Kane"];
        var num = Math.floor(Math.random() * 16);
        var word = new Word(words[num]);
        return word; 


    }
};