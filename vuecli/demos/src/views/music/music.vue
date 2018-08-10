<template>
    <div class="container">
        <div>
            音乐
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.$emit('routerChange','music');
        }
    }
</script>