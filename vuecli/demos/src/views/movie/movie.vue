<template>
    <div class="container">
        <!--<h1>电影</h1>-->
        <ul class="container-nav">
            <li v-for="(items,index) in dataList" :key='index+"dl"'>
                <img :src="items.images.large" alt="">
                {{items.title}}
                <div>导演:{{items.directors[0].avatars.name}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
          return{
              dataList:[]
          }
        },
        created(){
            this.$emit('routerChange','movie');
            this.getData();
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters')
                    .then((response) => {
                        this.dataList = response.data.subjects
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                        //http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.radio.getArtistChannelSong&format=json
                    })
                /*axios.get('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.radio.getArtistChannelSong&format=json')
                    .then((response) => {
                        this.dataList = response.data
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                        //http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.radio.getArtistChannelSong&format=json
                    })*/
            }
        }
    }
</script>
<style>
    img{
        width: 2rem;
        height: 1.5rem;
    }
    .container-nav li{
        margin: 0.2rem 0.3rem 0.3rem 0.3rem;
    }
</style>
<!--<template>
    <div>
        <div class="container">
            <h1>电影</h1>
            <ul>
                <li v-for="(items,index) in dataList" :key='index+"dl"'>
                    {{items.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.getData()
        },
        data () {
            return {
                dataList:[]
            }
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters')
                    .then((response) => {
                        this.dataList = response.data.subjects
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
</script>
<style scoped>

</style>-->
