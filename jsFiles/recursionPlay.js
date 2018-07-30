// Define function multiplyBy10()
function multiplyBy10(num) {
    return num * 10;
}

multiplyBy10(20);

//counting to 10
for (var num = 1; num <= 10; num++) {
    console.log(num);
}

//making function to hold counting loop
function countTo(int) {
    //counting to 10
    for (var num = 1; num <= int; num++) {
        console.log((num + " one-thousand!");
}
}
countTo(20);//calling function to count to input arg

//recursive call inside function
function multiplyBy10(number) {
  console.log(number * 10);
}

function multiplesOf10(limit) {
  for( var num = 1; num < limit; num++) {
      multiplyBy10(num);//recursive call
  }
   
}
//calling functioin
multiplesOf10(9);

//recursion to get factorial of number
function factorial(n) {  
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    return console.log("Are you trying to crash the program!!");
  }
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  
  // Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

factorial(6);

/*Demonstrating how loops and recursion can do much the same */

function loopFactorial(n) {
  var result = n; //setting input to store in result
  while (n > 1) {
    result = result * (n-1); // factorial calculation
    n--; // decrementing input
  }
  return result;
}

function recursiveFactorial(n) {
  if (n < 0) {
    return console.log("Must be a positive integer.");
  }
  else if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1); // factorial calc that calls on itself
}

var loopResult = loopFactorial(6);// Call the function loopFactorial(n)
var recursiveResult = recursiveFactorial(6);// Call the function recursiveFactorial(n)

console.log("The loop function returned: " + loopResult);
console.log("The recursive function returned: " + recursiveResult);

/* Beanstalks */
function growBeanstalk(years) {
  // Base case
  if (years <= 2) {
    return 1;
  }	
  // Recursive case
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);	
}

// Set the height of the beanstalk using your function
var height = growBeanstalk(15);

console.log(height);

/* CONTROL FLOW for Above */
// THE FOLLOWING IS NOT REAL JAVASCRIPT
// It is just an illustration of the control flow
// in a recursive function.
1. growBeanstalk(5) {
    return growBeanstalk(4) + growBeanstalk(3);
2.   growBeanstalk(4) {
      return growBeanstalk(3) + growBeanstalk(2);
3.     growBeanstalk(3) {
        return growBeanstalk(2) + growBeanstalk(1);
4.       growBeanstalk(2) {
          return 1;
         };
5.       growBeanstalk(1) {
          return 1;
         };
        return 2; // (1 + 1)
       };
6.     growBeanstalk(2) {
        return 1;
       };
     return 3; // (2 + 1)
    };
7.  growBeanstalk(3) {
     return growBeanstalk(2) + growBeanstalk(1);
8.     growBeanstalk(2) {
        return 1;
       };
9.     growBeanstalk(1) {
        return 1;
       };
     return 2; // (1 + 1)
    };
   return 5; // (3 + 2)
  };
/*AND NOW, THE STACK for Above */
// THE FOLLOWING IS NOT REAL JAVASCRIPT
// Letter A - I represent values stored in the stack
// It is a visual guide to how values
// are stored in the stack.
1. growBeanstalk(5) {
    return growBeanstalk(4) + growBeanstalk(3);
2.   growBeanstalk(4) {
      return growBeanstalk(3) + growBeanstalk(2);
3.     growBeanstalk(3) {
        return growBeanstalk(2) + growBeanstalk(1);
4.       growBeanstalk(2) {
A=        return 1;
         };
5.       growBeanstalk(1) {
B=        return 1;
         };
C=      return 2; // (1 + 1)
       };
6.     growBeanstalk(2) {
D=      return 1;
       };
E=    return 3; // (2 + 1)
     };
7.   growBeanstalk(3) {
      return growBeanstalk(2) + growBeanstalk(1);
8.     growBeanstalk(2) {
F=      return 1;
       };
9.     growBeanstalk(1) {
G=      return 1;
       };
H=    return 2; // (1 + 1)
     };
I=  return 5; // (3 + 2)
   };
