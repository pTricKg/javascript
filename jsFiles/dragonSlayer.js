var slaying = true;
var youHit = randomNumber;
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

var randomNumber = Math.random();

while(slaying) {
    if (youHit === true) {
        console.log("Congratulations, you hit the dragon!!");
        totalDamage += damageThisRound; // add both vars then assigns to //first var
        if (totalDamage >= 4) {
            console.log("You slew the dragon!");
            slaying = false;
        }else {
            youHit = randomNumber;
        }
    }else {
        console.log("The dragon defeated you.");
    }
    slaying = false;
}
