var MathObject = {
    val: 42,
    
    setVal: function(newVal){
        this.val = newVal; //set val object to specified parameter
    },
    getVal: function(){
        return this.val; //returns specified parameter
    },
    getSqrVal: function(){ //squares specified value
        this.val = this.val * this.val;
        return this.val;
    },
    getValplusplus: function(){ //increments specified value
        this.val++;
        return this.val;
    },
    getValplusN: function(){ //increments value by specified value
       this.val+=newVal;
       return this.val;
    }
};
MathObject.setVal(222);
console.log(MathObject.getVal());

MathObject.getSqrVal();
console.log(MathObject.getVal());

MathObject.getValplusplus();
console.log(MathObject.getVal());

MathObject.getValplusN();
console.log(MathObject.getVal());



