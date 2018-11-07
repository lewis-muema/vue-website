<template>
    <div class="data-analyst">
        <Upper/>
        <div class="job-desc">
            <p class="job-desc-head">Data Analyst</p><br>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and businesses to connect with Drivers and request on-demand or scheduled package delivery services anytime, any day, 24/7.<br><br>
                                    We're looking for a Data Analyst hero to collect, process and visualize data to make the right decisions that enable us to grow.</p><br>
            <p class="job-desc-head">RESPONSIBILITIES</p><br>
            <ul class="job-desc-par">
                <li id="jobs-listing">Extensive knowledge about how databases work.</li>
                <li id="jobs-listing">Collect and process data that shine light on the hidden.</li>
                <li id="jobs-listing">Interpret those data to get actionable insights.</li>
                <li id="jobs-listing">Data-munging - Prepare and shape all those numbers.</li>
                <li id="jobs-listing">Visualize the learnings with Tableau and others.</li>
                <li id="jobs-listing">Perform statistical analysis of business data</li>
                <li id="jobs-listing">Run experiments and gather data to evaluate the success.</li>
            </ul><br>
            <p class="job-desc-head">QUALIFICATIONS</p><br>
            <ul class="job-desc-par">
                <li id="jobs-listing">Master’s degree (or higher) in data science, math, statistics, computer science or similar preferred.</li>
                <li id="jobs-listing">4+ years experience in data science, statistics, math or computer science.</li>
                <li id="jobs-listing">Fluent in R, SQL, NOSQL, Python</li>
                <li id="jobs-listing">Results-driven with exceptional detail and knowledge around metrics, specifically A/B testing and ROI analysis.</li>
                <li id="jobs-listing">Familiar with google analytics, mixpanel and other digital data analysis tools.</li>
                <li id="jobs-listing">Fluency in English.</li>
                <li id="jobs-listing">Ability to get shit done, with quality and speed.</li>
                <li id="jobs-listing">Expert multi-tasker.</li>
                <li id="jobs-listing">Great with long to-do lists full of micro-tasks</li>
                <li id="jobs-listing">Exceptional attention to detail and high quality deliverable outputs.</li>
                <li id="jobs-listing">Ability to deal with ambiguity and make sense of multiple data sources that may sometimes be contradictory in nature.</li>
                <li id="jobs-listing">Ability to effectively communicate timelines and project progress with both internal and external management teams.</li>
                <li id="jobs-listing">Ability to take ownership and accountability of project timeline and results</li>
                <li id="jobs-listing">A start-up personality; entrepreneurial, ambitious, independent, systematic attention to detail, structured thinker, goal-oriented, flexible and able to deal well with setbacks.</li>
            </ul><br>
            <p class="job-desc-head">BENEFITS</p><br>
            <ul class="job-desc-par">
                <li id="jobs-listing">Medical insurance.</li>
                <li id="jobs-listing">Education stipend - 40,000kes annually.</li>
                <li id="jobs-listing">Office lunch.</li>
                <li id="jobs-listing">Delivery credit - 1,500kes monthly.</li>
                <li id="jobs-listing">Opportunity for company stock options.</li>
                <li id="jobs-listing">Asset insurance on personal and company items.</li>
                <li id="jobs-listing">Sendy swag!</li>
            </ul><br>
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
    parentName: 'DataAnalyst',
    windowWidth: null
    
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
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
    },
    redirect(){
        window.location = "http://www.sendy.co.ke"
    }
}
}
</script>

<style>

</style>
