<script type="text/javascript">

date = new Date();
year = date.getYear();
pass = 1337;
function test(){
for(i = 1; i <= year; i++)
{
  pass += year * i * year;
}

if(pass == 318338237039211050000) 
{
	alert("Good job!");
	alert(("pass =")+pass);
    alert(("year =")+year);
	window.location.href = year + ".php";
}
else
{
    //pass == 318338237039211050000;
	//alert("Good job!");
    //window.location.href = year + ".php";

	pass++;
    //test();
 
    window.location.href = "http://www.enigmagroup.org/missions/basics/js/12/index.php";
}
}
 
test();


</script>
