<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            pay: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/external_pay/index/' + this.pay
        }
}
</script>

<style>

</style>
