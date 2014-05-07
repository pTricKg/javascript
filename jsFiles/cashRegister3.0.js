function howManyCoins (coinName, coinAmount, coinsSoFar) {
    // base case
    if (change < coinAmount) {
       console.log(coinsSoFar + " " + coinName);
    }else {
        change -= coinAmount;
        return howManyCoins(coinName, coinAmount, coinsSoFar + 1); // recursion
    }
}

change = 4.94;
console.log("Give them:");
howManyCoins("dollar bills", 1.00, 0);
howManyCoins("quarters", 0.25, 0);
howManyCoins("dimes", 0.10, 0);
howManyCoins("nickels", 0.05, 0);
howManyCoins("pennies", 0.01, 0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2)); // checking function


/* Cash Register */
var cashRegisterWithChange = {
	total: 0,
	change: 0,
	setTotal: function (amount) {
		this.total = amount;
	},
	getPaid: function (amountPaid) {
		if (this.total > amountPaid) {
			console.log ("Not enough!");
		} else {
			this.change = amountPaid - this.total;
			console.log ("Give them:");
			this.howManyCoins("dollar bills", 1.00, 0);
			this.howManyCoins("quarters", 0.25, 0);
			this.howManyCoins("dimes", 0.10, 0);
			this.howManyCoins("nickels",0.05,0);
			this.howManyCoins("pennies",0.01,0);
		}
	},
	howManyCoins: function (coinName, coinAmount, coinsSoFar) {
        if (this.change < coinAmount) {
    	    console.log(coinsSoFar + " " + coinName);
	   }else {
		    this.change -= coinAmount;
		    this.howManyCoins(coinName, coinAmount, coinsSoFar + 1);
	}
	}
};

cashRegisterWithChange.setTotal(5.06);
cashRegisterWithChange.getPaid(10.00); //to get our $4.94 of change!

//more recursive cashRegister
//bad! This should be inside an object. We'll fix that a bit later
var change = 0; 

function howManyCoins (coinName, coinAmount, coinsSoFar) {
    if (change < coinAmount) {
		console.log(coinsSoFar + " " + coinName);
	} else {
		change -= coinAmount;
		howManyCoins(coinName, coinAmount, coinsSoFar + 1);
	}
}

var currency = [5.00, 1.00, 0.25, 0.10, 0.01];
var coinNames = ["five dollar bills", "one dollar bills", "quarters", "dimes", "pennies"];

function makeChange (coinNames, currency, index) {
	if (index >= currency.length || index >= coinNames.length) {
		return;
	} else {
//		console.log(currency[index] + " " + coinNames[index]);
        howManyCoins(coinNames[index], currency[index], 0);
        makeChange(coinNames, currency, index + 1);
	}
}

change = 18.94;
makeChange(coinNames, currency, 0);
