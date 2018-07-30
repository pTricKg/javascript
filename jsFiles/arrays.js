var hands = [];
hands[0] = [ [3,"H"], ["A","S"], [1,"D"], ["J","H"], ["Q","D"] ];
hands[1] = [ [9,"C"], [6,"C"], ["K","H"], [3,"C"], ["K","H"] ];

//Loop over every dimension in the array, logging out the suit and rank
//of each card in both hands
//1. loop over each hand
for (i = 0; i < hands.length; i++) {
    //2. loop over each card array in each hand
    for (j = 0; j < hands[i].length; j++) {
        //3. loop over each rank/suit array for each card in each hand
        for (k = 0; k < hands[i][j].length; k++) {
            //4. log the value of the rank/suit array item
            console.log(hands[i][j][k]);
        }
    }
}

// adding and changing elements in array
var cards = [ [8, "clubs"], ["A", "hearts"]];
//add a 3rd card to the array: J of spades
cards[2] = ["J","S"];
//change the rank of the first card to 2
cards[0][0] = 2;

// using splice to remove items
//given this multi-dimensional array
var teams = [ ["robert","joe"], ["martin", "sharon"] ];

//first, remove "sharon" from team 2 using splice
teams[1].splice(1,1);

console.log(teams);
//then, remove the first team from the teams array using splice
teams.splice(0,1);

console.log(teams);

/* MAKING DECK OF CARDS */

//array 1: the suits
var suits = ["clubs","hearts","diamonds","spades"];

//array 2: the ranks
var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

//using for loops, modify the "deck" array so that it becomes a 
//two-dimensional array that stores every card in the deck; 
//e.g. [1, "clubs"], [2, "clubs"],etc...["A", "spades"]
var deck = [];

for (i = 0; i < suits.length; i++) {
    for (k = 0; k < ranks.length; k++) {
       deck.push([suits[i],ranks[k]]);
    }
}

console.log(deck);


/*  ROLL CALL */
//students actually in the class
var students = ["sharon","robert", "joe"];

//students on the roll
var roll = ["robert","joe","sharon"];

//the number of students present
var numPresent = 0;

// looping to see who is present from one array to second array
for (i = 0; i < students.length; i++) {
    for (j = 0; j < roll.length; j++) {
        if (students[i] === roll[j]) {
            numPresent = numPresent + 1;
    }
        
    }
    
}

// using associative array to do above

//students on the roll
var roll = ["robert","joe","sharon"];

//students actually in the class
var students = {"sharon":true, "robert":true};

//Loop over the roll array. For each name in the roll array, check if 
//that name exists in the students associate array.
//Whenever you find a student that is present, increment the numPresent
//counter by 1
var numPresent = 0;

for (i = 0; i < roll.length; i++) {
    if (students[roll[i]]) {
        numPresent = numPresent + 1;
    }
}

// and again but looping over associative array

//This is an associative array of the results of the student roll call.
//If the value of the key is false, then the student was absent.
var students = {"robert":false,"joe":true,"sharon":true};

//Loop over the students associative array. If the student was present
//output their name to the console
for (var name in students) {
    var present = students[name]; 
    if (present) {
        console.log(name);
    }
    
}

// Creating assoicative array for hand of cards
var hand = [{'suit':'clubs',"rank":8},
    {"suit": "spades", "rank":"A"},
    {"suit":"hearts", "rank":2},
    {"suit":"hearts", "rank":"K"},
    {"suit":"clubs", "rank":9 }
    ];
// loop through assoicative array 
for (var suit in hand) {
    console.log(hand[suit].suit + " " + hand[suit].rank);
  }

// modifying variable properties in memory
//Here is the original card object
var card1 = {"suit":"clubs", "rank": 8};

//Create a variable named card2 and set it equal to card 1
var card2 = card1;
//Change the rank of the card2 variable to 3
card2.rank = 3;
//Log the value of the rank property of card 1 to the console
console.log(card1.rank);

// copying and modifying copy without effecting present memory of copied object
//Here is the original card object
var card1 = {"suit":"clubs", "rank": 8};

//Create a function called 'clone'. It should take one argument - namely
//the object to clone/copy. It should return a copy of that object
function clone(original) { 
    var copy = {}; 
        for (var key in original) { 
            copy[key] = original[key]; 
         } 
        return copy;
}

//If your 'clone' method is correct, this code should create an 
//independent copy of card1's data in card2. In other words, changing
//the property of one object should NOT change it in the other
var card2 = clone(card1);

//Change the rank of the card2 variable to 3
card2.rank = "ogieBoogie";
//Log the value of the rank property of card1 to the console
console.log(card1.rank);


