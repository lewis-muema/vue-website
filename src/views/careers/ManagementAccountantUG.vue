<template>
    <div class="marketing-accountant-ug">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-head">MANAGEMENT ACCOUNTANT UGANDA</p>
            <p class="jobs-listing">Logistics in Africa is broken! It’s super fragmented, informal and very costly, making it difficult for small business to trade in Africa. At Sendy, we are on a mission to solve this problem. We have built the first efficient shared logistics platform for Africa that will create new possibilities for small businesses and transporters.<br><br>
                                    This role entails overseeing the all accounting procedures, and project management of financial forecasts, budgets, audits, and assist senior management in analyzing and presenting key financial data.<br><br>
                                    </p>
            <p class="job-desc-head">ABOUT THE ROLE</p>
            <p class="job-desc-par">Obsess about the customer</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Review Partner accounts for accuracy and prompt payments.</li>
                <li class="jobs-listing">Prepare monthly reconciliations of cash, key general ledger accounts, and major customer accounts. Preemptively sort contested statements.</li>
            </ul>
            <p class="job-desc-par">Grow together</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Support on investor reporting metrics - prepare accurate, reliable monthly reports on the company’s financial performance for management/board meetings and issue financial analysis of the financial statements.</li>
            </ul>
            <p class="job-desc-par">Be flexible</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Coordinate with Sales and Operations team to close new Merchant Agreements, Client Receivables, Partner payments, and Partner loans.</li>
                <li class="jobs-listing">Lead the annual audit.</li>
            </ul>
            <p class="job-desc-par">Continuously learn and Simplify processes</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Increase turnaround times on client invoicing.</li>
                <li class="jobs-listing">Post and review all invoiced income transactions and other non-cash transactions; post all bank transactions.</li>
                <li class="jobs-listing">Create internal controls to safeguard the company’s assets and resources.</li>
                <li class="jobs-listing">Implement new financial tools to ensure efficient delivery of services.</li>
                <li class="jobs-listing">Streamline recurring monthly processes on postings, payroll, and taxes.</li>
            </ul>
            <p class="job-desc-par">Be open</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Ensure transparent communication with all our customers and team members from the terms of conditions to updates when things break.</li>
                <li class="jobs-listing">Drive a culture of being transparent within your team and the rest of the Sendy team.</li>
            </ul>
            <p class="job-desc-head">QUALIFICATIONS</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Bachelor's degree - Business Administration and/or Commerce - specializations in Finance or Accounting.</li>
                <li class="jobs-listing">Is a Certified Public Accountant of Kenya.</li>
                <li class="jobs-listing">Experience with different accounting systems including Quickbooks and Xero.</li>
                <li class="jobs-listing">Excellent computer skills, specifically Excel.</li>
                <li class="jobs-listing">Comfortable operating in a fast-paced, deadline  driven environment.</li>
            </ul>
            <p class="job-desc-head">WHAT WE OFFER</p>
            <ul class="job-desc-par">
                <li class="jobs-listing">Comprehensive Health Insurance - Inpatient, Outpatient, Optical, Dental.</li>
                <li class="jobs-listing">Phone & computer</li>
                <li class="jobs-listing">Office lunch</li>
                <li class="jobs-listing">Education stipend</li>
            </ul>
            <!--<p class="job-desc-head">MORE ON SENDY</p><br>
            <p class="job-desc-par"><a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br><br>
            Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.</p><br>-->
            <p class="job-desc-head">APPLY</p>
            <p class="jobs-listing">Please forward your CV and quick summary (one paragraph) on why you’re interested in the position to <a href="mailto:jobs@sendy.co.ke" target="_blank" class="color-blue">jobs@sendy.co.ke.</a></p>
            
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
    mixpanel.track("Marketing Associate UG page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
