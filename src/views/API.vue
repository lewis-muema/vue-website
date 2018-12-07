<template>
<div class = 'API-page'>
    <Upper/>
    <div class="center-api centerX centerY flex">
        <div class="desc-api center-text color-white">
            <p class="api-head">Delivery for Platforms and E-commerce</p>
            <p class="api-par">A set of unified APIs and tools to instantly enable you to request and manage package delivery for your <br>platforms with integrated code samples, debugging and automated testing.</p>
            <span class="">
                <router-link to="/publicapi" class=""><div class="get-started-api" type="button">GET STARTED</div></router-link>
            </span>
        </div>
    </div>
    <Lower/>
    <div class="kitenge-divider"></div>
</div>    
</template>

<script>
import Upper from './Upper';
import Lower from './Lower';
export default {
    data() {
        return {
        parentName: 'API',
        }
    },
    components: {
        Upper,
        Lower
    },
    methods: {
        track () {
      this.$ga.page('/API')
      this.$ga.require('GTM-56KF6PL')
      this.$ga.send('pageview')
    }
    },
    computed: {
        nameDisplayer() {
            return this.$store.state.parentName;
        }
    },
    created() {
            this.$store.commit({
                type: 'changeParentName',
                pName: this.parentName
            });   
    },
    mounted(){
    window.scrollTo(0, 0);
    this.$nextTick(function () {
        document.dispatchEvent(new Event('custom-render-trigger'))
    })
    this.track()
    },
}
</script>

<style>

</style>
