function Card(n,s) {//constructor
        var number = n;
        var suit = s;
        //getters
        this.getNumber = function(){//method
                return number;
        };
        this.getSuit = function(){//method
                return suit;
        };
        this.getValue = function() {
            if (number >= 11) {
                return 10;
            }else if ( number === 1) {
                return 11;
            }else {
                return number;
            }
        };
}
// return a new card with a suit that is a random number from 1 to 4
//and a number that is a random number between 1 and 13
var deal = function(){
        var randNum = Math.floor(Math.random() * 13) + 1;
        var randSuit = Math.floor(Math.random() * 4) + 1;
        
        return new Card(randNum,randSuit);
};
// examples of the deal function in action
//var card1 = deal();
//var card2 = deal(); 

function Hand(card1, card2) {
    this.card1 = deal();
    this.card2 = deal();
    //return deal(card1, card2);
    this.score = function() {
        score1 = this.card1.getValue();
        score2 = this.card2.getValue();
        return score1 + score2;
    };
}
var myHand = new Hand();
var yourHand = new Hand();

console.log("I have "+myHand.score()+" and you have "+
yourHand.score());

if(yourHand.score() > myHand.score())
console.log("You win!");
else if(yourHand.score() < myHand.score())
console.log("I win!");
else
console.log("We tied!");

