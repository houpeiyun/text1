<template>
    <div class="header-1" v-if="isif">
        <!--<h1>电影名称：{{$route.params.movieId}}</h1>-->
        <h2>{{dataList.uname}}</h2>
        <div id="zhuyan" >
            <div class="cc"><span>{{dataList.c_name}}</span></div>
            <div>年份：{{dataList.u_year}}</div>
            <div>主演：<span>{{dataList.u_act}}/</span></div>
            <div>评分: {{dataList.u_grade}}</div>
            <button class="xuanzuo" @click="dianji(dataList.uid,dataList.c_id)">购票选座</button>
        </div>
        <div class="aa">故事简介：{{dataList.u_store}}</div>
        <img :src=dataList.u_image alt="" v-if="isif">
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
                //axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.id)
                axios.get('http://localhost/demo2/Music/movie')
                    .then((response) => {
                        this.dataList = response.data[this.id-1];
                        console.log(response.data)
                        console.log(this.id)
                        this.isif=true
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            dianji(key,keys){
                console.log(keys)
                this.$router.push("/moviedel/"+key+"/"+keys)
            }
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
    #zhuyan .xuanzuo{
        background-color: cornflowerblue;
        color: white;
        border: 1px solid cornflowerblue;
        float: left;
        margin-left: 1.6rem;
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