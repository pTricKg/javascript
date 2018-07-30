// Card Constructor
function Card(suits,ranks){
    var rank=ranks;
    var suit=suits;
    this.getSuit=function(){
        return suit;
    };
    this.getNumber=function(){
        return rank;
    };
    this.getValue=function(){
        if(rank>10)
        return 10;
        else if(rank===1)
        return 11;
        else return rank;
    };


}

var deal=function(){
  var suit=Math.floor(Math.random()*4+1);
  var rank=Math.floor(Math.random()*13+1);
  return new Card(suit,rank);
};

function Hand(){
    var myHand=[];
    myHand[0]=deal();
    myHand[1]=deal();
    this.getHand=function(){
      return myHand;  
    };
    this.score=function(){
        var sum=0;
        for(i=0;i<myHand.length;i++){
            sum+=myHand[i].getValue();
            if(sum<21)
            if(myHand[i].getValue()===11)
            sum-=10;
        }
        return sum;
    };
    this.printHand = function(){
        var printedHand = "";
	for(var y = 0; y < myHand.length; y++){
	    if(myHand[y].getSuit() === 1){
		 printedHand += myHand[y].getNumber() + ' of clubs ' + ", "; 
	    }else if(myHand[y].getSuit() === 2){
		 printedHand += myHand[y].getNumber() + ' of diamonds ' + ", ";
	    }else if(myHand[y].getSuit() === 3){
		 printedHand += myHand[y].getNumber() + ' of hearts ' + ", ";
	    }else {
		 printedHand += myHand[y].getNumber() + ' of spades ' + ", ";
	    }
	    }
            return printedHand + ".";
        };
this.hitMe=function(){
  myHand[myHand.length]=deal();  
};
}

var playAsDealer=function(){
  var dealer=new Hand();
  while(dealer.score()<17)
  {dealer.hitMe();}
  return dealer;

};

var playAsUser=function(){
    var user=new Hand();
    var decision=confirm("You have " + user.printHand() + " Shall I hit you?");
    while(decision)
    {
    user.hitMe();
    decision=confirm(user.printHand());
    }
    return user;
};

function declareWinner(userHands,dealerHands){
    var userHand=userHands.score();
    var dealerHand=dealerHands.score();

    if ((userHand > dealerHand || dealerHand > 21) && userHand <= 21){
        return 'You win!';
    }else if ((userHand < dealerHand || userHand > 21) && dealerHand <= 21){
        return 'You lose!';
    }else if (userHand === dealerHand || (userHand > 21 && dealerHand > 21)){
        return 'You tied!';
    }
}

var playGame=function(){
    var player=playAsUser();
    var dealer=playAsDealer();
    //declareWinner(player,dealer);
    //console.log("Player had: "+player.printHand()+" and Dealer had: "+dealer.printHand());
    var winMessage = declareWinner(player,dealer);
        alert(winMessage);

};
playGame();
