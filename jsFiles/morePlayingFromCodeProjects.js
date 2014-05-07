var userAge = parseInt(prompt("How young are you?"), 10); //turn into number
//parseInt(thingToParse, BaseNumberToParseTo)

// test for not a number for userAge
if (isNaN(userAge) === true) {
    console.log("That's already a number!")
}else if (userAge < 13) {
    console.log("Should you be playing on the computer right now?")
}else {
    console.log("Thanks for letting me know you're old!")
}

// drawing on canvas
var my_canvas = document.getElementById('canvas');

var context = my_canvas.getContext("2d");

context.beginPath();
//.arc(x, y, radius, startAngle, endAngle)
context.arc(75,75,35,1,Math.PI);
context.stroke();

// or make complete circle
//.arc(x, y, radius, startAngle, endAngle)
context.arc(75,75,35,0,2*Math.PI);

// making rectangle
context.strokeRect(10, 10, 50, 20);
// add color to rectangle
context.fillStyle = "red"; // any shape draw after assumes color input
context.fillRect(10, 10, 50, 20);
// adding text
context.font = "30px Ariel";
context.fillText("I'm cool!", 5 , 75)
