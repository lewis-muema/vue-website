<template>
    <div class="senior-port-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">SENIOR PORT MANAGER</p>
            <p class="job-desc-par">Senior Port Manager is a key member of Sendy’s sales management team. The role is to setup, manage and grow sales & operations originating from the ports in Mombasa & Inland Container Depots in Kenya.</p>
            <p class="job-desc-head">RESPONSIBILITIES</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Acquisition & setup of trailer partners who can access the port & deliver containers.</li>
                <li class="jobs-listing">Manage & facilitate access to the ports for Sendy partners.</li>
                <li class="jobs-listing">Acquire customers who need delivery services from the ports.</li>
                <li class="jobs-listing">Setup a port network to facilitate efficient clearance of customer cargo.</li>
                <li class="jobs-listing">Projecting customer pipeline & revenue.</li>
                <li class="jobs-listing">Build pricing model for the delivery of customer cargo to various destinations.</li>
                <li class="jobs-listing">Manage all licencing & bureaucratic requirements.</li>
                <li class="jobs-listing">Building & cultivating good working relationships with customers & partners.</li>
                <li class="jobs-listing">Reporting weekly to HoD on port performance.</li>
                <li class="jobs-listing">Meet or exceed KPI’s assigned by the HoD.</li>
                <li class="jobs-listing">Any other duties assigned by management.</li> 
            </ul>
            <p class="job-desc-head">KEY PERFORMANCE INDICATORS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing"># of containers delivered.</li>
                <li class="jobs-listing"># of partners onboarded.</li>
                <li class="jobs-listing">Partner conversion rate.</li>
                <li class="jobs-listing">Growth rate.</li>
            </ul>
            <p class="job-desc-head">QUALIFICATIONS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Bachelor Degree in Business, Sales, Marketing, International Trade or Economics.</li>
                <li class="jobs-listing">Advance knowledge in Google Suite and preparing presentations.</li>
                <li class="jobs-listing">Experience in the logistics sector.</li>
                <li class="jobs-listing">Knowledge of port & customs operations in Kenya.</li>
                <li class="jobs-listing">Cross-functional team management and successful KPI performance viewed favourably.</li>
                <li class="jobs-listing">Outstanding communication skills, oral and written, technical and non technical.</li>
                <li class="jobs-listing">Excellent team player with strong leadership capability.</li>
                <li class="jobs-listing">Ability to self organize & manage time efficiently.</li>
                <li class="jobs-listing">Must be comfortable in fast-paced, deadline-driven environment.</li>
            </ul>
            <p class="job-desc-head">MORE ON SENDY</p>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br><br>
            Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.</p>
            <p class="job-desc-head">APPLY</p>
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
    parentName: 'SeniorPortManager',
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
    }
}
}
</script>

<style>

</style>
