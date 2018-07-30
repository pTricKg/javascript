//Create an object called FizzBuzzPlus
var FizzBuzzPlus = {
//create the following functions:

// isFizzBuzzie
// return true if the provided value is
// a multiple of 3 or 5 but not both 3 and 5.
// otherwise it returns false
// arguments: number - integer
// returns: true or false - boolean 
isFizzBuzzie: function(num) {
        if((num % 3 === 0 || num % 5 === 0) && (num % 15 !== 0)) {       
            return true;
        }else {
            return false;
        }
    },
//getFizzBuzzSum
//returns the sum of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - sum of the numbers below the maximum which are multiples of 3 or 5 but not both
getFizzBuzzSum: function(num) {
    var sum = 0;
    for ( i = 0; i < num; i++ ) {
        if (this.isFizzBuzzie(i)) {
            sum += i; 
        }
    }
    return sum;
},
//getFizzBuzzCount
//returns the count of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - count of the numbers below the maximum which are multiples of 3 or 5 but not both
getFizzBuzzCount: function(num) {
    var count = 0;
    for ( i = 0; i < num; i++ ) {
        if (this.isFizzBuzzie(i)) {
            count++;
        }
        }
    return count;
},
//getFizzBuzzAverage
//returns the average(sum/count) of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - average(sum/count) of the numbers below the maximum whihch are multiples of 3 or 5 but not both
getFizzBuzzAverage: function(num) {
    return this.getFizzBuzzSum(num) / this.getFizzBuzzCount(num);
}
};
FizzBuzzPlus.isFizzBuzzie(15);
FizzBuzzPlus.getFizzBuzzSum(15);
FizzBuzzPlus.getFizzBuzzCount(15);
FizzBuzzPlus.getFizzBuzzAverage(15);
