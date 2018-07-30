function howManyDollars(dollarsSoFar) {
    // base case
    if (change < 1.00) {
		console.log (dollarsSoFar + " dollar bills");
	} else {
		change -= 1.00;
		return howManyDollars(dollarsSoFar + 1); // recursion
	}
}
function howManyQuarters(quartersSoFar) {
    // base case
    if (change < 0.25) { 
        console.log (quartersSoFar + " quarters"); 
   }else { 
       change -= 0.25; 
       return howManyQuarters(quartersSoFar + 1); // recursion
   }
    
}
function howManyDimes(dimesSoFar) {
    // base case
    if (change < 0.10) {
       console.log(dimesSoFar + " dimes");
    }else {
        change -= 0.10;
        return howManyDimes(dimesSoFar + 1); // recursion
    }
   
}
function howManyNickels(nickelsSoFar) {
    // base case
    if (change < 0.05) {
       console.log(nickelsSoFar + " nickels");
    }else {
        change -= 0.05;
        return howManyNickels(nickelsSoFar + 1); // recursion
    }
}
function howManyPennies(penniesSoFar) {
    // base case
    if (change < 0.01) {
       console.log(penniesSoFar + " pennies");
    }else {
        change -= 0.01;
        return howManyPennies(penniesSoFar + 1); // recursion
    }
}

change = 4.94;
console.log("Give them:");
howManyDollars(0); //passing in "so far" parameters of 0
howManyQuarters(0);
howManyDimes(0);
howManyNickels(0);
howManyPennies(0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));
