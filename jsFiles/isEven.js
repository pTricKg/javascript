var isEven = function(number) {
  // Your code goes here!
  if (number % 2 = 0) {
      return true;
  }else if (isNan(number)) {
      console.log("That is not a number!")
  }else {
      return false;
  }
};


//testing loop
var test = true;

while (test) {
    for (i = 0; i < 3; i ++){
        console.log("Testing.....Testing!!");
        test = false;
    }
}

//switchExample
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
