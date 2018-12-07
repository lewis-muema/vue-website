<template>
    <div class="mombasa-details">
        <Upper/>
        <CityImg/>
        <div class="cities-details-minor">
            <p class="cities-desc-head">We just launched in Mombasa!</p>
            <p class="cities-desc-body">Now offering door-to-door delivery services in Mombasa<br>
                and between cities.</p>
            <button class="cities-sign-up-button color-white bg-orange bc-orange open-sans block center-block" type="button" onclick="location.href='https://app.sendyit.com/biz/auth/page/location';">SIGN UP</button>
        </div>
        <Lower/>
        <div class="kitenge-divider"></div>
    </div>
</template>

<script>
import Upper from './Upper';
import Lower from './Lower';
import CityImg from './CityImg';
export default {
components: {
    Upper,
    Lower,
    CityImg
},
data() {
    return {
    parentName: 'Mombasa'
    }
},
computed: {
        nameDisplayer() {
            return this.$store.state.parentName;
        }
},
mounted(){
    window.scrollTo(0, 0);
        this.$nextTick(function () {
        document.dispatchEvent(new Event('custom-render-trigger'))
    })
    this.track()
},
created() {
    this.$store.commit({
        type: 'changeParentName',
            pName: this.parentName
        }); 
    },
methods: {
        track () {
            this.$ga.page('/Mombasa')
            this.$ga.require('GTM-56KF6PL')
            this.$ga.send('pageview')
        }
}
}
</script>

<style>

</style>
