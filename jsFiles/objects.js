var friends = new Object();

friends.bill = {
    firstName : 'Bill',
    lastName : 'Gates',
    number : '555-666-7777',
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName : 'Steve',
    lastName : 'Jobs',
    number : '555-666-5557',
    address: ['One Apple','Cupertino','CA','98052']
};

var list = function(object){
    for (var d in friends) {
    //
    console.log(d);
}
};

var search = function(name){
    for(var n in friends) {
        if(friends[n].firstName === name) {
          console.log(friends[n]);
          return friends[n];
        }
    }
  };


//persons
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();

family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for(i = 0; i < family.length; i++) {
    console.log(family[i].name);
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

// Make a new function, olderAge, to return the age of
// the older of two people
function olderAge (person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    }else {
        return person2.age;
    }
}


var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);
console.log(diff);

//working with objects and arrays
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

console.log(contacts[1].phoneNumber);//takes array item and prints value for objects property

// printPerson prints out array object
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
    
}

printPerson(contacts[0]);
printPerson(contacts[1]);

//function to loop through contacts
function list() {
    contactsLength = [];
    for (i = 0; i <= contacts.length; i++) {
        printPerson(contacts[i]);
    }
}

//looping through to find name
/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++) {    	
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
        
        }
}
search("Jones");

//adding to contact list
function add(firstName,lastName,email,phoneNumber) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};
//contacts[contacts.length] = add();

}

add('bob', 'marley', 'rasta@selasie.com','777-777-7777');

list();

//object review
var james = { //literal
    // add properties to this object!
    job = 'programmer';
    married = false;
    
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var Person = new Object( 'student', true);//constructer

//passing method to object via literal
var james = {
    job: "programmer",
    married: false,
    speak: function(mood) {
        console.log("Hello, I am feeling " + mood);
    }
};

james.speak("great");
james.speak("just okay");

//referencing object properties
var james = {
    job: "programmer",
    married: false,
    sayJob: function(job) {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();

//bracket notation to pull property values
// set to the first property name of "james"
var aProperty = 'job';

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);

//using hasOwnProperty to check and setting property with if/else
var suitcase = {
    shirt: "Hawaiian"
};

//console.log(suitcase.shorts);
if (suitcase.hasOwnProperty(shorts)) {
    console.log(suitcase.shorts);
}else {
    suitcase.shorts = 'cargo';
    console.log(suitcase.shorts);
}
console.log(suitcase)

//printing properties of objects
//first, object
var nyc = {
    fullName: "New York City",
    mayor: "Michael Bloomberg",
    population: 8000000,
    boroughs: 5
};
//second, for loop to print all props of object above
// write your for-in loop here
for (var prop in nyc) {
    console.log(prop);
}

//printing values of objects
var nyc = {
    fullName: "New York City",
    mayor: "Michael Bloomberg",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (var val in nyc) {
    console.log(nyc[val]);
}

//using constructors to make a class
function Person(name,age) {
  this.name = name;
  this.age = age;
};

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
    this.radius = radius;
}

//using constructor to create class and adding prototypes
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
    console.log("Arff");
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

//using classes as argument in new function
function Person(name,age) {
  this.name = name;
  this.age = age;
};
// a function that prints the name of any given person
function printPersonName(p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("PJ Goman", 99);
printPersonName(me);

//making all dogs in class bark
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();


