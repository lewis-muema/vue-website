<template>
    <div class="data-analyst">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">Data Analyst</p><br>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and businesses to connect with Drivers and request on-demand or scheduled package delivery services anytime, any day, 24/7.<br><br>
                                    We're looking for a Data Analyst hero to collect, process and visualize data to make the right decisions that enable us to grow.</p><br>
            <p class="job-desc-head">RESPONSIBILITIES</p><br>
            <ul class="job-desc-par">
                <li class="jobs-listing">Extensive knowledge about how databases work.</li>
                <li class="jobs-listing">Collect and process data that shine light on the hidden.</li>
                <li class="jobs-listing">Interpret those data to get actionable insights.</li>
                <li class="jobs-listing">Data-munging - Prepare and shape all those numbers.</li>
                <li class="jobs-listing">Visualize the learnings with Tableau and others.</li>
                <li class="jobs-listing">Perform statistical analysis of business data</li>
                <li class="jobs-listing">Run experiments and gather data to evaluate the success.</li>
            </ul><br>
            <p class="job-desc-head">QUALIFICATIONS</p><br>
            <ul class="job-desc-par">
                <li class="jobs-listing">Master’s degree (or higher) in data science, math, statistics, computer science or similar preferred.</li>
                <li class="jobs-listing">4+ years experience in data science, statistics, math or computer science.</li>
                <li class="jobs-listing">Fluent in R, SQL, NOSQL, Python</li>
                <li class="jobs-listing">Results-driven with exceptional detail and knowledge around metrics, specifically A/B testing and ROI analysis.</li>
                <li class="jobs-listing">Familiar with google analytics, mixpanel and other digital data analysis tools.</li>
                <li class="jobs-listing">Fluency in English.</li>
                <li class="jobs-listing">Ability to get shit done, with quality and speed.</li>
                <li class="jobs-listing">Expert multi-tasker.</li>
                <li class="jobs-listing">Great with long to-do lists full of micro-tasks</li>
                <li class="jobs-listing">Exceptional attention to detail and high quality deliverable outputs.</li>
                <li class="jobs-listing">Ability to deal with ambiguity and make sense of multiple data sources that may sometimes be contradictory in nature.</li>
                <li class="jobs-listing">Ability to effectively communicate timelines and project progress with both internal and external management teams.</li>
                <li class="jobs-listing">Ability to take ownership and accountability of project timeline and results</li>
                <li class="jobs-listing">A start-up personality; entrepreneurial, ambitious, independent, systematic attention to detail, structured thinker, goal-oriented, flexible and able to deal well with setbacks.</li>
            </ul><br>
            <p class="job-desc-head">BENEFITS</p><br>
            <ul class="job-desc-par">
                <li class="jobs-listing">Medical insurance.</li>
                <li class="jobs-listing">Education stipend - 40,000kes annually.</li>
                <li class="jobs-listing">Office lunch.</li>
                <li class="jobs-listing">Delivery credit - 1,500kes monthly.</li>
                <li class="jobs-listing">Opportunity for company stock options.</li>
                <li class="jobs-listing">Asset insurance on personal and company items.</li>
                <li class="jobs-listing">Sendy swag!</li>
            </ul><br>
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
    parentName: 'DataAnalyst',
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
