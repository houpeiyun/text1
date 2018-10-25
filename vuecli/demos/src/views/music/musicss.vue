<template>
    <div class="container-nav-c">
        <aplayer autoplay v-if="isif"
                 :music="dataLists[0]" :list="dataLists" :showLrc="isifs"
        />
    </div>
</template>
<script>
    import Aplayer from 'vue-aplayer'
    //import Aplayer from './components/musics.vue'
    export default {
        components: {
            Aplayer
        },
        data(){
            return{
                dataLists:[],
                isif:false,
                isifs:false
            }
        },
        created(){
            this.$emit('routerChange','music');
            this.getData()
        },
        methods:{
            getData(){
                axios.get('http://localhost/demo2/Music/add').then((res)=>{
                    this.dataLists = res.data;
                    console.log(res.data);
                    this.isif=true;
                    this.isifs=true;
                    console.log(this.dataLists[0].lrc);
                    this.dataLists.forEach((val,index)=>{
                        this.dataLists[index].lrc = window.location.origin+window.location.pathname+this.dataLists[index].lrc
                    })

                }).catch(()=>{

                })
            },
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .container-nav-c{
        margin-top: 1rem;
    }
    img{
        /*margin: 2.5%;*/
        width: 50%;
        float: left;
    }
</style>