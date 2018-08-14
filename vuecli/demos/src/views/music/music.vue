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