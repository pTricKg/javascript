//creating objects

//literal notation
var australia = {
//adding properties
    weather: "superb",
    people: "not many of them but they're all great!",
    tourism: "a wonderful place to holiday. please visit!"
};
//constructor notation
var jordan = new Object();
//adding properties
jordan.weather = "hot. but so are the people!";
jordan.people = "see above!";
jordan.tourism = "Codecademy's dream team retreat!";

var unitedStates = {
    //remember to use commas after all but last property and colon after variable name
    weather: "of all sorts",
    people: "of all types",
    tourism: "outstanding place to do business"
};

var hongKong = new Object();
hongKong.weather = "sometimes quite muggy";
hongKong.people = "was home to House";
hongKong.tourism = "shop till you drop!";

//printing objects
//dot notation
console.log(australia.weather);

//bracket notation
console.log(jordan[property]);

//using methods within objects
var australia = {
    hemisphere: "southern",
    //method
    population: function(newArrivals) {
        return 20000000 + newArrivals;
    }
};

var australia2 = new Object();
australia2.hemisphere = "southern";
//method using dot notation
australia2.population = function(newArrivals){
    return 20000000 + newArrivals;
};

// create your objects and methods here
var me = {
    planet: "Earth",
    //method
    age: function(yearBorn) {
        return 2012 - yearBorn;
    }
};

var jeremyLin = new Object();
jeremyLin.team = "Knicks";
//adding method using dot notation
jeremyLin.playGame = function(opponent) {
    return "Tonight the Knicks square off against the " + opponent;
};

//setting name
//setName method
var setName = function(yourName){
    this.name = "Your name is " + yourName;
};

// create an object called `human`
var human = {
    setHumanName: setName
};

// now call human.setHumanName
human.setHumanName("ptrickg");

// check to see that your method works by printing
// human.name to the console
console.log(human.name);

