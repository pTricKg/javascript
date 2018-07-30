function guessNumber(number) {
  // Prompt the user for a number
  guess = prompt("Pick a number from 1 to 100.");
	
  // Convert their guess to a number using +
  guess = +guess;
  
  if(guess < 1) {
      alert("User input invalid!!");
  }

  // Define base case
  if (guess === number) {
	return alert("You got it! The number was " + number);
  }
  // Define recursive case with a function call
  else if(guess !== number) {
    alert("You picked " + guess +". Try again!");
    guessNumber(number);
  }
}

// Call the function guessNumber() with an integer for an argument
guessNumber(5);
