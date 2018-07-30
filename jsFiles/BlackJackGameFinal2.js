/* BLACK JACK */
$(window).load(function(){

var wantPlay = confirm("You want to play Black Jack?");

while(wantPlay) {
    //playGame();
// Card Constructor
function Card(s,n) {//constructor
    var number = n;
    var suit = s;
    //getters
    this.getNumber = function(){//method
        if (number === 11) {
                return "Jack";
            }else if (number === 12) {
                return "Queen";
            }else if (number === 13) {
                return "King";
            }else if (number === 1) {
                return "Ace";
            }else {
                return number;
            }
        
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
    var number = Math.floor(Math.random() * 13) + 1;
    var suit = Math.floor(Math.random() * 4) + 1;
    
    return new Card(suit,number);
};

// dealing hands
function Hand() { //constructor
    var hand = [];
    hand[0] = deal(); // fill hand with cards
    hand[1] = deal();
    this.getHand = function(){// methods
        return hand;
    };
    this.score = function(){
        var sum = 0;
        for(i=0; i < hand.length; i++){
            sum += hand[i].getValue();
            // accounting for aces
            if (sum < 21) {
				if (hand[i].getValue() === 11)
                	sum -= 10;
				}
            }
            return sum;
    };
    // printing hands in string
    this.printHand = function(){
        var string = " ";
        for(k=0; k < hand.length; k++){
        	if(hand[k].getSuit() === 1){
		 		string += hand[k].getNumber() + ' of clubs \n'; 
	    	}else if(hand[k].getSuit() === 2){
		 		string += hand[k].getNumber() + ' of diamonds \n';
	    	}else if(hand[k].getSuit() === 3){
	 			string += hand[k].getNumber() + ' of hearts \n';
	    	}else {
		 		string += hand[k].getNumber() + ' of spades \n';
	    	}
         }
         return string;
     };
     // dealing more cards
     this.hitMe = function(){
         hand[hand.length] = deal();
     };
}
// dealer plays
var playAsDealer = function() {
    var dealer = new Hand();
    while(dealer.score() < 17) {
    	dealer.hitMe();
    }
    return dealer;
    };
// user plays    
var playAsUser = function() {
	var user = new Hand();
	var decision = confirm("You have a: \n " + user.printHand() + " Click OK to deal or Cancel to stay. " );
	while (decision) {
		user.hitMe();
	    decision = confirm("You have a: \n " + user.printHand() + "Again?");
	}
	return user;
};
// establish winner and loser
function declareWinner(userHands,dealerHands) {
	var userHand = userHands.score();
	var dealerHand = dealerHands.score();
	if ((userHand > dealerHand || dealerHand > 21) && userHand <= 21){
		return 'You win!';
    }else if ((userHand < dealerHand || userHand > 21) && dealerHand <= 21){
		return 'You lose!';
	}else if (userHand === dealerHand || (userHand > 21 && dealerHand > 21)){
	return 'You tied!';
    }
}
var playGame = function() {
	var userPlay = playAsUser();
	var dealerPlay = playAsDealer();
	var winMessage = declareWinner(userPlay,dealerPlay);
	alert(winMessage);
};
playGame();
wantPlay = false;
}
}

