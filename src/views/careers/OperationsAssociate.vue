<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">OPERATIONS ASSOCIATE</p><br>
            <p class="job-desc-par">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
                                    We are looking for a smart, hard-working Operations Associate to grow our truck partners! In this role, you will work with all aspects of truck partners and driver applications from applying to be a partner to giving the first trip. You will acquire new truck partners, troubleshooting applications, operationalizing common issues and ensuring that all partner KYC are met.
            </p><br>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Utilize internal tools to take prospective truck owners and drivers from application to their first order/trip on the platform.</li>
                <li class="jobs-listing">Focus on truck partners and drivers, champion and understand their needs and doubleup when they are delighted.</li>
            </ul><br>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Work closely with Marketing teams and other members of the Operations team to ensure partner leads are converted and the first trip for the partner is achieved.</li>
                <li class="jobs-listing">Maintain and build relationships with truck owners and drivers.</li>
            </ul><br>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Provide support to applicants through SMS, email, and phone – you're willing to do whatever it takes to get a resolution.</li>
            </ul><br>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Continuously train drivers. - Well trained drivers are the key to an excellent customer experience. You will look at ways to improve our driver training process at scale.</li>
                <li class="jobs-listing">Your output is not only a pleasure for partners/drivers to use, but for other members ofthe team to read and understand easily.</li>
            </ul><br>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our partners, customers from terms and conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul><br>
            <p class="job-desc-head">QUALIFICATIONS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">1+ years of experience in Operations or Sales at a growing business</li>
                <li class="jobs-listing">Problem-solver: analytical mind that can navigate obstacles on the fly in a logical andrational way. Engage in ​precise​, data and details about the business.</li>
                <li class="jobs-listing">Bachelor’s degree in Economics, Mathematics, Operations Management, Commerce, Business or related field.</li>
                <li class="jobs-listing">Excellent, clear verbal and written communication skills -  - English & Kiswahili.</li>
                <li class="jobs-listing">Understanding startup speed and working environment.</li>
                <li class="jobs-listing">You are a Hustler and have no problem getting your hands dirty and doing the grittywork that comes along with the higher-level thinking. You thrive in a fast-paced environment</li>
            </ul><br>
            <p class="job-desc-head">BENEFITS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient / Outpatient / Dental / Optical.</li>
                <li class="jobs-listing">Flexible vacation.</li>
                <li class="jobs-listing">All Risk Insurance.</li>
                <li class="jobs-listing">Opportunity for company stock options.</li>
            </ul><br>
            <!--<p class="job-desc-head">MORE ON SENDY</p><br>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br><br>
            Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.</p><br>-->
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
    parentName: 'OperationsAssociate',
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
