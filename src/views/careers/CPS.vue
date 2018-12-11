<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">CUSTOMER & PARTNER SUPPORT COUNTRY LEAD UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Focus on the customers, champion and understand their needs and double up when they are delighted.</li>
                <li class="jobs-listing">Provide ‘voice of the customers and partners’ to cross-functional teams, such as engineering, sales, marketing, growth and Operations to grow partner and customer retention (engagement, adoption and expansion).</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Lead, develop, engage, manage, mentor, and train your team to maximize performance and potential.</li>
                <li class="jobs-listing">Manage the team to deliver on and monitor Customer & Partner Support KPIs.</li>
                <li class="jobs-listing">Understand user complaints and work with Head of Product, Head of Engineering and Head of Operations to implement long-term solutions to prevent recurring complaints.</li>
                <li class="jobs-listing">Define and optimize user & partner lifecycle, tracking the success of the program and help mould the product so that it achieves the user’s objectives and the product manager’s objectives.</li>
                <li class="jobs-listing">Ensure effective execution of complaint root cause analysis and work with other business areas to implement improvements and controls.</li>
                <li class="jobs-listing">Develop and implement a customer experience policy for a company cross borders.</li>
                <li class="jobs-listing">Develop Customer / Partner Support automated systems, procedures, policies and standards</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Be a hustler and have no problem getting your hands dirty and doing the gritty work that comes along with the higher-level thinking. You thrive in a fast-paced environment.</li>
            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Keep ahead of industry developments and apply best practices to areas of improvement.</li>
                <li class="jobs-listing">Implement systems to move the customer & partner experience away from in-person phone calls.</li>
                <li class="jobs-listing">Analyze statistics and compile accurate reports.</li>
                <li class="jobs-listing">Own the Sendy Experience, delivering users a Simple, Transparent, and User-Focused experience.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our customers and partners from the terms of conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">5+ years experience developing and delivering on customer experience strategies and management.</li>
                <li class="jobs-listing">Understanding of startup speed and working environment.</li>
                <li class="jobs-listing">Prior experience managing cross-functional teams.</li>
                <li class="jobs-listing">Problem-solver: analytical mind that can navigate obstacles on the fly in a logical and rational way.</li>
                <li class="jobs-listing">Excellent and influential communication skills, using data to reinforce your positions and decisions.</li>
                <li class="jobs-listing">Calmness in the face of a storm.</li>
                <li class="jobs-listing">Motivate a team under pressure, with challenging timelines and targets</li>
                <li class="jobs-listing">Capable of delivering against Investor KPIs and ownership of P&L</li>
                <li class="jobs-listing">Highly competitive and have a unique drive to win.</li>
                <li class="jobs-listing">Understanding of startup speed and working environment.</li>
            </ul>
            <p class="job-desc-head">BENEFITS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient / Outpatient / Dental / Optical.</li>
                <li class="jobs-listing">Phone & computer</li>
                <li class="jobs-listing">Company stock options</li>
                <li class="jobs-listing">Office lunch</li>
                <li class="jobs-listing">Education stipend</li>
            </ul>
            <!--<p class="job-desc-head">MORE ON SENDY</p><br>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br><br>
            Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.</p><br>-->
            <p class="job-desc-head">APPLY</p>
            <p class="jobs-listing">Please forward your CV to <a href="mailto:jobs@sendy.co.ke" target="_blank" class="color-blue">jobs@sendy.co.ke.</a></p>
            
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
    parentName: 'CPS',
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
    this.mixTrackPage()
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
    },
    mixTrackPage(){
    var mixpanel = require('mixpanel-browser');
    mixpanel.init("44f45c8f1e756ba049e6284def96ac7f");
    mixpanel.track("Customer and partner support Page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
