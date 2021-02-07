function theLogin() {
    var userName = document.getElementById("username").value;
    var thePassword = document.getElementById("password").value;
    if (userName == "Itorgaiev" && thePassword=="Gregor121191!") {
        location.assign("file:///C:/Users/grego/Desktop/JS/Login/index1.html");
    } else {
        window.alert("Login and/or Password might be wrong");
    }
}