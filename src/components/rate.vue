<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            rate: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/rate/details/' + this.rate
        }
}
</script>

<style>

</style>
