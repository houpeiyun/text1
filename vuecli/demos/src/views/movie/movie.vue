<template>
    <div>
        <div class="container" v-if="isif">
            <!--<h1>电影</h1>-->
            <div class="header">
                <div class="text">电影类型: <input type="text" v-model="val"><button @click="sousuo">搜索</button></div>
                <div class="text">电影院: <input type="text" v-model="vals"><button @click="sousuos">搜索</button></div>
                <div class="text">电影名: <input type="text" v-model="valss"><button @click="sousuoss">搜索</button></div>
            </div>
            <ul class="container-nav">
                <li v-for="(items,index) in dataList" :key='index+"dl"' @click="dianji(items.uid)">
                    <img :src="items.u_image" alt="">
                    <div class="con-cc">
                        <h5>{{items.uname}}</h5>
                        <div>导演: <span>{{items.u_direct}}/</span></div>
                        <div>主演: <span>{{items.u_act}}/</span></div>
                        <div>类型: <span>{{items.u_type}}/</span></div>
                        <div>评分: {{items.u_grade}}</div>
                        <!--<span><a href="#">详情</a></span>-->
                    </div>
                    <!--<div class="foot"><a :href=items.alt>详情</a></div>-->
                </li>
            </ul>
        </div>
        <h1 v-if="isnot" class="acd">页面丢失!!!</h1>
        <div class="loading" v-show="isshow">
            <div class="image">
                <img src="../../assets/img/loading.gif" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
          return{
              dataList:[],
              isshow:false,
              isEnd:false,
              isfinsh:true,
              isif:true,
              isnot:false,
              val:"",
              vals:"",
              valss:"",
          }
        },
        created(){
            this.$emit('routerChange','movie');
            this.getData();
        },
        methods:{
            getData(){
                //axios.get('http://localhost/demo2/Music/movie'+this.dataList.length+'&count=10')
                axios.get('http://localhost/demo2/Music/movie')
                    .then((response) => {
                        //this.dataList = this.dataList.concat(response.data.subjects);
                        this.dataList = response.data;
                        console.log(this.dataList)
                        if(!this.dataList){
                            console.log(this.dataList)
                            this.isif=false;
                            this.isnot = true
                        }
                        //console.log(this.dataList);
                        this.isshow = false;
                        this.isfinsh = true;
                        /*console.log("length:"+response.data.subjects.length)
                        if(response.data.subjects.length == 0){
                            this.isEnd = true;
                        }*/
                        //API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10'
                        //'https://api.myjson.com/bins/nsb9g'
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            dianji(key){
                this.$router.push("/moviedetail/"+key)
            },
            sousuo(){
                console.log(this.val.toUpperCase())
                axios.get('http://localhost/demo2/Music/select',{
                    params: {
                        lastName: this.val.toUpperCase()
                    }
                }).then(function (response) {
                        console.log((response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            sousuos(){
                console.log(this.vals.toUpperCase())
            },
            sousuoss(){
                console.log(this.valss.toUpperCase())
            }
        },
        mounted() {
            /*window.onscroll = () => {
                let scrollTop = document.documentElement.scrollTop;   //滚动高度
                let scrollHeigth = document.documentElement.scrollHeight;   //可滚动高度
                let clientHeight = document.documentElement.clientHeight;    //可视高度
                let cc = scrollTop - scrollHeigth + clientHeight;
                //console.log(cc);
                //console.log(this.isLoading)
                if (cc == 0) {
                    if(this.isfinsh) {
                        if (!this.isEnd) {
                            this.isshow = true;
                            this.isfinsh = false;
                            this.getData();
                        }
                    }
                }
            }*/
        }
    }
</script>
<style scoped>
   /* .con-cc{
        width: 5rem;
        position: relative;
        left: 2.3rem;
        top:-3.3rem;
        z-index: -1;
        margin-right: 0.2rem;
    }
    .container-nav li{
        margin: 0.2rem 0.3rem -2.5rem 0.3rem;
    }*/
   .header button{
       height: .4rem;
       margin-left: .3rem;
       position: relative;
       top:.03rem;
       text-align: center;
       background-color: #1da3ec;
       color: white;
       border: 0.01rem solid #1da3ec;
   }
   h5{
       font-weight: bolder;
       font-size: 0.35rem;
   }
   .container {
       padding: 1rem 0.2rem;
   }
   .header{
       padding-top: 0.2rem;
   }
   .header .text{
       float: left;
       color: #fed5d5;
   }
   .container-nav{
       margin-top: 1.6rem;
   }
   .container li {
       border-bottom: 1px solid #333;
       padding: 0.3rem 0.2rem;
       display: flex;
   }
   .container li:last-child {
       border-bottom: none;
   }
   .container li img {
       flex-grow: 1;
       width: 0;
       height: 2.8rem;
   }
   .container li .con-cc {
       flex-grow: 2;
       width: 0;
       margin-left: 0.3rem;
   }
   .loading {
       position: fixed;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: rgba(0, 0, 0, 0.2);
   }
   .loading .image {
       position: absolute;
       padding: .6rem;
       text-align: center;
       background: rgba(255, 255, 255, 0.8);
       border-radius: 0.2rem;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
   }
    .foot{
        margin-top: 2.3rem;
    }
    .acd{
        margin-top: 1rem;
        text-align: center;
    }
</style>
