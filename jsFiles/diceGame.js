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
//all possible outcomes of two 6 sided die
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

//find what the probability was
probability = containsOne / totalCombos;

console.log("The probability of rolling a 1 is " + probability+
           " or "+containsOne+"/"+totalCombos);

//modified above to check
//if rolling double's
var isDouble = 0;
var totalCombos = 0;
var probability;
var i;
//all possible outcomes of two 6 sided die
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

//find what the probability was
probability = isDouble / totalCombos;

console.log("The probability of rolling a 1 is " + probability+
           " or "+isDouble+"/"+totalCombos);

///
//
var newArray = [];

// counting occurance

for(i=2; i<=12;i++)
    newArray[i] = 0;




for(i = 1; i <= 6; i++){
    var die1 = Math.floor(Math.random()*6 + 1);
  
  for(y = 1; y <= 6; y++ ){
      var die2 = Math.floor(Math.random()*6 + 1);
      newArray[i + y]++;
  	score = die1 + die2;
  
  }

}


//print out the probability
//to verify
for(i=2; i<=12;i++)
    console.log("The roll "+i+" has a "+newArray[i]+" in 36 chance");

///
///making doubles double score
 if(die1 === die2) {score = 2*(die1 + die2);}
  
  else {score = die1 + die2;}
}

//finally
var newArray = [];

// counting occurance

for(i=2; i<=12;i++) {
    newArray[i] = 0;
    newArray[i]++;
    console.log("The roll "+i+" has a "+newArray[i]+" in 36 chance");

// increment the array to have the proper probabilities
while (answer === 'y') {
    
    for(i = 1; i <= 6; i++){
        //var die1 = Math.floor(Math.random()*6 + 1);
       newArray[i] = newArray[i + y]++;
      for(y = 1; y <= 6; y++){
      //var die2 = Math.floor(Math.random()*6 + 1);
      newArray[i] = newArray[i + y]++;
      score = die1 + die2;
  }
  
  }

}


// initialize the variables
// score, totalScore, answer, and the two die's die1 and die2
var score = 0;
var totalScore = 0;
var answer = "";
var die1;
var die2;



this.die1 = Math.floor(Math.random()*6 + 1);
this.die2 = Math.floor(Math.random()*6 + 1);
    
if(die2 === die1){
    totalScore = 0;
    break;   
}else if (die1 + die2 ===4) {
    totalScore = -50;
}else if (die1 + die2 === 10) {
    totalScore = -100;    
}else {
    score = (10 - [die1 + die2]) * 10;
}
totalScore = score + totalScore;
console.log("You rolled a: "+die1+" and a: "+die2+" for a roll of: "+(die1+die2));

console.log("You got a score of: "+score+" . Your total score is: "+totalScore);

answer = prompt("Do you want to keep playing (y/n)");
    
}
