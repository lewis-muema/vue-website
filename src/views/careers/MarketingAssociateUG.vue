<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">MARKETING ASSOCIATE UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
                                    We’re looking for a Marketing Associate superstar to help lead and define our marketing initiatives. This role is about building the Sendy brand locally.
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Strategize and execute an active and engaging social media plan across multiple platforms: Twitter, Facebook, LinkedIn, etc. and ensure consistent brand messaging across all channels.</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Collaborate with leadership and external agencies to develop key messaging and specific advertising copy/design/packaging for campaigns across marketing channels.</li>
                <li class="jobs-listing">Identify and plan relevant brand events to increase brand trial and usage.</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">A start-up personality; entrepreneurial, ambitious, independent, systematic attention to detail, structured thinker, goal-oriented, flexible and able to deal well with setbacks.</li>
            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Collect and analyse market data as well as competitor analysis.</li>
                <li class="jobs-listing">Assesses delivery and performance of each marketing campaign on a daily, weekly and monthly basis</li>
                <li class="jobs-listing">Develop and execute effective online and offline marketing strategies and tests that deliver against Return on Investment (ROI) targets.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our partners, customers from terms and conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Degree in Business Administration, Economics, Marketing, Sales, Advertising or similar preferred</li>
                <li class="jobs-listing">3+ years experience Marketing and Brand management</li>
                <li class="jobs-listing">Public Relations and Event Planning experience is a plus</li>
                <li class="jobs-listing">Excellent written communication skills</li>
                <li class="jobs-listing">Active online presence and familiarity with social media channels (Twitter, LinkedIn, Facebook, Wordpress, Instagram, Mailchimp)</li>
                <li class="jobs-listing">Results-driven with exceptional detail and knowledge around Key performance metrics</li>
                <li class="jobs-listing">Familiar with google analytics and other digital data analysis tools</li>
                <li class="jobs-listing">Ability to not just think on your feet, but to think while running</li>
                <li class="jobs-listing">Expert multi-tasker</li>
                <li class="jobs-listing">Exceptional attention to detail and high quality deliverable outputs</li>
                <li class="jobs-listing">Ability to take ownership and accountability of project timeline and results</li>
            </ul>
            <p class="job-desc-head">WHAT WE OFFER</p>
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
    parentName: 'MarketingAssociateUG',
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
    mixpanel.track("Marketing Associate Uganda Page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
