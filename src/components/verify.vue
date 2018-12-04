<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            verify: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/sendyconnect/receipt/' + this.verify
        }
}
</script>

<style>

</style>
