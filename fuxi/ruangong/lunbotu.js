
var div1 = document.getElementById('div2');
var oul = div1.getElementsByTagName('img');
var text1 = document.getElementById("username").value;
var text2 = document.getElementById("password").value;
var btn1 = document.getElementsByClassName("inpu")[0];
console.log(text1.innerHTML);
console.log(text2.innerHTML);
oul[0].style.display = "block";
var i=0;
var sit;
function test() {
    sit = setInterval(function(){
        for(j=0;j<oul.length;j++)
        {
            oul[j].style.display = "none";
        }
        oul[i].style.display = "block";
        i++;
        if(i>=oul.length){
            i=0;
        }
    },1000);
}
test();
div1.onmouseover=function () {
    clearInterval(sit);
};
div1.onmouseout=function () {
    test();
}
/*btn1.onclick=function () {
        if(text1=="20166668"&&text2=="123456")
        {
            window.open("http://localhost:63342/text1/js/1.0.0.html?_ijt=v42cmsc4n73ligqm0e3r7c7jsc")

        }
        else{
            alert("账号或密码错误");
        }
    }*/
