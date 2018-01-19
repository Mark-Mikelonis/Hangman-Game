var wins = 0;
var guessesLeft = 12;
var userGuess = "";
var currentWord = "";
var placeholder = "";
var guesses = [];
var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var nameArray = ["Chumbucket","Blackfinger","Cheedo","Master Blaster","Furiosa","Splenid"];

currentWord = getCurrentWord();
console.log("currentWord: " + currentWord);
makePlaceholder(currentWord);
console.log("placeholder: " + placeholder);
// makePlaceholder(currentWord);

function reset(){
	currentWord = getCurrentWord();
	guesses = [];
	guessesLeft =12;
	
}

function makePlaceholder(word){
	
	for(var i =0; i < word.length;i++){
		console.log("in for loop " + word);
		var c = word[i];
		console.log("c: " + c);
		if (c != "-" || c != " "){
			console.log("in if ");
			placeholder += "_";
			if (i < word.length - 1){
				placeholder += " ";
			}
		} else {
			console.log("in else");
			placeholder += c.toString() ;
			
		}
		console.log("placeholder: " + placeholder);
	}
	
	
}
function getCurrentWord(){
	return nameArray[Math.floor(Math.random() * nameArray.length)];
}

document.onkeyup = function(element){
	userGuess = element.key;
	

	console.log("userGuess: " + userGuess);
	console.log("currentWord:" + currentWord);




	var html = 
		"<p>Wins: " + wins + "</p>" +
		"<p>Current Word</p>" +
		"<p>" + placeholder + "</p>" +
		"<p>Number of guesses remaining</p>" +
		"<p>" + guessesLeft + "</p>" +
		"<p>Letters already guessed</p>" +
		"<p>" + guesses.toString() + "</p>";

	document.querySelector("#hangman").innerHTML = html;
}





