<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            track: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/sendyconnect/track/' + this.track
        }
}
</script>

<style>

</style>
