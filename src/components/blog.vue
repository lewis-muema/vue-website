<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            blog: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://medium.com/sendy-ke/' + this.blog
        }
}
</script>

<style>

</style>
