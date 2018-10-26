<template>
    <div class="header-1" v-if="isif">
        <h2>{{dataList.uname}}</h2>
        <div id="zhuyan" >
            <div class="cc"><span>{{dataList.c_name}}</span></div>
            <div>年份：{{dataList.u_year}}</div>
            <div>主演：<span>{{dataList.u_act}}/</span></div>
            <div>评分: {{dataList.u_grade}}</div>
        </div>
        <div class="aa">
            <div id="btn1">
                <div class="btn1-2 btn1-2-1">可选<img src="./../../../public/img/座位.png" class="zuowei" alt=""></div>
                <div class="btn1-2 btn1-2-2">已选<img src="./../../../public/img/座位.png" class="zuowei" alt=""></div>
                <div class="btn1-2 btn1-2-3">已售<img src="./../../../public/img/座位.png" class="zuowei" alt=""></div>
            </div>
            <hr>
            <div id="btn2" class="btn22">
                <ul v-for="(items,index) in dataLists">
                    <li class="btn2-1-1" v-for="(itemss,indexs) in dataLists"><img src="./../../../public/img/座位.png" @click="zuowei(index,indexs,$event)" class="zuowei" :id="items+itemss" alt="" ></li>
                </ul>
                <!--<ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>
                <ul>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" @click="zuowei($event,$index)" class="zuowei" alt="" v-bind:class="{'active':nowIndex==$index}"></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li><li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                    <li class="btn2-1-1"><img src="./../../../public/img/座位.png" class="zuowei" alt=""></li>
                </ul>-->
            </div>
        </div>
        <div id="btn4"><ul id="tianjia" ></ul></div>
        <div id="btn5">
            <div>合计: <span id="span1">￥0</span> <span id="span2">￥99*0</span></div>
            <button id="butt">确认选座</button>
        </div>
        <img :src=dataList.u_image alt="" v-if="isif" class="img">
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dataList:[],
                dataLists:['1','2','3','4','5','6','7','8','9','10','11','12'],
                id:"",
                num:0,
                ids:"",
                isif:false,
            }
        },
        created(){
            this.$emit('routerChange','movie');
            this.id = this.$route.params.moviesId;
            this.ids = this.$route.params.cinema;
            this.getData();
        },
        methods: {
            getData() {
                axios.get('http://localhost/demo2/Music/movie')
                    .then((response) => {
                        this.dataList = response.data[this.id - 1];
                        console.log(this.dataList)
                        this.isif = true
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            zuowei(col, row, event) {
                var cols = col+1;
                var rows = row+1;
                var cc = ""+cols+rows;
                var zong = "btn4-4"+cols+rows;
                console.log(cc);
                var dom = document.getElementById(cc);
                var tianjia = document.getElementById("tianjia");
                if(dom.className.indexOf("action")>-1){
                    alert("不可选取")
                }
                else if((this.num<5)||(dom.className.indexOf("active")>-1)){
                    if(dom.className.indexOf("active")>-1){
                        dom.classList.remove("active");
                    }else{
                        dom.classList.add("active");
                    }
                    if(dom.className.indexOf("active")>-1){
                        this.num++;
                        var tianji = "<li class="+zong+">"+cols+"排"+rows+"座</li>";
                        console.log(tianjia.innerHTML)
                        tianjia.innerHTML+=tianji;
                        var shanchus = document.getElementsByClassName(zong)[0];
                        shanchus.classList.add("shanchu")
                        console.log(tianjia.innerHTML)
                    }
                    else {
                        this.num--;
                        var shanchu = document.getElementsByClassName(zong)[0];
                        shanchu.remove();
                    }
                    /*$("#span1").text("￥"+99*ii);
                    $("#span2").text("￥"+99+"*"+ii);*/
                }
                /*if(!this.isActive[col][row]){
                    this.isActive[col][row] = true;
                    console.log(this.isActive[col][row]);
                }else{
                    this.isActive[col][row] = false;
                }*/
            },
        }

    }
</script>
<style scoped>
    li{
        list-style: none;
    }
    .active{
        background-color: green;
    }
    .action{
        background-color: red;
    }
    #btn5{
        background: #333333;
        height: 1rem;
        position: relative;
    }
    #butt{
        height: 1rem;
        width: 2rem;
        position: absolute;
        right: 0px;
        background: #ffd007;
        border: 1px solid #ffd007;
    }
    #btn5 div{
        background: #333333;
        position: absolute;
        left: 0.2rem;
        top: 0.1rem;
        color: white;
        font-size: 26px;
    }
    #span1{
        background: #333333;
        color: red;
        position: absolute;
        left: 1.4rem;
        top: 0px;
    }
    #span2{
        background: #333333;
        font-size: 13px;
        position: absolute;
        left: 2.8rem;
        top: 0.3rem;
    }
    #tianjia{
        height: 2.5rem;
        border: 1px solid grey;
        margin-bottom: 0.2rem;
        padding-left: 2.7rem ;
    }
    #btn4 li {
        height: 50px;
        line-height: 50px;
        padding-left: 25px;
        width: 120px;
        border: 1px solid #ffd007;
        color: #ffd007;
        list-style: none;
        display: inline-block;
        margin-bottom: 10px;
        margin-left: 25px;
        font-size: 17px;
    }
.header-1{
    margin-top: 1rem;
    overflow: hidden;
    margin-bottom: 1rem;
}
hr{
    width: 550px;
    margin-top: 0.8rem;
    margin-left: -0.2rem;
}
.zuowei{
    height: 0.4rem;
    width: 0.4rem;
}
#btn1 .btn1-2-2 img{
    background-color: green;
}
#btn1 .btn1-2-3 img{
    background-color: red;
}
#btn2 ul li{
    float: left;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
    margin-top: 0.1rem;
}
#btn2 ul{
    overflow: hidden;
}
#btn2{
    margin-top: 0.4rem;
}
#btn1 .btn1-2{
    float: left;
    margin-right: 0.3rem;
    margin-left: 0.1rem;
}
#btn1{
    margin-left: 1rem;
}
h2{
    padding: .2rem .3rem;
    width: 3.5rem;
    color: blanchedalmond;
}
.img{
    width: 2.5rem;
    height: 4rem;
    position: absolute;
    right: .3rem;
    top: 1.2rem;
    z-index:-100;
}
#zhuyan{
    width: 3.5rem;
    margin-left: .2rem;
}
.cc span{
    border: 1px solid #61b77a;
    border-radius: 20%;
    background-color: #61b77a;
    color: white;
    margin-right: .2rem;
}
.aa{
    margin: .5rem .2rem 0.2rem .2rem;
}
</style>