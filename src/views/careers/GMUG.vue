<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">COUNTRY MANAGER UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult forsmall business to trade in Africa. At Sendy we are on a mission to solve this problem. We have built the first efficient shared logistics platform for Africa that will create new possibilities forsmall businesses and transporters.<br><br>
            A Country Manager is an executive level position which oversees all of Sales, Partner Operations, & Support at a country level and reports directly to the Commercial Director.
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Focus on the customers, champion and understand their needs and double up when they are delighted.</li>
                <li class="jobs-listing">Foster a deep understanding of the company vision, and our competitive and market environments in order to help shape market strategies.</li>
                <li class="jobs-listing">Ensure that Sendy provides industry-leading customer experience to grow retention (engagement, adoption and expansion).</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Build high performing teams across Sales, Partner Operations and Support.</li>
                <li class="jobs-listing">Build, lead and empower a team to grow Sendy’s Partners in country.</li>
                <li class="jobs-listing">Originate and manage business development opportunities that are consistent with the company’s strategy for revenue growth.</li>
                <li class="jobs-listing">Manage the Support Team to deliver on and monitor Customer Care KPIs</li>
                <li class="jobs-listing">Mentor Team Leads into future executive roles for Sendy.</li>
                <li class="jobs-listing">Manage and motivate teams to achieve aggressive goals.</li>
                <li class="jobs-listing">Lead the overall tracking, forecasting and communication of related success metrics.</li>
                <li class="jobs-listing">Ensure Partner Operations and Sales balance optimally on Sendy’s platform (Supply = Demand).</li>
                <li class="jobs-listing">Work side-by-side with the VPs of Marketing, Growth, and Expansion to deliver on Sendy’s growth targets.</li>
                <li class="jobs-listing">Define Sendy’s commercial path to growth and profitability and establish an effective growth process and infrastructure.</li>
                <li class="jobs-listing">Work closely with Product, Engineering, and Business teams to identify strategic partnership opportunities.</li>
                <li class="jobs-listing">Own the P&L, pricing, categories and market performance for the Country operations.</li>
                <li class="jobs-listing">Own quarterly metrics and reports for Sendy Investors.</li>

            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Be a thought leader - bring new ideas to the table, challenge teams to innovate and set the highest bar for the standard of our execution.</li>
                <li class="jobs-listing">Automate and increase efficiency of Support channels.</li>
                <li class="jobs-listing">Analyze and optimize quality and efficiency of Sendy’s services.</li>
                <li class="jobs-listing">Analyze marketing performance reports and make proactive recommendations for changes.</li>
            </ul>
            <p class="job-desc-par">Be Flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Develop and execute on the company’s sales strategy across key market segments to ensure that the company identifies and optimizes a clear path to growth.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our customers and partners from the terms of conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">A leader: You have managed, grown, and nurtured teams. You know how to develop individuals into superstars.</li>
                <li class="jobs-listing">Strategic: You’re an expert in building businesses. You appreciate the importance of the tiniest detail to deliver on the big vision.</li>
                <li class="jobs-listing">Connected: You always know the right person to speak with and come with a portfolio of companies that would benefit from Sendy’s innovative solution.</li>
                <li class="jobs-listing">A professional who likes to have fun: You know how to make the right impression and are always focused on delivering, but, you know how to have fun and don’t take yourself too seriously.</li>
                <li class="jobs-listing">Passionate about growth: You love setting and beating targets. Growth is an addiction for you.</li>
                <li class="jobs-listing">Problem-solver: analytical mind that can navigate obstacles on the fly in a logical and rational way. Engage in precise, data and details about the business.</li>
                <li class="jobs-listing">You are an excellent and influential communicator and use data to reinforce your positions and decisions.</li>
            </ul>
            <p class="job-desc-head">BENEFITS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient / Outpatient / Dental / Optical.</li>
                <li class="jobs-listing">Phone & computer</li>
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
    parentName: 'GMUG',
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
      this.$ga.page('/General manager UG')
      this.$ga.require('GTM-56KF6PL')
      this.$ga.send('pageview')
    }
}
}
</script>

<style>

</style>
