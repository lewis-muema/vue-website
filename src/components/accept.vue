<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            accept: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://partner.sendyit.com/driverequest/' + this.accept
        }
}
</script>

<style>

</style>
