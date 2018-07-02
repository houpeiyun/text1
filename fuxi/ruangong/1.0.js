var d = localStorage.getItem("information");
information = JSON.parse(d);
var username = document.getElementById("usern");
var userID = document.getElementById("userid");
for(i = 0 ; i < information.length; i++){
    if(information[i].index == 1){
        username.innerHTML = information[i].gonghao;
        userID.innerHTML = information[i].name;
    }
}

var div1=document.getElementById("mokuai2");
var oli=div1.getElementsByTagName('li');
var oul1=document.getElementById('mokuai3');
var oli1=oul1.getElementsByClassName('search');

var Dname = document.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0];
var Deff = document.getElementsByClassName("Deff")[0].getElementsByTagName("span")[0];
var Price = document.getElementsByClassName("price")[0].getElementsByTagName("span")[0];
var Factor = document.getElementsByClassName("factor")[0].getElementsByTagName("span")[0];
var Userdate = document.getElementsByClassName("userdate")[0].getElementsByTagName("span")[0];
var Prodate = document.getElementsByClassName("prodate")[0].getElementsByTagName("span")[0];
var look = document.getElementsByClassName("look")[0];
var look1 = document.getElementsByClassName("look1")[0];
var look2 = document.getElementsByClassName("look2")[0];
var gou = document.getElementsByClassName("gou")[0];

var tui = document.getElementsByClassName("tuichu")[0];


var join = document.getElementsByClassName("join")[0];
var btn = document.getElementById("search-btn");
var intname = document.getElementById("search-text");
var sign = false;

function setDiv(item) {
    var tutu = "<div class=\"bianxian\" >\n" +
        "                    <div class=\"Dname\">\n" +
        "                        药品名：<span>" + item.name +"</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"Deff\">\n" +
        "                        药品功效：<span>" + item.efficacy + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"factor\">\n" +
        "                        生产厂家：<span>" + item.profac + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"prodate\">\n" +
        "                        生产日期：<span>" + item.prodate + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                         库存量：<span>" + item.num + "</span>盒\n" +
        "                    </div>\n" +
        "                            <div class=\"action\">\n" +
        "                                <i class=\"iconfont icon-htmal5icon29\"></i>\n" +
        "                                <span>提醒缺药</span>\n" +
        "                            </div>\n" +
        "                </div>";

    return tutu;
}
function setDiv1(item) {
    var tutu = "<div class=\"bianxian\" >\n" +
        "                    <div class=\"Dname\">\n" +
        "                        药品名：<span>" + item.name +"</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"Deff\">\n" +
        "                        药品功效：<span>" + item.efficacy + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"factor\">\n" +
        "                        生产厂家：<span>" + item.profac + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"prodate\">\n" +
        "                        生产日期：<span>" + item.prodate + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                         库存量：<span>" + item.num + "</span>盒\n" +
        "                    </div>\n" +
        "                </div>";
    return tutu;
}
function setDiv2(item) {
    var tutu = "<div class=\"bianxian\" >\n" +
        "                    <div class=\"Dname\">\n" +
        "                        药品名：<span>" + item.name +"</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"Deff\">\n" +
        "                        药品功效：<span>" + item.efficacy + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"factor\">\n" +
        "                        生产厂家：<span>" + item.profac + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"prodate\">\n" +
        "                        生产日期：<span>" + item.prodate + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                         库存量：<span>" + item.num + "</span>盒\n" +
        "                    </div>\n" +
        "                </div>";

    return tutu;
}
function setDiv3(item) {
    var tutu = "<div class=\"bianxian\" >\n" +
        "                    <div class=\"Dname\">\n" +
        "                        药品名：<span>" + item.name +"</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"Deff\">\n" +
        "                        药品功效：<span>" + item.efficacy + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"price\">\n" +
        "                        单价：<span>" + item.unitprice + "</span>元\n" +
        "                    </div>\n" +
        "                    <div class=\"factor\">\n" +
        "                        生产厂家：<span>" + item.profac + "</span>\n" +
        "                    </div>\n" +
        "                    <div class=\"userdate\">\n" +
        "                         需进货：<span>" + 200 + "</span>盒\n" +
        "                    </div>\n" +
        "                </div>";

    return tutu;
}
/*localStorage.setItem("wdc","0");*/
var iii = localStorage.getItem("aay");
var poi = localStorage.getItem("zhifuchenggong");
/*console.log("111"+JSON.parse(iii))*/
function get() {
    var html = '';
    for(i = 0;i<medicine.length;i++){
        html += setDiv(medicine[i])
    }
    console.log(localStorage.getItem("wdc"));
    look.innerHTML = html;
    if(localStorage.getItem("wdc") == 1){
        look.innerHTML = JSON.parse(iii);
    }
    else if(localStorage.getItem("ilu") == 2){
        look.innerHTML = JSON.parse(poi);
    }
    else {
        localStorage.setItem("wdc","0");
        look.innerHTML = html;
    }

}

