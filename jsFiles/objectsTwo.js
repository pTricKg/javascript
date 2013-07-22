// create your Animal class here
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}


// create the sayName method for Animal
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

//create Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

//inherting Animal class functions
var penguin = new Penguin("Lux");
penguin.sayName();

//more inhertance but with Penguin class
// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}

// create an "emperor" object and print the number of legs it has
Emperor.prototype = new Penguin();

var emperor = new Emperor("Tuxie");

console.log(emperor.numLegs);

//chain of inheritance
// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true

//making private property
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;//private property of Person object
}
var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;
var myAge = john.age;


// create your Person 
var john = new Person('John', 'Smith', 30);


// try to print his bankBalance
console.log(john.bankBalance);

//printing object properties
console.log(john.firstName, john.lastName, john.age);
//printing variables
console.log(myFirst, myLast, myAge);

//pulling private properties with new method
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

/*function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
///* the variable myBalance should access askTeller()
 //  with a password as an argument  */
var myBalance = john.askTeller(3222);
console.log(myBalance);*/
