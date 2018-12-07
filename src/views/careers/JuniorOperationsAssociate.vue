<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">JUNIOR OPERATIONS ASSOCIATE- ACQUISITION</p><br>
            <p class="job-desc-par">The Junior Operations Associate will be responsible for partner identification, recruitment, training/onboarding, retention and engagement.</p><br>
            <p class="job-desc-head">RESPONSIBILITIES</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">New partner onboarding & ensuring that all partner KYC meets Sendy requirements.</li>
                <li class="jobs-listing">Monitoring and assessing Partner performance and metrics to ascertain effectiveness of recruitment, training and onboarding process.</li>
                <li class="jobs-listing">Meeting daily, weekly and monthly targets set by management.</li>
                <li class="jobs-listing">Liaise with marketing department to ensure Sendy Partners are clean and well branded.</li>
                <li class="jobs-listing">Management of Partner merchandise inventory.</li>
                <li class="jobs-listing">Customer Support for Partners: Provide directional & technical support to all Sendy partners to enable them service clients.</li>
                <li class="jobs-listing">Partner Training: Ensure that all partners are trained as per Sendy operational protocols.</li>
                <li class="jobs-listing">Tracking partners with complaints and facilitating refresher training. Ensuring all Sendy partners receive training on new products, technical changes and client requirements.</li>
                <li class="jobs-listing">Partner Welfare management: Managing the welfare of all partners and ensuring that their needs & requirements are met in relation to their Sendy Partner Agreement.</li>
                <li class="jobs-listing">Partner Communication: Manage all communication channels for partners including phone & email ensuring responses are given as soon as possible.</li>
                <li class="jobs-listing">Partner Discipline: To communicate, track & enforce disciplinary measures amongst partners as per the Sendy policy.</li>
                <li class="jobs-listing">Any other duties assigned to you.</li>
            </ul><br>
            <p class="job-desc-head">QUALIFICATIONS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Bachelor's degree.</li>
                <li class="jobs-listing">Excellent computer skills and proficient in excel, word, google docs, etc.</li>
                <li class="jobs-listing">Excellent communication skills both verbal and written - English & Kiswahili.</li>
                <li class="jobs-listing">Demonstrated leadership and vision in managing major projects or initiatives.</li>
                <li class="jobs-listing">Team player.</li>
                <li class="jobs-listing">Ability to work without supervision.</li>
                <li class="jobs-listing">Comfortable operating in a fast paced, deadline-driven environment.</li>
                <li class="jobs-listing">Excellent people manager, with collaborative work style and commitment to getting the job done.</li>
                <li class="jobs-listing">Ability to challenge and debate issues of importance to the organization.</li>
                <li class="jobs-listing">Background in logistics</li>
            </ul><br>
            <p class="job-desc-head">MORE ON SENDY</p><br>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br><br>
            Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.</p><br>
            <p class="job-desc-head">APPLY</p><br>
            <p class="job-desc-par">Please forward your CV to <a href="mailto:jobs@sendy.co.ke" target="_blank">jobs@sendy.co.ke.</a></p>
            
        </div>
        <Lower/>
        <div class="kitenge-divider"></div>
    </div>

</template>

<script>
import Upper from '../Upper';
import Lower from '../Lower';
export default {
components: {
    Upper,
    Lower
},
data() {
    return {
    parentName: 'JuniorOperationsAssociate',
    windowWidth: null,
    newLeft: null
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
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    },
     destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    mounted(){
    window.scrollTo(0, 0);
    this.$nextTick(function () {
        document.dispatchEvent(new Event('custom-render-trigger'))
    })
    this.track()
    },
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
        var range = 2560 - this.windowWidth
        var quotient = (range * 13.5)/1536
        if(window.innerWidth > 768){
            this.newLeft = 19 - quotient
        }
        else{
            this.newLeft = 19 - (quotient - 5)
        }
    },
    redirect(){
        window.location = "http://www.sendy.co.ke"
    },
    track () {
        this.$ga.page('/Junior Operations Associate')
        this.$ga.require('GTM-56KF6PL')
        this.$ga.send('pageview')
    }
}
}
</script>

<style>

</style>
