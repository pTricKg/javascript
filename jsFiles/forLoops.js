//looping through a list
var i;
var animals = ["dog", "ferret", "lizard"];

// Loop through array
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

//setting length to make for quicker
var i;
var animals = ["dog", "ferret", "lizard"];

var length = 3;

// Loop through array
for (var i = 0; i < length; i++) {
    console.log(animals[i]);
}

//loop through a string
var word = "code";

var i;

// Loop through word
for (var i = 0; i < word.length; i++) {
    console.log(word[i]);//printing out one letter at a time
}

//in progress

// Define substring 
var substring = function(input,start,end) {
    var i;
    // Write test here:
    for (i = start; i <= end; i++) {
        console.log(input[i]);//one character per line
}
    };


//Testing substring to see it print
substring("lorem ipsum dolor",6,10);

//creating variable to store substring
// Define substring 
var substring = function(input,start,end) {
    var i;
    var subset = "";
    // Write test here:
    for (i = start; i <= end; i++) {
        subset += input[i];
}
return subset;
    };
//Testing substring to see it print
console.log(substring("lorem ipsum dolor",6,10));

//
//nesting loops
var i = 0;
var j = 0;

for (i = 1; i <=3; i++) {
    for (j = 1; j <= 5; j++) {
        console.log(j);
    }
}


