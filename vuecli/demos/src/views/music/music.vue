<template>
    <div class="container">
        <div>
            <ul class="container-nav">
                <li v-for="(items,index) in dataList" :key='index+"ml"' @click='routerPush()'>
                    <img :src="items.bg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                dataList:[],
                dataLists:[],
                dataListss:[],
                id:0
            }
        },
        created(){
            this.$emit('routerChange','music');
            this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/musiclist.json').then((res)=>{
                    this.dataList = res.data.albums;
                    //console.log(res)
                }).catch(()=>{

                }),
                    axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?start='+this.dataList.length+'&count=10')
                        .then((response) => {
                            this.dataLists = response.data;
                            console.log(this.dataLists)

                        })
                        .catch((error) => {
                            console.log(error);
                        })
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.id)
                    .then((response) => {
                        this.dataListss = response.data;
                        console.log(this.dataListss)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            routerPush(){
                this.$router.push("/musicss");
            }
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    container-nav{

    }
    img{
        /*margin: 2.5%;*/
        width: 50%;
        float: left;
    }
</style>