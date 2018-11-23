<template>
    <div class="client-relations-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">Client Relations Manager</p>
            <p class="job-desc-par">Sales Executive is a key member of Sendy’s sales management team. The role is to manage and protect the relationship between Sendy and our clients, as well as growing the number of new accounts that come on board.</p>
            <p class="job-desc-head">Responsibilities</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Acquisition of customers by delivering quality value proposition pitches.</li>
                <li class="jobs-listing">Activation of new customers through training & value delivery.</li>
                <li class="jobs-listing">Growing Mom overall total revenue as per assigned quota.</li>
                <li class="jobs-listing">Monitoring & reporting on customer growth.</li>
                <li class="jobs-listing">Projecting customer pipeline & revenue.</li>
                <li class="jobs-listing">Supporting finance in collection of unpaid RFP’s from assigned accounts.</li>
                <li class="jobs-listing">Building & cultivating good working relationships with customers.</li>
                <li class="jobs-listing">Getting referrals from existing customers.</li>
                <li class="jobs-listing">Reporting weekly to HoD on sales performance.</li>
                <li class="jobs-listing">Work with driver management & marketing to ensure sufficient supply for customer demand for assigned accounts.</li>
                <li class="jobs-listing">Meet or exceed quota assigned by the HoD.</li> 
                <li class="jobs-listing">Any other duties assigned by management.</li> 
            </ul>
            <p class="job-desc-head">KPIs</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Total sales as per assigned quota.</li>
                <li class="jobs-listing">New revenue added.</li>
                <li class="jobs-listing">Revenue growth from existing accounts.</li>
                <li class="jobs-listing"># of deliveries.</li>
                <li class="jobs-listing">Timely reports as required by the HOD.</li>
                <li class="jobs-listing">Fully executed contracts for all post pay customers assigned.</li>
                <li class="jobs-listing">Communication with team members & customers in a timely & professional manner.</li>
            </ul>
            <p class="job-desc-head">Qualifications</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Bachelor Degree in Business, Sales, Marketing or Economics.</li>
                <li class="jobs-listing">Advance knowledge in Google Suite and preparing presentations.</li>
                <li class="jobs-listing">Demonstrated success in negotiating, cultivating and growing partnerships across all levels and sectors, problem solving and issue resolution.</li>
                <li class="jobs-listing">Sales experience.</li>
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
import Upper from './Upper';
import Lower from './Lower';
export default {
components: {
    Upper,
    Lower
},
data() {
    return {
    parentName: 'ClientRelationsManager',
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