var html2 = '';
var html33 = "";
var gai = [];
function get2() {
    var html = '';
    var j = 0;
    for(i = 0;i<medicine.length;i++){
        //console.log(medicine[i].sym);
        if(medicine[i].sym == 1){
            html += setDiv2(medicine[i]);
            html2 += setDiv3(medicine[i]);
            gai[j] = medicine[i].count;
            j++;
        }
    }
    look2.innerHTML = html;
    html33 = html;
    console.log(gai );
    var m = JSON.stringify(html33);
    localStorage.setItem("queyao",m);
    var c = JSON.stringify(html2);
    localStorage.setItem("dingdan",c);
    var z = JSON.stringify(gai);
    localStorage.setItem("xiugai",z);
}
get();


tui.onclick = function () {
    window.location.href="http://localhost:63342/text1/fuxi/ruangong/1.0.html?_ijt=9lke1q973sgghbob3ll3s2m8b9";
}


oli[2].onclick = function () {

    for(j=0;j<oli.length;j++)
    {
        oli1[j].style.display="none";
    }
    oli1[2].style.display="block";
    var action = document.getElementsByClassName("action");
    for(i = 0 ; i < action.length ; i++){
        action[i].onclick = function () {
            alert("加入成功!");
            var div = this.parentNode;
            console.log(div);
            var name = div.getElementsByClassName("Dname")[0].getElementsByTagName("span")[0].innerHTML;
            console.log(name);
            for(i = 0 ; i < medicine.length ; i++){
                if(name == medicine[i].name){
                    medicine[i].sym = 1;
                }
            }
        };
    }

};
oli[0].onclick = function () {
    for(j=0;j<oli.length;j++)
    {
        oli1[j].style.display="none";
    }
    oli1[0].style.display="block";
};
oli[1].onclick = function () {
    for(j=0;j<oli.length;j++)
    {
        oli1[j].style.display="none";
    }
    oli1[1].style.display="block";

};
oli[3].onclick = function () {
    for(j=0;j<oli.length;j++)
    {
        oli1[j].style.display="none";
    }
    oli1[3].style.display="block";
    get2();
};
btn.onclick = function () {
    var html1 = '';
    var name = intname.value;
    for(i = 0 ; i < medicine.length ; i++){
        if(name == medicine[i].name){
            html1 = setDiv1(medicine[i]);
            look1.innerHTML = html1;
            console.log(look1.innerHTML);
            sign = true;
            that = medicine[i];
            join.onclick = function () {
                alert("加入成功!");
                that.sym = 1;
                console.log(that.sym);
            };
        }
    }
    if(sign == false){
        look1.innerHTML = " <div class=\"result\">\n" +
            "                               查找不到该药品！\n" +
            "                           </div>";
        join.onclick = function () {
            alert("无药品加入购物车");
        }
    }
};
if(sign == false){
    join.onclick = function () {
        alert("无药品加入购物车");
    }
}
