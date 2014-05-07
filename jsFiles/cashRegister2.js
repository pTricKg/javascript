var change = 0;
function howManyQuarters(howMuchMoney) {
       if(howMuchMoney < 0.25) {
            //return 0;
            change = howMuchMoney;
            return howMuchMoney / 0.25;   
		}else {
            change = howMuchMoney - 0.25;// this get pennies left over
            //howManyQuarters(change);
            return howManyQuarters(change) + howMuchMoney;
            
		}
//        howManyDollars: function(amountOfMoney) {
//    	if(amountOfMoney < 1) {
//    	    return amountOfMoney;   
//		}else {
//    	    return 1;
//            this.howManyDollars(); 
//            amountOfMoney - 1.00;
//		}
//	}	
}
change = 0.99;
console.log ("Pay out " + Math.floor(howManyQuarters(change)) + " quarters");
console.log ("And you'll have " + change * 100 + " pennies left over");
