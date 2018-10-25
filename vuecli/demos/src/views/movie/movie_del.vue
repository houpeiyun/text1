<template>
    <div class="header-1" v-if="isif">
        {{id}}
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dataList:[],
                id:"",
                ids:"",
                isif:false
            }
        },
        created(){
            this.$emit('routerChange','movie');
            this.id = this.$route.params.moviesId;
            this.ids = this.$route.params.cinema;
            this.getData();
        },
        methods:{
            getData(){
                /*axios.get('http://localhost/demo2/Music/movie')
                    .then((response) => {
                        this.dataList = response.data[this.id-1];
                        console.log(this.dataList)
                        this.isif=true
                    })
                    .catch((error) => {
                        console.log(error);
                    })*/
                this.isif=true
                this.dataList[0] = this.ids
                console.log(this.id)
            },
        },


    }
</script>
<style scoped>
.header-1{
    margin-top: 1rem;
    background-color: blanchedalmond;
    height: 1rem;
    width: 1rem;
}
</style>