<template>
    <div class="header-1">
        <h1>电影名称：{{$route.params.movieId}}</h1>
        <div>{{dataList.title}}</div>
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
<style>
    .header-1{
        margin-top: 1rem;
    }
</style>