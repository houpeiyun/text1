var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("login");
var form = document.getElementsByClassName("fm-v clearfix amp-login-form")[0];
var time = 0;
var state = false;
loginBtn.onclick = function () {
    if(time == 3){
        alert("登录次数太多，登录失效！")
    }
    time ++;
    state = false;
    if(username.value == "2016010" && password.value == "111"){
        form.action = "1.0.2.html";
        form.submit();
    }
    else if(username.value == "" || password.value == ""){
        alert("用户名或密码为空！");
        state = false;
    }
    else{
        for (i = 0; i < information.length; i++) {
            if (username.value == information[i].name && password.value == information[i].password) {
                state = true;
                information[i].index = 1;
                var d = JSON.stringify(information);
                localStorage.setItem("information",d);
                console.log(information);
            }
        }

        if (state) {
            console.log(state);
            form.action = "1.0.1.html";
            form.submit();
        }
        else {
            console.log(state);
            form.action = "";
            form.submit();
            alert("用户名或密码错误！");
        }
    }
};