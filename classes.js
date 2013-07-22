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


