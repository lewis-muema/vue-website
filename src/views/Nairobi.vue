<template>
    <div class="nairobi-details">
        <Upper/>
        <CityImg/>
        <div class="cities-details-minor">
            <p class="cities-desc-head">Our Headquarters!</p>
            <p class="cities-desc-body">From Gitaru to Rongai and Kiambu, we cover all of Greater Nairobi.<br>
Request a delivery with any of our different service providers!</p>
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
    parentName: 'Nairobi'
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
        this.mixTrackPage()
    })
},
created() {
    this.$store.commit({
        type: 'changeParentName',
            pName: this.parentName
        });  
    },
methods: {
    mixTrackPage(){
    var mixpanel = require('mixpanel-browser');
    mixpanel.init("44f45c8f1e756ba049e6284def96ac7f");
    mixpanel.track("Nairobi Page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
