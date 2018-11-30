<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">Head of Partner Operations</p><br>
            <p class="job-desc-par">The Head of Partner Operations is a critical role responsible for Partners (Drivers) growth and retention. It takes a mixture of marketing creativity, analytical brains and pure hustle to bring Sendy’s operations to life quickly. We are looking for a leader that can manage an international team, promote the Sendy brand, hire local talent, tackle many different projects, and grow Sendy into a global Logistics and Transportation business.</p><br>
            <p class="job-desc-head">About the Role</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Build, lead and empower a team of Operations Managers and Analysts to grow Sendy in East Africa</li>
                <li class="jobs-listing">Work closely with Product, Engineering, and Business teams to identify strategic partnership opportunities</li>
                <li class="jobs-listing">Scale Partner (Drivers) growth across multiple services and regions.</li>
                <li class="jobs-listing">Analyze and optimize quality and efficiency of Sendy’s services.</li>
                <li class="jobs-listing">Report directly to the CEO and Board of Directors on all Partner Operations KPIs.</li>
                <li class="jobs-listing">Develop, manage, and deliver on an Operations Budget.</li>
                <li class="jobs-listing">Project manage all Driver Partnership initiatives and deliver to deadlines.</li>
                <li class="jobs-listing">Own all responsibilities of vertical.</li>
                <li class="jobs-listing">Strategize the future of Sendy Partnerships and help build that future.</li>
            </ul><br>
            <p class="job-desc-head">About You</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">5+ years Management level experience of operations management / management consulting / investment banking / strategy</li>
                <li class="jobs-listing">Master's degree in Economics, Mathematics. Operations Management, Finance or similar field.</li>
                <li class="jobs-listing">Prior experience managing cross­functional teams.</li>
                <li class="jobs-listing">You are a Hustler and have no problem getting your hands dirty and doing the gritty.<br>work that comes along with the higher­level thinking. You thrive in a fast­paced<br>environment.</li>
                <li class="jobs-listing">Understanding of startup speed and working environment.</li>
                <li class="jobs-listing">Problem­solver: analytical mind that can navigate obstacles on the fly in a logical and<br>rational way. Engage in precise, data and details about the business</li>
                <li class="jobs-listing">You are an excellent and influential communicator and use data to reinforce your positions and decisions.</li>
                <li class="jobs-listing">Successfully executed operations, preferably with P&L ownership, is a plus.</li>
                <li class="jobs-listing">You are highly competitive and has a unique drive to win.</li>
            </ul><br>
            <p class="job-desc-head">Benefits</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient / Outpatient / Dental / Optical.</li>
                <li class="jobs-listing">Flexible vacation.</li>
                <li class="jobs-listing">All Risk Insurance.</li>
                <li class="jobs-listing">Opportunity for company stock options.</li>
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
import Upper from './Upper';
import Lower from './Lower';
export default {
components: {
    Upper,
    Lower
},
data() {
    return {
    parentName: 'HeadOfPartnerOperations',
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
