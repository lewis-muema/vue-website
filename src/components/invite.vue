<template>
    <div></div>
</template>

<script>
export default {
data(){
        return {
            invite: this.$route.params.any
        }
    },
    created(){
            location.href = 'https://app.sendyit.com/biz/Invite/promocode' + this.invite
        }
}
</script>

<style>

</style>
