<template>
    <div>
        <div>
            <h1>联系我们{{$store.state.count}}</h1>
            <router-link :to="{name:'test1',params:{name:'lisi',age:'30'}}">test1</router-link> |
            <router-link to="/connect/test2/zhangsan/20">test2</router-link>|
            <router-link to="/connect/backtest2/zhangsan/20">back test2</router-link>
            <div class="card" style="width: 20%;">
                <img class="card-img-top" src="../../../../fuxi/ruangong/img/a4.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><a href="#">Card title</a></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
                    <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
                    <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            <!--<router-view/>-->
        </div>
        <div class="router-tran">
            <transition name="fad">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .card{
        margin: auto;
    }
    .router-tran{
        position: relative;
    }
    .fad-enter{
        transform: scale(1.0);
        opacity: 0;
    }
    .fad-enter-active{
        transition: all 1s ease;
    }
    .fad-enter-to{
        transform: scale(1.0);
        opacity: 1;
    }
    .fad-leave{
        transform: scale(1.0);
        opacity: 1;
    }
    .fad-leave-active{
        transition: all 1s ease;
    }
    .fad-leave-to{
        transform: scale(1.0);
        opacity: 0;
    }
</style>