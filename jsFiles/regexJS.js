//<script type="text/javascript" language="Javascript">
function evalPass() {
    var done = false;
	var ans = document.regex_.test_.value
    alert(ans);
	var reg = new RegExp("^[A-Za-z0-9]{5}");
    alert(reg);
	var exec_ = reg.exec(ans);
    alert(exec_);
	if (exec_ != null) {
		reg = new RegExp("^[^e-z0-9A-Z]+[^A-Z]{4}{?[a-z]*_?");
        alert(reg);
		exec_ = reg.exec(ans);
        alert(exec_);
		if (exec_ != null) {
			reg = new RegExp("^[A9FbdHh5]+[T]*.{2}_?[a-z]+");
            alert(reg);
			exec_ = reg.exec(ans);
            alert(exec_);
			if (exec_ != null) {
				reg = new RegExp("^[^YdSeu][r]+[^r]+=?_?[aeiou]+[^pstuvwxyz]+");
                alert(reg);
				exec_ = reg.exec(ans);
                alert(exec_);
				if (exec_ != null) {
					reg = new RegExp("^(c|a|b|d)+[^A-Za-df-qs-z]{2}{?[^vCXBhq]*[^pqrst]*[a]+[^passwd]*}?");
                    alert(reg);
					exec_ = reg.exec(ans);
                    alert(exec_);
					if (exec_ != null) {
						reg = new RegExp("^.*[k0pst]$");
                        alert(reg);
						exec_ = reg.exec(ans);
                        alert(exec_);
						if (exec_ != null) {
							reg = new RegExp("^[^0-9A-Z]{5}$");
                            alert(reg);
							exec_ = reg.exec(ans);
                            alert(exec_);
							if (exec_ != null) {
								var url = exec_[0];
								if (url == ans) {
									alert('Good Job, enter that as the mission password');
									done = true;
								}
							}
						}
					}
				}
			}
		}
	}
	if (done == false)
	{
		alert('Sorry, wrong password');
	}
}
//</script>
evalPass();

