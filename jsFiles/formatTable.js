var table = [
    ["Person",  "Age",  "City"],
    ["Captain Kirk",     22,     "San Francisco"],
    ["Admiral Janeway",     45,     "Halifax"]
];

var rows = table.length;
var r = 0;

for (r = 0; r < rows; r++) {
    console.log(r);
}

//pulling out from table and setting format
var table = [
    ["Person",  "Age",  "City"],
    ["Spock",     122,     "San Francisco"],
    ["Tom Paris",     45,     "Halifax"]
];

var rows = table.length;
var r = 0;

for (r = 0; r < rows; r++) {//this loops to find table properties
    //console.log(r);
    var c; 
    var cells = table[r].length;//sets cells to found table properties
    var rowText = " ";
    for (c = 0; c < cells; c++) {//loops through table 
        rowText += table[r][c];//appends text
        if (c < cells - 1) {
            rowText += " " + " ";//and  and formats text
        }
    
    }
   console.log(rowText); 
}

