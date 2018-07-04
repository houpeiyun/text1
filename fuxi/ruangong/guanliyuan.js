var cccc = JSON.stringify(medicine);
localStorage.setItem("shuju",cccc);
var look1 = document.getElementsByClassName("look1")[0];
var look2 = document.getElementsByClassName("look2")[0];
var look3 = document.getElementsByClassName("look3")[0];
var look4 = document.getElementsByClassName("look4")[0];
var look5 = document.getElementsByClassName("look5")[0];
var look200 = look2.getElementsByClassName("look2-0")[0];
var look211 = look2.getElementsByClassName("look2-1")[0];
/*var look212 = look2.getElementsByClassName("look5-0")[0];*/
var look20 = look200.getElementsByTagName("div");
var look21 = look211.getElementsByTagName("div");
var zhifu = document.getElementsByClassName("allprice")[0];
var zhifu1 = zhifu.getElementsByTagName("span")[0];
var buyt = document.getElementsByClassName("buew")[0];
var dd;
zhifu.style.display = "none";
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

        "                </div>";

    return tutu;
}

function setDiv2(item,ff) {
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
        "                         购买数：<span>" + ee[ff] + "</span>盒\n" +
        "                    </div>\n" +
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
        "                            <div class=\"action\">\n" +
        "                                <i class=\"iconfont icon-htmal5icon29\"></i>\n" +
        "                                <span>加入购物车</span>\n" +
        "                            </div>\n" +
        "                </div>";

    return tutu;
}

