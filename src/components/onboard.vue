<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            onboard: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/onboard/' + this.onboard
        }
}
</script>

<style>

</style>
