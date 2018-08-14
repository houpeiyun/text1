<template>
    <div class="container">
       <ul>
           <li v-for="(items,index) in dataLists" @click='routerPush()' >
               <img :src='items.src'  @click="add(index)">
           </li>
       </ul>
        <div class="dd"></div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapState,mapMutations} from 'vuex';
    var VueTouch = require('vue-touch')
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
          return{
              dataLists:[],
          }
        },
        created(){
            this.$emit('routerChange','photo');
            this.getData();
        },
        methods:{
            ...mapMutations(["add"]),
            getData(){
                axios.get('./data/photodata.json').then((res)=>{
                    this.dataLists = res.data.photoData;
                    console.log(this.dataLists);
                }).catch(()=>{

                })
            },
            routerPush(){
                this.$router.push("/photodetail");
            }
        },
        computed:{
            //...mapState(["srcs"]),
        }

    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    img{
        /*margin: 2.5%;*/
        height: 3rem;
        width: 50%;
        float: left;
    }
    ul{
        overflow: hidden;
    }
    .dd{
        height: 1rem;
    }
</style>