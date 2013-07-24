// First we pick a random number between 1 and 6 for our roll of the die
var die1 = Math.floor(Math.random()*6 + 1);
var die2 = Math.floor(Math.random()*6 + 1);
var score;

/* if either die is 1, zero score else if die doubles, double score */

if(die2 === 1 || die1 === 1 )
  score = 0;
else if(die2 === die1)
  score = score * 2 ;
else
  score = die1 + die2;

console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);

//embedded loop
var count = 0;

for(i = 1; i <= 3; i++){
  
  for(y = 1; y <= 4; y++ ){
  
    count++;
  
  }

}

console.log(count);

//looping through rolls of die
//to check probability of rolling 1's
var containsOne = 0;
var totalCombos = 0;
var probability;
var i;
//Here we walk through all possible outcomes of two 6 sided die
for(i = 1; i <= 6; i++){
    var die1 = Math.floor(Math.random()*6 + 1);
    
   for(y = 1; y <= 6; y++){
        var die2 = Math.floor(Math.random()*6 + 1);
        
        totalCombos++;
        if(die2 === 1 || die1 === 1 ) {
            containsOne++;
        }
       
  }

}

//Now find what the probability was
probability = containsOne / totalCombos;

console.log("The probability of rolling a 1 is " + probability+
           " or "+containsOne+"/"+totalCombos);

//modified above to check
//if rolling double's
var isDouble = 0;
var totalCombos = 0;
var probability;
var i;
//Here we walk through all possible outcomes of two 6 sided die
for(i = 1; i <= 6; i++){
    var die1 = Math.floor(Math.random()*6 + 1);
    
   for(y = 1; y <= 6; y++){
        var die2 = Math.floor(Math.random()*6 + 1);
        
        totalCombos++;
        if(die2 === die1) {
            isDouble++;
        }
       
  }

}

//Now find what the probability was
probability = isDouble / totalCombos;

console.log("The probability of rolling a 1 is " + probability+
           " or "+isDouble+"/"+totalCombos);
