// JavaScript Document

   var toPlay = confirm("Welcome to pTricKg.com!  Work in progress so please pardon my dust.  Want to play Rock, Paper, Scissors?")
  
	if ( toPlay == true) {
		var userChoice = prompt("Do you choose rock, paper or scissors?");
		var computerChoice = Math.random();
		if (computerChoice < 0.33) {
			computerChoice = "rock";
		} else if(computerChoice > 0.33 && computerChoice < 0.67) {
			computerChoice = "paper";
		} else if (computerChoice >= 0.67){
			computerChoice = "scissors";
		}
		
		
		var compare = function (user, computer) {
			if (userChoice == computerChoice) {
				return "User is an equal to program!";
			}else if (userChoice == "rock") {
				if (computerChoice == "scissors") {
					//console.log(computerChoice);
					return "Rock smashes scissors!  User wins.";
				}else {
					//console.log(computerChoice);
					return "Paper covers rock!  Program wins.";
					}
					}
			else if (userChoice == "paper") {
				if (computerChoice == "rock") {
					//console.log(computerChoice);
					return "Paper covers rock!  User wins.";
				}else {
					//console.log(computerChoice);
					return "Scissors cut paper!  Program wins.";
				}
					}
			else if (userChoice == "scissors") {
				if (computerChoice == "rock") {
					//console.log(computerChoice);
					return "Rock smashes scissors!  Program wins.";
				}else {
					//console.log(computerChoice);
					return "Scissors cut paper!  User wins.";
				}
			}else {
				return "Your input does not compute!  Program wins.";
			}
		}
	confirm("Computer chose" + " " + computerChoice + "." + " " + compare() + " " + " " + "Thanks for playing!!");	
		
		
	}else {
		confirm("Thanks anyway!")
	}
	
   


