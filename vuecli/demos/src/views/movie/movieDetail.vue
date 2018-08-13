<template>
    <div class="header-1">
        <!--<h1>电影名称：{{$route.params.movieId}}</h1>-->
        <h2>{{dataList.title}}</h2>
        <div>年份：{{dataList.year}}</div>
        <img :src=dataList.images.large alt="">
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dataList:[],
                id:""
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
    }
    img{
        width: 3rem;
        height: 4rem;
        position: absolute;
        right: .3rem;
        top: 1.2rem;
    }
</style>