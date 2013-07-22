/*blackJack.js*/

console.log("I'm ready to build a blackjack game!");

//variable for random number generation
var randomRating = Math.random() * 10;


console.log(randomRating);

//function to deal 2 cards
function twoRandomScores() {
    var score1 = Math.random() * 10;
    var score2 = Math.random() * 10;
    
    return score1 + score2;
}

twoRandomScores();

//communication score to user
var randomScore = Math.random() * 52;

console.log("I got the score " + randomScore.toFixed(0));
//toFixed will print non-float numbers

//seperating suits
var deal = Math.random() * 52;
var final = deal % 13;

console.log(final);

//finding out if dealt card are odd or even
var outcome;
var deal = Math.random() * 40;

if (deal % 2 === 0) {
    this.outcome = 'even';
}else {
    this.outcome = 'odd';
}
