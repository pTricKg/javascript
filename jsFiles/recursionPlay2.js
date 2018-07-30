// Create an empty array called "stack"
stack = [];
// Here is our recursive function
function power(base, exponent) {
  // Base case 
  if ( exponent === 0 ) {
    return 1;
  }
  // Recursive case
  else {
	stack[exponent - 1] = base * power(base, exponent - 1);
    return stack[exponent - 1];
  }
}

power(3, 3);

//countDown with the stack
// 1. Create an empty array called "stack"
stack = [];
// 2. Define the function countDown(int) 
function countDown(int) {
    stack.push(int); // pushing int values givin to countDown into stack array
    if (int === 1) { // base case
        return 1;
    }else { // recursive case
        return countDown(int - 1); // counting down
    }
}
// 3. Call countDown() on an integer
countDown(5);


// And now let's have a look at that stack:
console.log(stack);

// getting factorial with recursion

var stack = [];

function countDown(int) {
  stack.push(int);
  if (int === 1) {	
    return 1;
  }
    return countDown(int - 1);
}

function multiplyEach() {
  // Remove the last value of the stack 
  // and assign it to the variable int
  int = stack.pop();
  x = stack.length;
  // Base case
  if (x < 1) {
    return int;
  }
  // Recursive case
  else {
	stack[x - 1] = int * stack[x - 1];
	return multiplyEach();
  }
}

// Call the function countDown(7)
countDown(7);
// And then print out the value returned by multiplyEach()
console.log(multiplyEach());

//manipulating array to capitalize each item in array
// Our array of messy words
var capitals = ["berlin", "parIs", "MaDRiD"];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
} // making first letter capital and rest to lower case

// Our recursive function
function fixLetterCase(array, i) {    
  // Base case
  if (i === array.length) {
    return;
  } 
  // Action
  array[i] = capitalize(array[i]); // assigning function result to array
  // Recursive case
  return fixLetterCase(array, i + 1); // taking in array and incrementing i until matches base case
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);

//digging in deeper with arrays
//getting at nested arrays
var capitals = [ ["berlin", "parIs", "MaDRiD"], 
                 ["monTEvideo", "BrASiLia"],
                 ["dElhi", "toKYo", "BeiJing"],
                 ["CanBerra"],
                 ["kiGaLi", "pretoRIA"] ];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, x, y) {
  if (y === array.length) {
    return;
  }
  else if (x === array[y].length) {
    return fixLetterCase(array, 0, y + 1);
  }
  else {
    array[y][x] = capitalize(array[y][x]);
    return fixLetterCase(array, x + 1, y);
  }	
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);

//this one needs work
//lots of work
// Here is the array we will store results in
var multiples = [];

function multiplesOf(base, i) {
    //multiples.push(i);
  // Base case
  if (i === 0) {
	// Write the array multiples to the console
    return console.log(multiples.push(i));
  }
  // Recursive case
  else {
    multiples[i - 1] = base * i;
	// Add a recursive function call
    multiplesOf(base, i - 1);
  }	
}

multiplesOf(5,25);
