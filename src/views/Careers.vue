<template>
    <div class="careers-page">
        <Upper/>
        <Slideshow/>
        <div class="step-up">
            <p class="step-up-head">Step Up</p>
            <p class="step-up-par">Build world class technology in Kenya.<br>
                                Disrupt the logistics industry in Africa.<br>
                                Make decisions and see impact.<br>
                                Accelerate your career.<br>
                                Get s*** done.</p>
        </div>
        <div class="montage">
            <div class="montage-row">
            <img src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/sendy_team_01111.jpg" class="montage-pic1">
            <img src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/sendy_team_09.jpg" class="montage-pic2">
            </div>
            <div class="montage-row">
            <img src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/sendy_team_03.jpg" class="montage-pic3">
            <img src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/sendy_team_04.jpg" class="montage-pic3">
            <img src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/sendy_team_05.jpg" class="montage-pic3">
            </div>
        </div>
        <div class="benefits">
            <p class="benefits-head">Benefits</p>
            <div class="benefits-row center-block grid">
                <div class="benefits-column block center-block">
                <img class="benefits-thumb" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/design-9.png">
                <p class="benefits-par">Educational Stipend</p>
                </div>
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_08.png">
                <p class="benefits-par">Yummy Food</p>
                </div>
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_07.png">
                <p class="benefits-par">Cool Swag</p>
                </div>
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_03.png">
                <p class="benefits-par">Health Insurance</p>
                </div>
            </div>

            <div class="benefits-row center-block grid">
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_05.png">
                <p class="benefits-par">Free Deliveries</p>
                </div>
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_04.png">
                <p class="benefits-par">Creative Space</p>
                </div>
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_06.png">
                <p class="benefits-par">Sports Session</p>
                </div>
                <div class="benefits-column">
                <img class="benefits-thumb block center-block" src="https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/benefits_01.png">
                <p class="benefits-par">New Tools</p>
                </div>
            </div>
        </div>
        <div class="jobs">
            
            <div class="jobs-container">
                <p class="jobs-head">Jobs</p>
                    <p class="jobs-bold flex centerY">Position</p>
                    <p class="jobs-bold flex centerY jobs-loc" v-if="windowWidth > 430">Location</p>
                    <div class="jobs-bold flex centerY" v-if="windowWidth > 430"><p class="job-dept">Department</p></div>
                    <div class="jobs-row flex centerY" v-for="job in jobs" :key="job.position">
                    <span class="jobs-col">
                    <router-link :to="job.path" class="jobs-link">{{ job.position }}</router-link>
                    </span>
                    <span class="jobs-col" v-if="windowWidth > 430">
                    <p class="jobs-loc">{{ job.location }}</p>
                    </span>
                    <span class="jobs-col" v-if="windowWidth > 430">
                    <p class="jobs-dept">{{ job.department }}</p>
                    </span>
                    </div>
                    
                </div>
        </div>
        <Lower/>
        <div class="kitenge-divider"></div>
    </div>
</template>

<script>
import Slideshow from './Slideshow';
import Upper from './Upper';
import Lower from './Lower';
export default {
components: {
    Upper,
    Lower,
    Slideshow
},
data() {
    return {
    parentName: 'Careers',
    windowWidth: null,
    jobs: [
        {position: 'Country General Manager', location: 'Uganda', department: 'Management', path: '/careers/countrygm'},
        {position: 'Operations Lead', location: 'Uganda', department: 'Operations', path: '/careers/operationsleadug'},
        //{position: 'Head of Partner Operations', location: 'Nairobi, Kenya', department: 'Operations', path: '/careers/headofpartneroperations'},
        {position: 'Operations Associate', location: 'Nairobi, Kenya', department: 'Operations', path: '/careers/operationsassociate'},
        {position: 'Product Manager', location: 'Nairobi, Kenya', department: 'Product', path: '/careers/productmanager'},
        {position: 'Marketing Associate', location: 'Uganda', department: 'Marketing', path: '/careers/MarketingAssociateUG'},
        {position: 'Junior Support Manager', location: 'Uganda', department: 'Support', path: '/careers/jrsupportmanager'},
        {position: 'Operations Associate', location: 'Uganda', department: 'Operations', path: '/careers/OperationsAssociateUG'},
        {position: 'Customer & Partner Support - Country Lead', location: 'Uganda', department: 'Support', path: '/careers/customer&partnersupport'}
    ]
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
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    },
     destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    mixTrackPage(){
    var mixpanel = require('mixpanel-browser');
    mixpanel.init("44f45c8f1e756ba049e6284def96ac7f");
    mixpanel.track("Careers Page", {
    "landing page version": "website",
    });
    },
    mixTrackElements(data){
    var mixpanel = require('mixpanel-browser');
    mixpanel.init("44f45c8f1e756ba049e6284def96ac7f");
    mixpanel.track(data, {
    "landing page version": "website",
    });
    }
    }
    
}
</script>

<style>

</style>
