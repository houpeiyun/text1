<template>
    <div>
        <div class="container" v-if="isif">
            <!--<h1>电影</h1>-->
            <ul class="container-nav">
                <li v-for="(items,index) in dataList" :key='index+"dl"' @click="dianji(items.id)">
                    <img :src="items.images.large" alt="">
                    <div class="con-cc">
                        <h5>{{items.title}}</h5>
                        <div>导演: <span v-for="(item,index) in items.directors" :key='index+"cl"'>{{item.name}}/</span></div>
                        <div>主演: <span v-for="(itemss,index) in items.casts" :key='index+"ql"'>{{itemss.name}}/</span></div>
                        <div>类型: <span v-for="(itemss,index) in items.genres" :key='index+"dl"'>{{itemss}}/</span></div>
                        <div>评分: {{items.rating.average}}</div>
                        <!--<span><a href="#">详情</a></span>-->
                    </div>
                    <div class="foot"><a :href=items.alt>详情</a></div>
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
              isnot:false
          }
        },
        created(){
            this.$emit('routerChange','movie');
            this.getData();
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10')
                    .then((response) => {
                        this.dataList = this.dataList.concat(response.data.subjects);
                        if(!this.dataList){
                            console.log(this.dataList)
                            this.isif=false;
                            this.isnot = true
                        }
                        //console.log(this.dataList);
                        this.isshow = false;
                        this.isfinsh = true;
                        console.log("length:"+response.data.subjects.length)
                        if(response.data.subjects.length == 0){
                            this.isEnd = true;
                        }
                        //API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10'
                        //'https://api.myjson.com/bins/nsb9g'
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            dianji(key){
                this.$router.push("/moviedetail/"+key)
            }
        },
        mounted() {
            window.onscroll = () => {
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
            }
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
   h5{
       font-weight: bolder;
       font-size: 0.35rem;
   }
   .container {
       padding: 1rem 0.2rem;
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
