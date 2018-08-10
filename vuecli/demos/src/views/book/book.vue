<template>
    <div class="container">
        <div>
            书籍
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.$emit('routerChange','book');
        }
    }
</script>