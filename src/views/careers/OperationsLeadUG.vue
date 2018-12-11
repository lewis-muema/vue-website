<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">OPERATIONS LEAD UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
                                    The Operations Manager role is a unique opportunity to help drive growth through the optimization of our growing Partner operations. This data driven role calls for a rare combination of analytical thinking & interpersonal skills. It is a critical role responsible for growing our truck partners and managing the end to end process of this segment of our partners!
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Focus on customers, champion customers understand their needs and double up when they are delighted.</li>
                <li class="jobs-listing">Provide 'voice of drivers’ to cross-functional teams, such as engineering, product management, sales, marketing and support to grow driver retention (engagement ,adoption, and expansion)</li>
                <li class="jobs-listing">Utilize internal tools to take prospective truck owners and drivers from application to their first order/trip on the platform.</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Scale Partner (Drivers) growth across multiple services and regions.</li>
                <li class="jobs-listing">Project manage all Driver Partnership initiatives and deliver to deadlines.</li>
                <li class="jobs-listing">Help our drivers and partners grow by ensuring we continuously deliver sustainable value to them.</li>
                <li class="jobs-listing">Maintain and build relationships with truck owners and drivers.</li>
                <li class="jobs-listing">Build, lead and mentor a team of Operations Associates.</li>
            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Work closely with Product, Engineering, and Business teams to identify strategic partnership opportunities.</li>
                <li class="jobs-listing">Analyze and optimize the quality and efficiency of Sendy’s services.</li>
                <li class="jobs-listing">Continuously train drivers. - Well trained drivers are the key to an excellent customer experience. You will look at ways to improve our driver training process at scale.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Communicate with Sales and advise as to the current & future operational capacity in regards to enterprise accounts.</li>
                <li class="jobs-listing">Ensure transparent communication with all our partners, customers from terms and conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Develop various ad-hoc models and operation analyses to support key business decisions.</li>
                <li class="jobs-listing">Be a Hustler and get your hands dirty and do the gritty work that comes along with the higher-level thinking.</li>
            </ul>
            <p class="job-desc-par">Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Aim to design and implement processes and procedures with simplicity in mind.</li>
                <li class="jobs-listing">Your output is not only a pleasure for partners/drivers to use, but for other members of the team to read and understand easily.</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">5+ years Management level experience of operations management / management consulting / investment banking / strategy</li>
                <li class="jobs-listing">Master's degree in Economics, Mathematics. Operations Management, Finance or similar field.</li>
                <li class="jobs-listing">Prior experience managing cross-functional teams.</li>
                <li class="jobs-listing">You are a Hustler and have no problem getting your hands dirty and doing the gritty work that comes along with the higher-level thinking. You thrive in a fast-paced environment.</li>
                <li class="jobs-listing">Understanding startup speed and working environment.</li>
                <li class="jobs-listing">Problem-solver: analytical mind that can navigate obstacles on the fly in a logical and rational way. Engage in precise , data and details about the business</li>
                <li class="jobs-listing">You are an excellent and influential communicator and use data to reinforce your positions and decisions.</li>
                <li class="jobs-listing">Successfully executed operations, preferably with P&L ownership, is a plus.</li>
                <li class="jobs-listing">You are highly competitive and have a unique drive to win.</li>
            </ul>
            <p class="job-desc-head">BENEFITS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient / Outpatient / Dental / Optical.</li>
                <li class="jobs-listing">Flexible vacation</li>
                <li class="jobs-listing">All Risk Insurance</li>
                <li class="jobs-listing">Opportunity for company stock options</li>
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
    parentName: 'OperationsAssociateUG',
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
    mixpanel.track("Operations Associate Uganda Page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