function setDiv8(item) {
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


var tui = document.getElementsByClassName("tuichu")[0];
tui.onclick = function () {
    window.location.href="http://localhost:63342/text1/fuxi/ruangong/1.0.html?_ijt=9lke1q973sgghbob3ll3s2m8b9";
}
var ilu = 0;
function get() {
    var html = '';
    cccc = localStorage.getItem("shuju");
    medicine = JSON.parse(cccc);
    for(i = 0;i<medicine.length;i++){
        html += setDiv(medicine[i])
    }
    look1.innerHTML = html;
    if(ilu == 2){
        var poii = localStorage.getItem("aay");
        console.log("xinxi"+JSON.parse(poii))
        look1.innerHTML = JSON.parse(poii);
    }
        else{
        ilu = 0;
    }
}

function get11() {
    var html = '';
    for(i = 0;i<medicine.length;i++){
        html += setDiv1(medicine[i])
    }
    look21[0].innerHTML = html;
}

function get2() {
    var m = localStorage.getItem("queyao");
    look4.innerHTML = JSON.parse(m);
}
var kk = 0;
function get22() {
    var html = '';
    var tt = 12;
    for(i = 0;i<medicine.length;i++){
        //console.log(medicine[i].sym);
        if(medicine[i].sym == 1){
            html += setDiv2(medicine[i],tt);
            tt++;
        }
    }
    look211.innerHTML = html;
    zhifu1.innerHTML = kk;
}
function get3() {
    var c = localStorage.getItem("dingdan");
    look3.innerHTML = JSON.parse(c);
}
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDay();
var gai = [];
function get4() {
    var html5 = "";
    var html66 = "";
    var z = localStorage.getItem("xiugai");
    gai = JSON.parse(z);
    console.log(gai[0]);
    console.log(gai[1]);
    cccc = localStorage.getItem("shuju");
    medicine = JSON.parse(cccc);
    for(i = 0;i<gai.length;i++){
        for(j = 0;j<medicine.length;j++){
            if(gai[i] == medicine[j].count){
                medicine[j].num = medicine[j].num-(-200);
                medicine[j].prodate = year+"-"+month+"-"+day;
                console.log(j)
            }
        }
    }
    cccc = JSON.stringify(medicine);
    localStorage.setItem("shuju",cccc);
    console.log(medicine)
    for(i = 0;i<medicine.length;i++){
        html5 += setDiv(medicine[i]);
        html66 += setDiv8(medicine[i])
        console.log(medicine[i].num)
    }
    var ttt = JSON.stringify(html66);
    localStorage.setItem("aay",ttt);
    localStorage.setItem("wdc","1");
    look5.innerHTML = html5;
    look1.innerHTML = html5;
}

/*var gai = [];
var gw = [];*/

var ee = [];
var vvv = [],uu = 0;
function get5() {
    var pp = [],gg = [];
    var bb = 0,jj = 0;
    for(j=0;j<look21.length;j++)
    {
        look21[j].style.display="none";
    }
    console.log(look21);
    var action = document.getElementsByClassName("action");
    console.log(action)
    for(i = 0 ; i < medicine.length ; i++) {
        pp[i] = medicine[i].num;
        gg[i] = medicine[i].unitprice;
        console.log("pp1:"+medicine[i].num)
    }
    console.log("pp:"+pp)
    look20[0].onclick = function () {
        zhifu.style.display = "none";
        for(j=0;j<look21.length;j++)
        {
            look21[j].style.display="none";
        }
        console.log(action);
        look21[0].style.display="block";
        get11();
        for(i = 0 ; i < action.length ; i++){
            action[i].index = i;
            ewrt = localStorage.getItem("shuju");
            medicine = JSON.parse(ewrt);
            action[i].onclick = function () {
                bb = this.index;
                if(pp[bb]>0){
                    dd = prompt("请问您想购买几盒？");
                    console.log(dd);
                    vvv[uu] = this.index;
                    uu++;
                    ee[j] = dd;
                    j++;
                    kk+=gg[bb]*dd;
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
                }
                else {
                    alert("加入失败");
                }

            };
        }
    }
    /*console.log(medicine[0].sym);*/
    look20[1].onclick = function () {
        zhifu.style.display = "block";
        for(j=0;j<look21.length;j++)
        {
            look21[j].style.display="none";
        }
        look21[1].style.display="block";
        get22();
    }
    buyt.onclick = function () {
        var hul = "";
        alert("支付成功");
        cccc = localStorage.getItem("shuju");
        medicine = JSON.parse(cccc);
        for(i = 0;i<vvv.length;i++){
            medicine[vvv[i]].num = medicine[vvv[i]].num - ee[i+12];
            console.log("med"+ee[i+12]);
        }
        cccc = JSON.stringify(medicine);
        localStorage.setItem("shuju",cccc);
        console.log("med"+medicine);
        for(i = 0;i<medicine.length;i++){
            hul += setDiv1(medicine[i])
        }
        var bfe = JSON.stringify(hul);
        localStorage.setItem("aay",bfe);
        ilu = 2;
        localStorage.setItem("ilu","2")
    }
}

var box0 = document.getElementsByClassName("box");
var chos = document.getElementsByClassName("choose")[0];
var ol = chos.getElementsByTagName("li");
ol[0].onclick = function () {
    for(j=0;j<ol.length;j++)
    {
        box0[j].style.display="none";
    }
    box0[0].style.display="block";
};
ol[1].onclick = function () {
    for(j=0;j<ol.length;j++)
    {
        box0[j].style.display="none";
    }
    box0[1].style.display="block";
    get();
};
ol[2].onclick = function () {
    for(j=0;j<ol.length;j++)
    {
        box0[j].style.display="none";
    }
    box0[2].style.display="block";
    get5();
};
ol[3].onclick = function () {
    for(j=0;j<ol.length;j++)
    {
        box0[j].style.display="none";
    }
    box0[3].style.display="block";
    get3();
};
ol[4].onclick = function () {
    for(j=0;j<ol.length;j++)
    {
        box0[j].style.display="none";
    }
    box0[4].style.display="block";
    get2();
};
ol[5].onclick = function () {
    for(j=0;j<ol.length;j++)
    {
        box0[j].style.display="none";
    }
    box0[5].style.display="block";
    get4();
    /*wre.style.height=look5.offsetHeight+'px';*/
};
