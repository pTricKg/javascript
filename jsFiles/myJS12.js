date = new Date();
console.log(date);

year = date.getYear();
console.log(year);

pass = 1337;
count = 0;

for(i = 1; i <= year; i++)
{
  pass += year * i * year;
  console.log("This is pass:" + pass);
  count++;
  
}

if(pass == 318338237039211050000) {
    console.log("This is i:" + i);
	console.log(count);
	
}

//i gets up to 85190117
//year is 114
//count is 113
