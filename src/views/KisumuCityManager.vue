<template>
    <div class="kisumu-city-manager">
        <Upper/>
        <div class="job-desc">
            <p class="job-desc-head">KISUMU CITY MANAGER</p><br>
            <p class="job-desc-par">The City Manager role is for the independent ambitious generalist. A City Manager sits overs Sales, Marketing, Operations, and Finance, with city wide KPIs, Budget and P&L. City Manager reports directly to the CEO and is responsible for all Investor Reports concerning the city.</p><br>
            <p class="job-desc-head">General Customer Acquisition</p>
            <p class="job-desc-par">Have full ownership of the business development vertical in Kisumu. Close deals, manage a budget, lead business marketing activities, scale strategy locally, and build/ lead a team.</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Own and lead overarching customer acquisition strategy.</li>
                <li id="jobs-listing">Manage deal pipeline and source new potential business deals by contacting potential partners; discovering and exploring opportunities.</li>
                <li id="jobs-listing">Help develop and improve products and services by researching industry competitors, publications, and announcements.</li>
                <li id="jobs-listing">Support marketing activities for Sendy including golf tournaments, mall promotions, networking drinks, door ­to ­door sales, business fairs, etc.</li>
                <li id="jobs-listing">Spearhead B2C marketing strategies and coordinate actions to influence the market.</li>
                <li id="jobs-listing">Manage Partnership Proposals and maintain the timelines for the proposal drafting process.</li>
                <li id="jobs-listing">Communicate new product developments to clients and prospective clients.</li>
            </ul><br>
            <p class="job-desc-head">Business Clients</p>
            <p class="job-desc-par">Strategize and lead all business client acquisition activities. Take full ownership and responsibility of finding, negotiating, and closing business deals In Kisumu.</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Develop strategy for acquiring traditional business clients in Kisumu.</li>
                <li id="jobs-listing">Lead all Business Client acquisitions. Bring in the expansion team to negotiations only on very unique cases.</li>
                <li id="jobs-listing">Follow up on all business leads which come into Sendy and set up meetings.</li>
                <li id="jobs-listing">Oversee and carry out all business client acquisition activities.</li>
                <li id="jobs-listing">Plan and prepare business presentations and proposals.</li>
            </ul><br> 
            <p class="job-desc-head">Partner (Rider & Driver) Recruitment</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Requires strong interpersonal skills and a social personality. This person will be responsible for managing the rider operations in the city as well as acquisition, including field prospecting to meet and engage new riders/drivers.</li>
                <li id="jobs-listing">Sourcing, recruiting, onboarding and training of partners on to the platform.</li>
                <li id="jobs-listing">Work side-by-side with the operations team to maintain an adequate number of online riders/drivers in Kisumu.</li>
                <li id="jobs-listing">Maintain onboarding pipeline and database of all riders/drivers and contracts.</li>
                <li id="jobs-listing">Gathering key rider documentation and requirements in line with Sendy’s signup policies.</li>
                <li id="jobs-listing">Following up on inquiries and referrals from riders/drivers.</li>
            </ul><br> 
            <p class="job-desc-head">Operations and Dispatch Management</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Responsible for dispatch and monitoring of orders real time and resolving issues in a timely manner to ensure optimal customer experience.</li>
                <li id="jobs-listing">Sourcing, recruiting, onboarding and training of partners on to the platform.</li>
                <li id="jobs-listing">Continual training and support for existing riders on the Sendy platform.</li>
                <li id="jobs-listing">Monitoring standards and customer service levels, ensuring partners represent the brand well.</li>
                <li id="jobs-listing">Monitoring partner metrics including daily and monthly targets set by management.</li>
                <li id="jobs-listing">Identifying key partner issues and offering creative and effective solutions in a timely manner.</li>
                <li id="jobs-listing">Branch management and expansion.</li>
                <li id="jobs-listing">Any other duty that may be assigned by CEO or senior management.</li>
            </ul><br> 
            <p class="job-desc-head">KPI reporting and line management</p>
            <ul class="job-desc-par">
                <li id="jobs-listing">Responsible for monthly reporting, setting and meeting Profit & Loss targets and qualitative objectives, as well as ad-hoc requests to Nairobi HQ.</li>
                <li id="jobs-listing">Performance evaluation and management of Kisumu Business Development and Operations colleagues.</li>
                <li id="jobs-listing">Daily monitoring and recording of targets set by management.</li>
                <li id="jobs-listing">Investor reporting on all Kisumu initiatives, metrics, and costs.</li>
                <li id="jobs-listing">Management of city team: Operations, Sales, Marketing.</li>
            </ul><br> 
            <p class="job-desc-head">Qualifications</p><br>
            <ul class="job-desc-par">
                <li id="jobs-listing">Bachelor Degree in Business, Sales, or Economics. Masters or MBA strongly prefered.</li>
                <li id="jobs-listing">Advance knowledge in Google Suite and preparing presentations.</li>
                <li id="jobs-listing">Financial modeling.</li>
                <li id="jobs-listing">Demonstrated success in negotiating, cultivating and growing partnerships across all levels and sectors, problem solving and issue resolution.</li>
                <li id="jobs-listing">7+ years management experience in Logistics, e-commerce, entrepreneurial or related industry.</li>
                <li id="jobs-listing">Cross-functional team management and successful KPI performance viewed favourably.</li>
                <li id="jobs-listing">Outstanding communication skills, oral and written, technical and non­ technical.</li>
                <li id="jobs-listing">Excellent team player with strong leadership capability.</li>
                <li id="jobs-listing">Clear knowledge of Kisumu and its environment.</li>
                <li id="jobs-listing">Must be comfortable in fast-paced, deadline-driven environment.</li>
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
    parentName: 'KisumuCityManager',
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
