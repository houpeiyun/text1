<template>
    <div class="container">
        <!--<h1>电影</h1>-->
        <ul class="container-nav">
            <li v-for="(items,index) in dataList" :key='index+"dl"'>
                <img :src="items.images.large" alt="">
                <div class="con-cc">
                {{items.title}}
                <div>导演: <span v-for="(item,index) in items.directors" :key='index+"cl"'>{{item.name}}&nbsp</span></div>
                <div>主演: <span v-for="(itemss,index) in items.casts" :key='index+"ql"'>{{itemss.name}}&nbsp</span></div>
                <div>类型: <span v-for="(itemss,index) in items.genres" :key='index+"dl"'>{{itemss}}&nbsp</span></div>
                <div>评分: {{items.rating.average}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
          return{
              dataList:[],
          }
        },
        created(){
            this.$emit('routerChange','movie');
            this.getData();
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters')
                    .then((response) => {
                        this.dataList = response.data.subjects;
                        console.log(response.data)
                        //console.log(this.dataLists.length)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                /*axios.get('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.radio.getArtistChannelSong&format=json')
                    .then((response) => {
                        this.dataList = response.data
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                        //http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.radio.getArtistChannelSong&format=json
                    })*/
            },
            xiaLa(){
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeigth = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                let cc = scrollTop+scrollHeigth-clientHeight
                if(cc<=10){
                    this.getData();
                }
            }
        }
    }
</script>
<style scoped>
    img{
        width: 2rem;
        height: 3.3rem;
    }
    .con-cc{
        width: 5rem;
        position: relative;
        left: 2.3rem;
        top:-3.3rem;
        z-index: -1;
        margin-right: 0.2rem;
    }
    .container-nav li{
        margin: 0.2rem 0.3rem -2.5rem 0.3rem;
    }
</style>
