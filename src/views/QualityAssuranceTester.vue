<template>
    <div class="quality-assurance-tester">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">QUALITY ASSURANCE TESTER</p><br>
            <p class="job-desc-par">We are looking for a QA Tester to assess software quality through manual and automated testing. In this role, you should have a keen eye for detail and excellent communication skills. If you are also competent in executing test cases and are passionate about quality, we’d like to meet you.</p><br>
            <p class="job-desc-head">RESPONSIBILITIES</p><br>
            <ul class="job-desc-par">
                <li class="jobs-listing">Review and analyze system specifications.</li>
                <li class="jobs-listing">Develop an end-to-end test plan.</li>
                <li class="jobs-listing">Execute test cases (manual or automated) and analyze results in terms of functionality, performance, reliability, stability and compatibility with other external systems</li>
                <li class="jobs-listing">Evaluate product code according to specifications.</li>
                <li class="jobs-listing">Create logs to document testing phases and defects.</li>
                <li class="jobs-listing">Report bugs and errors to development teams.</li>
                <li class="jobs-listing">Help troubleshoot issues</li>
                <li class="jobs-listing">Conduct post-release/ post-implementation testing.</li>
                <li class="jobs-listing">Work with cross-functional teams to ensure quality throughout the software development life cycle.</li>
            </ul><br>
            <p class="job-desc-head">QUALIFICATIONS</p><br>
            <ul class="job-desc-par">
                <li class="jobs-listing">Knowledge and experience in technical aspects of software solution being tested.</li>
                <li class="jobs-listing">BSc/BA in Computer Science, Engineering or a related field.</li>
                <li class="jobs-listing">Ability to document and troubleshoot errors.</li>
                <li class="jobs-listing">Proven work experience in software development.</li>
                <li class="jobs-listing">Proven work experience in software quality assurance.</li>
                <li class="jobs-listing">Strong knowledge of software QA methodologies, tools and processes.</li>
                <li class="jobs-listing">Experience in writing clear, concise and comprehensive test plans and test cases.</li>
                <li class="jobs-listing">Hands-on experience with both white box and black box testing.</li>
                <li class="jobs-listing">Hands-on experience with automated testing tools.</li>
                <li class="jobs-listing">Solid knowledge of SQL and scripting.</li>
                <li class="jobs-listing">Experience working in an Agile/Scrum development process.</li>
                <li class="jobs-listing">Experience with performance and/or security testing is a plus.</li>
                <li class="jobs-listing">Excellent communication skills (written and verbal).</li>
                <li class="jobs-listing">Creative solving technical skills.</li>
                <li class="jobs-listing">Attention to detail.</li>
                <li class="jobs-listing">Analytical mind.</li>
                <li class="jobs-listing">Strong organizational skills.</li>
            </ul><br>
            <p class="job-desc-head">BENEFITS</p><br>
            <ul class="job-desc-par">
                <li class="jobs-listing">Health & dental/optical - we cover your health/dental/optical and maternity insurance.</li>
                <li class="jobs-listing">Flexible vacation - take time off when you need it, we trust you.</li>
                <li class="jobs-listing">Great tools - each engineer needs a Mac laptop and a killer internet connection, so we'll get you what you need.</li>
                <li class="jobs-listing">Professional development - everyone gets a stipend they can use to become better at their craft.</li>
                <li class="jobs-listing">All Risk Insurance - on any personal items which you choose to use for work valued over 15,000kes each - aka Computer, Tablet, and/or Phone.</li>
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
    parentName: 'QualityAssuranceTester',
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
