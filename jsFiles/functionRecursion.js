//checking for even and odd numbers
function evenOrOdd(total){
  if(total >= 0){
    if(total % 2 === 0){
	  console.log("The number " + total + " is even");
	}else{
      console.log("The number " + total + " is odd");
	}
	// remove from total
	total--;
	// recursively call the function
	evenOrOdd(total);
  }
}
evenOrOdd(6);

/* Dealing Cards */

// DEALING CARDS
var miniDeck = new Array("ace","king","queen","jack",10,9,8,7,6,5,4,3,2);

function deal(numberOfCards){
    // If number of cards is greater than 0
    if(numberOfCards > 0){
	    // store random number between 0 
        // and the total number of cards in the miniDeck
		num = (Math.floor(Math.random() * miniDeck.length));
		// output card selected
		console.log("Your card is " + miniDeck[num]);
		// remove selected card from deck
		miniDeck.splice(num, 1);
		// remove from numberOfCards
		numberOfCards--;
		// recursively call the function
        return deal(numberOfCards);
	}
}
// Call the function and pass the number of cards you want to deal
deal(5);


/* PRINTING */

//printing list
function printListStartingAtIndex(list, index) {		
    if (index >= list.length) {
		return;
    } else {
        console.log(list[index]);
        printListStartingAtIndex(list, index + 1);
	}
}

//don't change these lines
var list = [0, 2, 4, 5, 6, 7, 9, 100];
printListStartingAtIndex(list, 0);


