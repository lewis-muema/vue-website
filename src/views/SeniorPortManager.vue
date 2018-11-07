<template>
    <div class="senior-port-manager">
        <Upper/>
        <div class="job-desc">
            <p class="job-desc-head">SENIOR PORT MANAGER</p>
            <p class="job-desc-par">Senior Port Manager is a key member of Sendy’s sales management team. The role is to setup, manage and grow sales & operations originating from the ports in Mombasa & Inland Container Depots in Kenya.</p>
            <p class="job-desc-head">RESPONSIBILITIES</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Acquisition & setup of trailer partners who can access the port & deliver containers.</li>
                <li id="jobs-listing">Manage & facilitate access to the ports for Sendy partners.</li>
                <li id="jobs-listing">Acquire customers who need delivery services from the ports.</li>
                <li id="jobs-listing">Setup a port network to facilitate efficient clearance of customer cargo.</li>
                <li id="jobs-listing">Projecting customer pipeline & revenue.</li>
                <li id="jobs-listing">Build pricing model for the delivery of customer cargo to various destinations.</li>
                <li id="jobs-listing">Manage all licencing & bureaucratic requirements.</li>
                <li id="jobs-listing">Building & cultivating good working relationships with customers & partners.</li>
                <li id="jobs-listing">Reporting weekly to HoD on port performance.</li>
                <li id="jobs-listing">Meet or exceed KPI’s assigned by the HoD.</li>
                <li id="jobs-listing">Any other duties assigned by management.</li> 
            </ul>
            <p class="job-desc-head">KEY PERFORMANCE INDICATORS</p>
            <ul class="job-desc-par">
                <li id="jobs-listing"># of containers delivered.</li>
                <li id="jobs-listing"># of partners onboarded.</li>
                <li id="jobs-listing">Partner conversion rate.</li>
                <li id="jobs-listing">Growth rate.</li>
            </ul>
            <p class="job-desc-head">QUALIFICATIONS</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Bachelor Degree in Business, Sales, Marketing, International Trade or Economics.</li>
                <li id="jobs-listing">Advance knowledge in Google Suite and preparing presentations.</li>
                <li id="jobs-listing">Experience in the logistics sector.</li>
                <li id="jobs-listing">Knowledge of port & customs operations in Kenya.</li>
                <li id="jobs-listing">Cross-functional team management and successful KPI performance viewed favourably.</li>
                <li id="jobs-listing">Outstanding communication skills, oral and written, technical and non technical.</li>
                <li id="jobs-listing">Excellent team player with strong leadership capability.</li>
                <li id="jobs-listing">Ability to self organize & manage time efficiently.</li>
                <li id="jobs-listing">Must be comfortable in fast-paced, deadline-driven environment.</li>
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
import Upper from './Upper';
import Lower from './Lower';
export default {
components: {
    Upper,
    Lower
},
data() {
    return {
    parentName: 'SeniorPortManager',
    windowWidth: null
    
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
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
    },
    redirect(){
        window.location = "http://www.sendy.co.ke"
    }
}
}
</script>

<style>

</style>
