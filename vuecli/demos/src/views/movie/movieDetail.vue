<template>
    <div class="header-1" v-if="isif">
        <!--<h1>电影名称：{{$route.params.movieId}}</h1>-->
        <h2>{{dataList.title}}</h2>
        <div id="zhuyan" >
            <div class="cc"><span v-for="items in dataList.genres">{{items}}</span></div>
            <div>年份：{{dataList.year}}</div>
            <div>主演：<span v-for="items in dataList.casts">{{items.name}}/</span></div>
            <div>评分: {{dataList.rating.average}}</div>
        </div>
        <div class="aa">故事简介：{{dataList.summary}}</div>
        <img :src=dataList.images.large alt="" v-if="isif">
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dataList:[],
                id:"",
                isif:false
            }
        },
        created(){
            this.$emit('routerChange','movie');
            this.id = this.$route.params.movieId
            this.getData();
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.id)
                    .then((response) => {
                        this.dataList = response.data;
                        console.log(response)
                        this.isif=true
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
        },


    }
</script>
<style scoped>
    .header-1{
        margin-top: 1rem;
    }
    h2{
        padding: .2rem .3rem;
        width: 3.5rem;
    }
    img{
        width: 2.5rem;
        height: 4rem;
        position: absolute;
        right: .3rem;
        top: 1.2rem;
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