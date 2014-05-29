
<script type="text/javascript">
 
                date = new Date();
                year = date.getYear();
                pass = 1337;
 
                function test(){
 
                for(i = 1; i <= year; i++)
                {
                        total = (pass + (year * i * year));
                }
 
                if(total == 318338237039211050000)
                {
                        alert("Good job!");
                                alert(("pass =")+pass);
                                alert(("year =")+year);
                        window.location.href = year + ".php";
                }
                else
                {
                        pass++;
                                test();
 
                        window.location.href = "http://www.enigmagroup.org/missions/basics/js/12/index.php";
                }
        }
 
        test();
 
</script>
