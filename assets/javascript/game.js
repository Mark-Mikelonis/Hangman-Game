var wins = 0;
var guessesLeft = 12;
var userGuess = "";
var currentWord = "";
var placeholder = [];
var guesses = [];
var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var nameArray = ["chumbucket", "blackfinger", "cheedo", "masterblaster", "furiosa", "splenid"];
currentWord = getCurrentWord();

var audioElement;

console.log("currentWord: " + currentWord);
makePlaceholder(currentWord);
window.onload = function draw(){
    audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/audio/max.mp3");
    audioElement.loop = true;
    // Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
      });
    setup();
}
function setup() {
    var html = "<h2>Press any key to get started!</h2>" +
    "<p>Wins: " + wins + "</p>" + 
    "<p>Current Word</p>" + 
    "<p>" + placeholder.join(" ") + "</p>" + 
    "<p>Number of guesses remaining</p>" + 
    "<h1>" + guessesLeft + "</h1>" + 
    "<p>Letters already guessed</p>" + 
    "<p>" + guesses.toString().toUpperCase() + "</p>";
    document.querySelector("#hangman").innerHTML = html;
    audioElement.play();
   
    
}
console.log("placeholder: " + placeholder);
function reset() {
    currentWord = getCurrentWord();
    guesses = [];
    userGuess = "";
    placeholder = [];
    guessesLeft = 12;
    makePlaceholder(currentWord);
    setup();
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
    
    setTimeout(function(){
   
    console.log("in Win");
    placeholder = currentWord.split("");
    alert("You Win! The word was " + currentWord);
    reset();
}, 1);
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
                wins++;
                win();
            }
        }
        
    } 

    setup();
   
}