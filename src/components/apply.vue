<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            apply: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://partner.sendyit.com/onboarding_portal/' + this.apply
        }
}
</script>

<style>

</style>
