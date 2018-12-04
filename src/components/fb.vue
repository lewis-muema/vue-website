<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            fb: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://www.sendy.co.ke/Link/mcommerce/' + this.fb
        }
}
</script>

<style>

</style>
