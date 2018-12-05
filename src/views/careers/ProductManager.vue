<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">PRODUCT MANAGER</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy we are on a mission to solve this problem - We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br>
                                    We're looking for someone Product obsessed, optimizing features for a first class user experience, Team Development, Product Vision, Execution, and Product Culture and grow Sendy into a global technology business.<br>
                                    We believe in end-to-end ownership of projects. For any given project, we have one person on point. While they don't necessarily have to do all the work themselves, it's their job to make sure all the work gets done. We launch betas and prototypes as early as we can this helps ensure that we're building what users actually want.<br>
                                    We have a Trello board and release a few times a week. We keep the team in sync with daily stand-ups and have a retrospective once a month to discuss things that are going well and opportunities for improvements. Although we have strong opinions, we're never afraid to try to new things to see if they work and reconsider our positions if the situation warrants it.
            </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;Focus on customers, champion customers understand their needs and double up when they are delighted.</li>
                <li class="jobs-listing">&nbsp;Provide &rsquo;voice of the customer&rsquo; to cross-functional teams, such as engineering, operations, sales, marketing, growth, and support to grow customer retention (engagement, adoption, and expansion)</li>
            </ul>
            <p class="job-desc-par">Continuously learn</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;Deep immersion in product analytics data in order to understand strengths and weaknesses of product and make recommendations for iteration.</li>
                <li class="jobs-listing">&nbsp;Analyze and optimize the quality and efficiency of Sendy’s services.</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;Work with the team to develop new product and feature ideas; refine and enhance existing features; and prioritize features for development according to business priorities.</li>
                <li class="jobs-listing">&nbsp;Collaborate with Engineering to develop architecture and specific development tasks</li>
                <li class="jobs-listing">&nbsp;Coordinate with UX and marketing team to understand opportunities to drive product awareness and adoption.</li>
                <li class="jobs-listing">&nbsp;Develop product support documentation in conjunction with Customer Support.</li>
                <li class="jobs-listing">&nbsp;Work with 3rd parties on various types of collaboration and service integration.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;Ensure transparent communication with all our partners, customers from terms and conditions to updates when things break.</li>
                <li class="jobs-listing">&nbsp;Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
                <li class="jobs-listing">&nbsp;Communicate product mission and vision across the organization, collaborate with the engineering team and user design teams to develop detailed product roadmap.</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;Develop various ad-hoc models and product analyses to support key business decisions.</li>
                <li class="jobs-listing">&nbsp;Be a Hustler and get your hands dirty and do the gritty work that comes along with the higher-level thinking.</li>
            </ul>
            <p class="job-desc-par">Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;Aim to design and implement processes and procedures with simplicity in mind.</li>
                <li class="jobs-listing">&nbsp;Your output is not only a pleasure for partners/drivers to use, but for other members of the team to read and understand easily.</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">&nbsp;3+ years of product management or engineering experience.</li>
                <li class="jobs-listing">&nbsp;Bachelors or Master's degree in Computer Science, engineering/quantitative or related field</li>
                <li class="jobs-listing">&nbsp;Extensive work with user-centered design processes, using data, analytics, and research to drive product insights and feature development.</li>
                <li class="jobs-listing">&nbsp;You are a Hustler and have no problem getting your hands dirty and doing the gritty work that comes along with the higher-level thinking. You thrive in a fast-paced environment.</li>
                <li class="jobs-listing">&nbsp;Problem-solver: analytical mind that can navigate obstacles on the fly in a logical and rational way. Engage in precise , data and details about the business.</li>
                <li class="jobs-listing">&nbsp;You are an excellent and influential communicator and use data to reinforce your positions and decisions</li>
                <li class="jobs-listing">&nbsp;&nbsp;You are highly competitive and has a unique drive to win</li>
            </ul>
            <p class="job-desc-head">Benefits</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient / Outpatient / Dental / Optical.</li>
                <li class="jobs-listing">Flexible vacation.</li>
                <li class="jobs-listing">All Risk Insurance.</li>
                <li class="jobs-listing">Opportunity for company stock options.</li>
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
    parentName: 'ProductManager',
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
