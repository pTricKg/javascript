// JavaScript Document
// Check if the user is ready to play!
confirm("Are you ready to play?");
var age = prompt("What is your age?");
if (age <18){
    console.log( "You can play but i take no blame!");
}else{
    console.log ("Welcome to fun!");
}

console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
console.log("Batman glares at you.");

var userAnswer = prompt("Are you feeling lucky, punk?");

if (userAnswer == "yes") {
    console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
}else{
    console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}

var feedback = prompt("Rate this game out of 10");

if (feedback > 8){
    console.log("This is just the beginning of my game empire. Stay tuned for more!");
}else{
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}

//same as above but with window alerts 
// JavaScript Document
// Check if the user is ready to play!
confirm("Are you ready to play?");
var age = prompt("What is your age?");
if (age <18){
    alert( "You can play but i take no blame!");
}else{
    alert("Welcome to fun!");
}

alert("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
alert("Batman glares at you.");

var userAnswer = prompt("Are you feeling lucky, punk?");

if (userAnswer == "yes") {
    alert("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
}else{
    alert("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}

var feedback = prompt("Rate this game out of 10");

if (feedback > 8){
    alert("This is just the beginning of my game empire. Stay tuned for more!");
}else{
    alert("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}
