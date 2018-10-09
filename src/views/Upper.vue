<template>
    <div>
        <div class ='sendy-logo'>
            <img class ='sendy-logo-img' src='https://sendyit.com/include/bits/Sendy_logo_3.png'>
            <a v-if="pageCheck == 'becomePartner'" href="https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565" class='upper-link-partner'>
            BECOME A PARTNER</a>
            <router-link v-if="pageCheck == 'backHome'" to="/" class='upper-link-partner'>HOME</router-link>
            <a href="https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565" class='upper-link-log'>
            LOG IN</a>
            <button href="https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565" class='button-link'>
            SIGN IN</button>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            parentName: null,
            pageCheck: null,
            
        }
    },
    computed: {
        nameDisplayer() {
            return this.$store.state.parentName
            
        }
    },
    created() {
        this.parentName = this.nameDisplayer
        if(this.parentName == 'Home'){
                this.pageCheck = 'becomePartner'
            }
            else if(this.parentName == 'API'){
                this.pageCheck = 'backHome'
            }
    }  
}
</script>

<style>

</style>
