<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">JUNIOR SUPPORT MANAGER UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
            This role is key in helping build the Sendy brand and delivering outstanding customer support. Sendy thrives on delivering top of the market service to both our Customers and Partners. We're a game-changing startup, providing quality, on-demand package deliveries, 24/7 and we’re looking for a Support Experience superstar to help with our support efforts and team strategy.<br>
            If you’re looking to make a real impact in your work then we want to hear from you!
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Focus on the customers, champion and understand their needs and double up when they are delighted.</li>
                <li class="jobs-listing">Provide ‘voice of the customers and partners’ to cross-functional teams, such as engineering, sales, marketing, growth and Operations to grow partner and customer retention (engagement, adoption and expansion).</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Work closely with our Operations and Product Development teams to identify customer demands and pain points.</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Provide support to Customers and partners – you're willing to do whatever it takes to get a resolution.</li>
                <li class="jobs-listing">Monitor social media platforms and report to all queries within minutes.</li>

            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Manage all Customer & Partner concerns to ensure excellent customer experience.</li>
                <li class="jobs-listing">Analyze statistics and compile accurate reports.</li>
                <li class="jobs-listing">You’ll work towards your own targets as well as team goals to ensure continuous growth.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our customers and partners from the terms of conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-par">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Bachelor's degree</li>
                <li class="jobs-listing">Strong Microsoft Office skills are essential (especially Excel).</li>
                <li class="jobs-listing">Ability to read and analyse the numbers.</li>
                <li class="jobs-listing">Fluency in English.</li>
                <li class="jobs-listing">Previous customer service experience is a plus.</li>
                <li class="jobs-listing">Meticulous punctuation and grammar.</li>
                <li class="jobs-listing">Ability to communicate at all levels with internal/external clients by phone, live chat, social media channels, and email.</li>
                <li class="jobs-listing">Expert multi-tasker.</li>
                <li class="jobs-listing">Flexible working schedule, ability to hold down the fort at night and weekends.</li>
                <li class="jobs-listing">Your desire to learn in a fast-paced startup environment is boundless.</li>
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
    parentName: 'JRsupport',
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
