<template>
    <div class="container">
        <div>
            照片
            <v-touch v-on:swipeleft="onSwipeLeft" v-on:tap="onTap" v-on:swiperight="onSwipeRight">Swipe me!</v-touch>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    var VueTouch = require('vue-touch')
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        created(){
            this.$emit('routerChange','photo');
        },
        methods:{
            onSwipeLeft(){
                console.log("left")
            },
            onTap(){
                console.log("top")
            },
            onSwipeRight(){
                console.log("right")
            }
        }
    }
</script>