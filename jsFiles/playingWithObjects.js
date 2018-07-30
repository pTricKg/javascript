var comedy = {
    schadenfreude: function() {
        var answer = prompt("How many times has Voyager been threatened with assimilation?");
        alert("You think Voyager has been threatened with assimilation " +answer+ " times!");
        this.answer = answer;
        },
    
    irony: function() {
        if(this.answer > 4) {
            alert("Who are you?");
        }else {
            alert("Perhaps you are correct.");
        }
    }
    
    
};
comedy.schadenfreude();
comedy.irony();

var Hello = {
  Name: function(nameVal){
    console.log("Hello " + nameVal);
    var myName = "Patrick";
    }  
};
Hello.Name(myName);

// Here is our person object
    var person = {
        //giggle
        //returns: 'giggle'
        giggle: function(){
            return "giggle";
        },
        //giggles
        //parameters: n = number of giggles
        //returns: string of giggles of n giggles long
        giggles: function(n){
            if (n>1)
                return this.giggle() + " " + this.giggles(n-1);
            if (n===1)
                return this.giggle();
        }

    };
    console.log(person.giggles(5));

//more giggling
// Here is our person object
    var person = {
        //giggle
        //returns: 'giggle'
        giggle: function(){
            return "giggle";
        },
        //giggles
        //parameters: n - number of giggles
        //returns: string of giggles of n giggles long
        giggles: function(n){
            if (n>1)
                return this.giggle() + " " + this.giggles(n-1);
            if (n===1)
                return this.giggle();
        },
        //fiveGiggles
        fiveGiggles: function() {
            return this.giggles(5)
        }

    };
    console.log(person.fiveGiggles());
