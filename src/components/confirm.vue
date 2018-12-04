<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            confirm: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/price/adjust/' + this.confirm
        }
}
</script>

<style>

</style>
