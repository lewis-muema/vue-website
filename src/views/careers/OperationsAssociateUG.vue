<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">OPERATIONS ASSOCIATE UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
                                    The Operations Associate will be responsible for Partner identification, recruitment, training/onboarding, retention and engagement. We are looking for a leader that can promote the Sendy brand through efficient Partners and grow Sendy into a leading regional courier business.
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Focus on the partners, champion and understand their needs and double up when they are delighted.</li>
                <li class="jobs-listing">Provide ‘voice of the partners’ to cross-functional teams, such as engineering, sales, marketing, growth and support to grow partner retention (engagement, adoption and expansion).</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Liaise with the Marketing department to ensure Sendy Partners are clean and well branded.</li>
                <li class="jobs-listing">Evaluate merchandise suppliers to achieve cost effective deals and maintain trust in relationships.</li>
                <li class="jobs-listing">Ensure sufficient active Partner availability as well as setup a Partner pipeline across all vendor types.</li>
                <li class="jobs-listing">Management of Partner merchandise inventory.</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Provide support to partners – you're willing to do whatever it takes to get a resolution.</li>
                <li class="jobs-listing">Identify key Partner issues and offering creative and effective solutions.</li>
                <li class="jobs-listing">Meet daily, weekly and monthly targets set by management.</li>
            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Continuously train drivers - Well trained drivers are the key to an excellent customer experience. You will look at ways of improving our driver training process</li>
                <li class="jobs-listing">Device ways of inventory supply and control procedures and analyze data to anticipate future needs.</li>
                <li class="jobs-listing">Strategize on ways of improving Sendy’s recruitment and training models.</li>
                <li class="jobs-listing">Partner recruitment, training and onboarding.</li>
                <li class="jobs-listing">Monitor and assess Partner performance and metrics to ascertain effectiveness of recruitment, training and onboarding process.</li>
                <li class="jobs-listing">Maintaining all Partner records.</li>
                <li class="jobs-listing">Your output is not only a pleasure for the partners, but for other members of the team to read and understand easily</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our customers and team members from the terms of conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-par">KPIs</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Partner Ratings</li>
                <li class="jobs-listing">Dispatch Ratings</li>
                <li class="jobs-listing">Active Partners</li>
                <li class="jobs-listing">Retention Rate</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Bachelor's degree</li>
                <li class="jobs-listing">Excellent computer skills and proficient in excel, word, google docs, etc.</li>
                <li class="jobs-listing">Excellent communication skills both verbal and written - English & Kiswahili.</li>
                <li class="jobs-listing">Demonstrated leadership and vision in managing major projects or initiatives</li>
                <li class="jobs-listing">Team player</li>
                <li class="jobs-listing">Ability to work without supervision</li>
                <li class="jobs-listing">Comfortable operating in a fast paced, deadline-driven environment</li>
                <li class="jobs-listing">Excellent people manager, with collaborative work style and commitment to getting the job done</li>
                <li class="jobs-listing">Ability to challenge and debate issues of importance to the organization</li>
                <li class="jobs-listing">Background in logistics</li>
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
