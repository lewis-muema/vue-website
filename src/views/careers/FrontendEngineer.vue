<template>
    <div class="front-end-engineer">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">FRONTEND ENGINEER</p>
            <p class="jobs-listing">Frontend Engineers at Sendy build and own innovative web applications with a desire to achieve good design, usability, accessibility, performance, and mobile/responsive web pages.<br><br>
                                    We believe in end-to-end ownership of projects. For any given project, we have one person on point. While they don't necessarily have to do all the work themselves, it's their job to make sure all the work gets done. We launch betas and prototypes as early as we can this helps ensure that we're building what users actually want.<br><br>
                                    We have a sticky notes wall and release a few times a week. We keep the team in sync with daily stand-ups and have a retrospective once a month to discuss things that are going well and opportunities for improvements. Although we have strong opinions, we're never afraid to try to new things to see if they work and reconsider our positions if the situation warrants it.</p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Your first project involves working with two other engineers on our web applications. On a daily basis, you'll work on documentation, new endpoints, performance optimization and, of course, test cases.</li>
                <li class="jobs-listing">You'll be working with product people. Your leaders are technical and committed to creating a magical experience for customers. You'll deploy excellent work that moves the needle for people and businesses around the world.</li>
                <li class="jobs-listing">We'll surround you with people that love little details and bring out your best.</li>
            </ul>
            <p class="job-desc-head">ABOUT YOU</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">You became an engineer because you like writing software that helps people.</li>
                <li class="jobs-listing">You have a history of working on Javascript based Web projects at scale and can bring a high level of expertise to the business.</li>
                <li class="jobs-listing">Your code is not only a pleasure for customers to use, but for other engineers to read and understand easily.</li>
                <li class="jobs-listing">A big part of being great at your job revolves around being very organized and communicative.</li>
                <li class="jobs-listing">It's clear from your experience that you have those characteristics.</li>
            </ul>
            <p class="job-desc-head">RESPONSIBILITIES</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Designing and developing advanced Sendy applications for the Web platform.</li>
                <li class="jobs-listing">Work closely with our product and design teams to customize the Sendy experience for the Web platform.</li>
                <li class="jobs-listing">Ensure the technical feasibility of UI/UX designs.</li>
                <li class="jobs-listing">Build reusable code and libraries for future use.</li>
                <li class="jobs-listing">Unit-testing code for robustness, including edge cases, usability, and general reliability.</li>
                <li class="jobs-listing">Bug fixing and improving application performance.</li>
                <li class="jobs-listing">Help drive the feature roadmap of Sendy products on Web platform.</li>
                <li class="jobs-listing">Prototype new and redesign features.</li>
                <li class="jobs-listing">Help maintain code quality, organization, and automatization</li>
                <li class="jobs-listing">Help with the backend API design and implementation.</li>
            </ul>
            <p class="job-desc-head">BENEFITS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Health & dental/optical - we cover your health/dental/optical and maternity insurance.</li>
                <li class="jobs-listing">Flexible vacation - take time off when you need it, we trust you.</li>
                <li class="jobs-listing">Great tools - each engineer needs a Mac laptop and a killer internet connection, so we'll get you what you need.</li>
                <li class="jobs-listing">Professional development - everyone gets a stipend they can use to become better at their craft.</li>
                <li class="jobs-listing">All Risk Insurance - on any personal items which you choose to use for work valued over 15,000kes each - aka Computer, Tablet, and/or Phone.</li>
            </ul>
            <p class="job-desc-par"><br>You should include this in your application:<br></p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Links to any apps you've released in any App Store or libraries/projects you've written.</li>
                <li class="jobs-listing">Your favourite web framework and why you like it.</li>
                <li class="jobs-listing">Links to online profiles you use (GitHub, Twitter, etc).</li>
                <li class="jobs-listing">A description of your work history (whether as a resume, LinkedIn profile, or prose).</li>
            </ul>
            <p class="job-desc-head">MORE ON SENDY</p>
            <p class="jobs-listing"><a @click="redirect" class="color-blue"><u>Sendy</u></a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br><br>
            Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.</p>
            <p class="job-desc-head">HOW TO APPLY</p>
            <p class="jobs-listing">Please forward your CV to <a href="mailto:jobs@sendy.co.ke" target="_blank">jobs@sendy.co.ke.</a></p>
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
    parentName: 'FrontendEngineer',
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
    mixpanel.track("Front End Engineer Page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
