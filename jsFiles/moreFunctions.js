// Sample function that returns true if the substr is
// entirely contained in the second half of str and
// false if it is not in the string or starts in the
// first half of the string.
//
// So, inSecondHalf('foobar', 'bar') returns true, but 
// inSecondHalf('foobar', 'foo') returns false.
function inSecondHalf(str, substr) {
  var halfwayPoint = str.length / 2;
  if (str.indexOf(substr) < halfwayPoint) {
    return false;
  } else {
    return true;
  }
}

// Modify the following function according to the
// comments inside.

function contains(str, substr) {
  // Return true if substr is a substring of str
  // and false if substr is not a substring of str
  if (str.indexOf(substr) >= 0){
      return true;
  }else {
      return false;
  }
  
}

// trimName accepts a person as an argument. Person
// will always be an object.
// Return undefined if name is not defined. Otherwise,
// return a trimmed name.
function trimName(person) {
  // If you do not set this variable to a value, it will be
  // undefined.
  var trimmedName = '';
  // Do a check here to see if a person's name is defined.
  if (person !== undefined) {
    trimmedName = person.name.trim();
  }

  return trimmedName;
}

// Recall that && evaluates operands from left to right. If it
// encounters a false operand, it does not continue evaluating
// operands. Thus, foo && foo.bar will not access foo.bar if foo
// is undefined.
function exampleFunction(foo) {
  if (foo && foo.bar) {
    // Do things here.
  }
}

// Implement the function as before.
//
// But now it's possible that person is undefined.
// You must verify that person is not undefined and
// that person.name is undefined.
function trimName(person) {
  var trimmedName;
  // Add a condition here.
  if (person !== undefined && person.name) {
    trimmedName = person.name.trim();
  }
  return trimmedName;
}
