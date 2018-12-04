<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            approve: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/confirm_order/index/' + this.approve
        }
}
</script>

<style>

</style>
