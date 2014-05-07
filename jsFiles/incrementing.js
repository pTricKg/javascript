// This function should increment the start value by 1
// the number of times specified.
function increment(start, timesToIncrement) {
  // Add the appropriate code here. You must update
  // the condition in the while loop. You may want to
  // create a new variable to keep track of how many
  // times you have incremeneted the variable.
  count = 0;
  while(count < timesToIncrement) {
        start++;
        count++;
  }
  return start;
}
increment(5,15);


// This function should increment the start value by 1
// the number of times specified.
function increment(start, timesToIncrement) {
  // Add the appropriate code here, this time using a
  // for loop. This time, you must also write in the loop
  // body.
  for(i=0;i<timesToIncrement;i++) {
        start++;
  }
  return start;
}

increment(5,20);

// This function should increment the start value by 1
// the number of times specified.
function increment(start, timesToIncrement) {
  // Add the appropriate code here, this time using a
  // do/while loop. This time, you must also write in the loop
  // body.
  do {
      var count = 0;
      start++;
      count++;
    
  } while(count < timesToIncrement);
  return start;
}

// This function should increment the start value by 1
// the number of times specified.
function increment(start, timesToIncrement) {
  // Add the appropriate code here, this time using a
  // do/while loop. This time, you must also write in the loop
  // body.
  var count = 0;
  do {
    start++;
    count++;
  } while(count < timesToIncrement);
  return start;
}
