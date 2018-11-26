<template>
<div class = 'API-page'>
    <Upper/>
    <div class="center-api centerX centerY flex">
        <div class="desc-api center-text color-white">
            <p class="api-head">Delivery for Platforms and E-commerce</p>
            <p class="api-par">A set of unified APIs and tools to instantly enable you to request and manage package delivery for your <br>platforms with integrated code samples, debugging and automated testing.</p>
            <span class="">
                <button class="get-started-api" type="button" onclick="location.href='https://apptest.sendyit.com/get_started';">GET STARTED</button>
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
    },
}
</script>

<style>

</style>
