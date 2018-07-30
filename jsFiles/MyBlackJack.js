var card = Math.floor(1) * 52;

var count = 0;
for (i = 0; i < 10; i++) {
    var card = Math.floor(1) * 52;
    console.log(card);
}

// Define a function called deal
// It should return a random number between 1 and 52
function deal() {
    return Math.floor(1) * 52;
}

var deal1 = function() {
    var result = Math.random() * 52;
    return result;
};

// Declare two variables 
// For both variables, assign values gotten by calling the function
var card1 = deal1();
var card2 = deal1();

deal1(card1, card2);

/* Dealing to cards and showing results */

// Our deal function will return one random card
var deal = function() {
    var card = Math.random().toFixed(0) * 52;
    return card;
};


// Declare our two variables card1 and card2
var card1 = deal();
var card2 = deal();

// Define a function called score, which will assign points by
// adding up the cards: 
var score = function() {
    return card1 + card2;
};

console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());

//add getValue 
// Our deal function will return a random card
function deal() {
    card = Math.floor(Math.random()*52+1);
    return card;
}

//var deal = function() {
//    var card = Math.random().toFixed(0) * 52;
//    return card;
//};

// Deal out our first hand
var card1 = deal();
var card2 = deal();

// Make a getValue function here, which should convert a card to
// the value that card is worth
var getValue = function(card) {
    return card % 13;
};

// Our score function converts our cards to a score
var score = function () {
    return getValue(card1) + getValue(card2);
};

console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());

//getValue added if to check face card
// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
    // if its a face card, number should be set to 10
    if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12) {
        return 10;
    }
    // What if it's an ace?
    else if(card % 13 === 1){
        return 11;
    }
    // Otherwise number should be set to card modulo 13
    else {
        return card % 13;
    }
};

