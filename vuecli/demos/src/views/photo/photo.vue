<template>
    <div class="container">
        <div>
            照片
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.$emit('routerChange','photo');
        }
    }
</script>