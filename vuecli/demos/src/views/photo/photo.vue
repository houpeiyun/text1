<template>
    <div class="container">
        <div>
            照片
            <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>
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

            }
        }
    }
</script>