// create your class here
//using constructor to create Candy class
function Candy(name) {
    this.name = name;
}

// extend the prototype of Candy with a "printName" method
Candy.prototype.printName = function() {
    console.log(this.name);
};

// this code should print "chocolate" then "gummy bears"
var chocolate = new Candy("chocolate");
console.log( chocolate.name );

var gummyBears = new Candy("gummy bears");
console.log( gummyBears.name );

//
function Company(name,yearFounded,profitLevel) {
   this.name = name;
   this.year = yearFounded;
   this.profits = profitLevel;
   var bankBalance = 20;
   
   // add your method here
   Company.prototype.getBalance = function() {
       return bankBalance - 2;
   };
}

var myCompany = new Company("Codecademy", "2011", "insufficient!");
console.log(myCompany.getBalance());


/*More Classes and putting methods inside Class*/

function Bike( color, numGears ) { //Bike Class
    this.color = color;
    this.numGears = numGears;
    this.numWheels = 2;
}

var myBike = new Bike('blue', 6); //creating new class instance

console.log("myBike is "+myBike.color+" and has "+myBike.numGears+" gears");

function Bike( color, numGears ) {//Bike Class
    this.color = color;
    this.numGears = numGears;
    this.numWheels = 2;
    
    this.ride = function() { //Add method inside of Class
        console.log("I'm riding!");
    };
    this.paintRed = function() { //another method in Class
        this.color = "red";
    };
    
}

var myBike = new Bike("Blue", 6);

myBike.paintRed();

console.log("myBike has " + myBike.numGears + " gears and is now " + myBike.color);


//more classes
function RedCar( price ) {
    this.price = price;
    this.color = "red";
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

//create BlueCar object 
function BlueCar(price) {
    this.price = price;
    this.color = "blue";
    this.honk = function() {
        console.log("BLARE!");
    };
}

var oldBlue = new BlueCar(100);

oldBlue.honk();

//car class better
function Car( price, color ) {
    this.price = price;
    this.color = color;
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
}

var blueCar = new Car( 1000, "blue");

// Make an object for the red car here.
var redCar = new Car(1500, "red");

console.log("My redCar is " + redCar.color);

//pulling private class properties
function Car( listedPrice, color ) {
    var price = listedPrice;
    this.color = color;
    
    this.honk = function() {
        console.log("BEEP BEEP!!");
    };
    
    this.getPrice = function() {
        //return price here!
        return price;
    };
}

var blueCar = new Car( 1000, "blue");

console.log("The price of blueCar is " + blueCar.getPrice()); //calling private property in Car class

//attacking public Class variable
function BankAccount( lastname ) {
    this.lastname = lastname;
    this.balance = 1000000;    
}

// creating attack method with account parameter
attackBalance =  function(account) {
   account.balance = 5;//setting specified parameter to give balance variable new value   
};

var jonesBankAccount = new BankAccount ("Jones");

console.log("jonesBankAccount has " + jonesBankAccount.balance + " dollars!");
attackBalance(jonesBankAccount);
console.log("After attack, jonesBankAccount has " + jonesBankAccount.balance + " dollars!");


