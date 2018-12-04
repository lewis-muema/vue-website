<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            growth_signup_with_phone : this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/growth/' + this.growth_signup_with_phone
        }
}
</script>

<style>

</style>
