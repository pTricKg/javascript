//loops through name and prints
var name = "John Doe";

function getFirstName(fullName) {
    var i = 0;
    var length = fullName.length;
    while(i < fullName.length - 1) {
        console.log(fullName[i]);
        i = i + 1;
        }
    
}
getFirstName(name);

//loops through name until space
var name = "John Doe";

function getFirstName(fullName) {
    next = fullName[0];
    var i = 0;
    var length = fullName.length;
    while(i < fullName.length - 1 && next != " ") {
        console.log(fullName[i]);
        i = i + 1;
        next = fullName[i];
        }
    
}
getFirstName(name);

//merging string pulled
var name = "John Doe";

function getFirstName(fullName) {
    firstName = " ";
    next = fullName[0];
    var i = 0;
    var length = fullName.length;
    while(i < fullName.length - 1 && next != " ") {
        firstName += fullName[i];
        console.log(fullName[i]);
        i = i + 1;
        next = fullName[i];
        
        }
    return firstName;
}
console.log(getFirstName(name));

//using recursion to count up
function countUp(current) {
    // Recursive case
    if (current < 5) {
        console.log(current);
        
        // We're continuing the loop by calling countUp and passing
        // information about which step we're on through the argument.
        // The `current + 1` is like the `i++` code in a `for` loop.
        countUp(current + 1);
    }
    
    // Base case
    if (current === 5){
        console.log(current);
        
        // Base case stops loop
    }
}

// We start the loop by calling the function.
countUp(1);

//counting down
function countDown(current) {
    // Recursive case
    if (current > 1) {
        console.log(current);
        
        countDown(current - 1);//this is recursive call
    }
    
    // Base case
    if (current === 1){
        console.log(current);
        
        // stopping loop
    }
}

// We start the loop by calling the function.
countDown(5);

//
//pulling characters from string using recursion
function substring(all,start,end) {
//base case    
    if (start >= end) {
        //console.log(all[start]);
        return all[start];

//following is recursion
    }else {
        //console.log(all[start]);
        return all[start] + substring(all,start + 1,end);
    }
}

console.log(substring("lorem ipsum dolor", 6, 10));

//using break
var i;
while (true) {
    console.log("I only print once!");
    for (i = 1; i <= 5; i++){
        console.log("i print 5 times.");
    }
    break;//useful to kill loops
}



