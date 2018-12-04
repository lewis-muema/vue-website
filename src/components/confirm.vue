<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            confirm1: this.$route.params.any1,
            confirm2: this.$route.params.any2
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/price/adjust/' + this.confirm1 + '/' + this.confirm2
        }
}
</script>

<style>

</style>
