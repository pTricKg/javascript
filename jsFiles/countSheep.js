// Here is the function using a for loop
function countSheepWithLoop(number) {    
  for (i = 1; i <= number; i++) {
    if (i === number) {
      console.log("ZzzzzZZZZzzZZZz");
    }
    console.log("Another sheep jumps over the fence.");
  }
}

// And here is the recursive function
function countSheep(number) {
  if (number === 0) {
    // base
    console.log("ZZZZZzzZZZZzzzzz");
    return 1;
  } else {
	console.log("Another sheep jumps over the fence.  Counting down: " + newNumber);
	//decrementing to restore base case
	newNumber = number - 1;
	// Recursively call the function
	// with newNumber as the parameter
	countSheep(newNumber);
  }
}

// Call your recursive function:
countSheep(5);
