var wins = 0;
var guessesLeft = 12;
var userGuess = "";
var currentWord = "";
var placeholder = [];
var guesses = [];
var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var nameArray = ["chumbucket", "blackfinger", "cheedo", "masterblaster", "furiosa", "splenid"];
currentWord = getCurrentWord();

console.log("currentWord: " + currentWord);
makePlaceholder(currentWord);
console.log("placeholder: " + placeholder);
function reset() {
    currentWord = getCurrentWord();
    guesses = [];
    userGuess = "";
    placeholder = [];
    guessesLeft = 12;
    makePlaceholder(currentWord);
}


function makePlaceholder(word) {
    for (var i = 0; i < word.length; i++) {
        console.log("in for loop " + word);
        var c = word[i];
        console.log("c: " + c);
        if (c != "-" || c != " ") {
            console.log("in if ");
            placeholder.push("_");
             
        } else {
            console.log("in else");
            placeholder.push(c.toString());
        }
        console.log("placeholder: " + placeholder);
    }
}
function win(){
    // placeholder = currentWord.toArray();
    // setTimeout(function(){
    //do what you need here
    alert("You Win! The word was " + currentWord);
    reset();
// }, 2000);
}
    
    

function lose(){
    alert("Sorry! You lost. The word was " + currentWord +".");
    reset();
}
function getCurrentWord() {
    return nameArray[Math.floor(Math.random() * nameArray.length)];
}
document.onkeyup = function(element) {
    userGuess = element.key;

    console.log("userGuess: " + userGuess);
    console.log("currentWord:" + currentWord);
    // multiple character instances
    // uppercase comparison
    // if (guessesLeft <= 0){
    //     reset();
        
    // }
    if (charArray.indexOf(userGuess) !== -1 && guesses.indexOf(userGuess) === -1) {
    	guesses.push(userGuess);
    	guessesLeft--;
        if (guessesLeft <= 0){
        lose();
        
    }
        for (var i = 0; i < currentWord.length; i++) {
            var c = userGuess.charAt(i);
            var indexOf = currentWord.indexOf(userGuess);
            if (c === currentWord[indexOf]) {
                placeholder[indexOf] = c.toString();
                for (var i = (indexOf+1); i<placeholder.length;i++){
                    if (c === currentWord[i]){
                        placeholder[i] = c.toString();
                    }
                }
            }
            console.log("placeholder: " + placeholder.toString());
            console.log("currentWord: "+currentWord.toString());
            if (placeholder.indexOf("_") == -1) {
                placeholder[i] = c.toString();
                wins++;
                win();
            }
        }
        
    } 
    var html = "<p>Wins: " + wins + "</p>" + 
    "<p>Current Word</p>" + 
    "<p>" + placeholder.join(" ") + "</p>" + 
    "<p>Number of guesses remaining</p>" + 
    "<p>" + guessesLeft + "</p>" + 
    "<p>Letters already guessed</p>" + 
    "<p>" + guesses.toString() + "</p>";
    document.querySelector("#hangman").innerHTML = html;
}