//checking type and getting value associated with type
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var x in languages) {
    if (typeof languages[x] === typeof "string") {
        console.log(languages[x]);
    }else {
        console.log("Try again!");
    }
   //console.log(languages[x]);
}

//using prototype to extend class
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + this.breed + " dog");
};


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

//
//
//using var to make private, not this.
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! "+myStudentReport[x]);
    }
}

console.log("Your overall GPA is "+myStudentReport.getGPA());
