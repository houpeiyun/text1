<template>
    <div class="container">
        <div>
            <v-touch v-on:swipeleft="jian" v-on:tap="onTap" v-on:swiperight="jia" :style="bg" >Swipe me!</v-touch>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    var VueTouch = require('vue-touch')
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
          return{
              num:0
          }
        },
        computed:{
            ...mapState(["srcs"]),
          bg(){
              return {background:`#000 url('./imgs/${this.srcs}.jpg') no-repeat center/contain`}
          }
        },
        created(){
            this.$emit('routerChange','photo');
            if(!this.srcs){
                this.$router.push("/photo");
            }
            console.log(this.srcs);
        },
        methods:{
            ...mapMutations(["jia","jian"]),
            /*onSwipeLeft(){
                console.log("left");
                if(this.srcs==1){
                    this.srcs = 24;
                }
                else {
                    this.srcs-=1;
                }
            },*/
            onTap(){
                this.$router.push("/photo");
            },
           /* onSwipeRight(){
                console.log("right");
                if(this.srcs==24){
                    this.srcs = 1;
                }
                else {
                    this.srcs+=1;
                }
            }*/
        }
    }
</script>
<style scoped>
    div{
        height: 9.5rem;
    }
</style>