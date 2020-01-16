<template>
  <div class="head-of-finance">
    <Upper />
    <div class="job-desc" :style="{ marginLeft: newLeft + '%', marginRight: newLeft + '%' }">
      <p class="job-desc-head">HEAD OF FINANCE & ACCOUNTING</p>
      <br />
      <p class="job-desc-par">This individual will be in charge of accounting, budgeting, forecasting, tax strategy and investor relations. As an early member of the management team, this individual will be involved in key strategic decision-making for the company.</p>
      <br />
      <p class="job-desc-head">RESPONSIBILITIES</p>
      <br />
      <p class="job-desc-head">Strategic Modeling & Reporting</p>
      <ul class="job-desc-par">
        <li class="jobs-listing">Manage a comprehensive financial model and leverage for ongoing business strategy discussions.</li>
        <li class="jobs-listing">Develop various ad-hoc models and financial analyses to support key business decisions.</li>
        <li class="jobs-listing">Provide regular reporting and analysis to leadership, board members, and investors as needed</li>
        <li class="jobs-listing">Work with senior management to evaluate the revenue, profit and value creation potential of product conversion and new product introduction.</li>
        <li class="jobs-listing">Work with insurance providers and banks to build products tailored for our Drivers.</li>
      </ul>
      <br />
      <p class="job-desc-head">Accounting</p>
      <ul class="job-desc-par">
        <li class="jobs-listing">Grow and mentor an Accounting Team.</li>
        <li class="jobs-listing">Complete monthly / quarterly budget vs. actual variance analysis and drive accountability.</li>
        <li class="jobs-listing">Oversee all accounting activities including general ledger, AR/AP, cash reconciliation and month end close.</li>
        <li class="jobs-listing">Comply with local, state, and federal government reporting requirements and tax filings.</li>
        <li class="jobs-listing">Understand all necessary tax filings so that minimal outside tax engagement is necessary.</li>
      </ul>
      <br />
      <p class="job-desc-head">Financial Management</p>
      <ul class="job-desc-par">
        <li class="jobs-listing">Grow and mentor the Finance Team.</li>
        <li class="jobs-listing">Develop and own Sendy’s financial processes and strategies.</li>
        <li class="jobs-listing">Drive the quarterly / annual budgeting and planning process, as well as long-range financial planning.</li>
        <li class="jobs-listing">Coordinate regular budget setting processes and reviews with each Head of Department.</li>
        <li class="jobs-listing">Work closely with Sales and Marketing to maintain a detailed understanding of the pipeline and report variances to previous plans.</li>
        <li class="jobs-listing">Providing leadership with recommendations and guidance on the financial impact of various products, pricing strategies, and initiatives.</li>
        <li class="jobs-listing">Participate in special projects to improve reporting, analytical tools and internal processes to enhance management decision process.</li>
      </ul>
      <br />
      <p class="job-desc-head">QUALIFICATIONS</p>
      <br />
      <p class="job-desc-head">Basic Qualifications</p>
      <ul class="job-desc-par">
        <li class="jobs-listing">Bachelor's degree in Business Administration - Commerce, Finance or Accounting.</li>
        <li class="jobs-listing">8+ years of financial experience, some of which were in mid to senior level positions responsible for financial planning, analysis, and accounting.</li>
        <li class="jobs-listing">Experience with different accounting systems including Quickbooks and Xero.</li>
        <li class="jobs-listing">Comfortable operating in a fast paced, deadline driven, startup environment.</li>
        <li class="jobs-listing">Outstanding leadership and management skills and the ability to build teams from the ground up.</li>
        <li class="jobs-listing">Strong written and oral communication skills to communicate clearly across the organization and inspire confidence and buy-in to initiatives.</li>
        <li class="jobs-listing">Experienced in developing and presenting business plans, models, and financial forecasts to the Management and the investment community.</li>
        <li class="jobs-listing">Advanced Excel modeling skills - demonstrated financial analysis and modeling expertise.</li>
        <li class="jobs-listing">Strong accounting, corporate finance, budgeting, and cost control principles knowledge.</li>
      </ul>
      <br />
      <p class="job-desc-head">Preferred Qualifications</p>
      <ul class="job-desc-par">
        <li class="jobs-listing">Experienced in raising VC financing.</li>
        <li class="jobs-listing">Experience in an operational finance role, especially in a startup environment.</li>
        <li class="jobs-listing">Masters Degree in Finance, Accounting or Business with strong accounting experience.</li>
        <li class="jobs-listing">Five to 10 years’ experience in high level financial role.</li>
        <li class="jobs-listing">Certified Public Accountant of Kenya.</li>
      </ul>
      <br />
      <p class="job-desc-head">MORE ON SENDY</p>
      <br />
      <p class="job-desc-par">
        <a @click="redirect">Sendy</a> is THE delivery partner for moving packages in Kenya. Sendy provides an app and web platform that enables individuals and small businesses to connect with Riders and Drivers and request on-demand or scheduled courier services anytime, any day, 24/7.<br /><br />
        Partnership is the foundation of what we do. By partnering with Riders, Drivers, and Small Businesses, we empower individuals to grow their livelihood. We do this by building a platform that is Simple, Transparent, and User Centric.
      </p>
      <br />
      <p class="job-desc-head">APPLY</p>
      <br />
      <p class="job-desc-par">Please forward your CV to <a href="mailto:jobs@sendy.co.ke" target="_blank">jobs@sendy.co.ke.</a></p>
    </div>
    <Lower />
    <div class="kitenge-divider"></div>
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';
import Upper from '../Upper';
import Lower from '../Lower';

export default {
  components: {
    Upper,
    Lower,
  },
  data() {
    return {
      parentName: 'HeadOfFinance',
      windowWidth: null,
      newLeft: null,
    };
  },
  computed: {
    nameDisplayer() {
      return this.$store.state.parentName;
    },
  },
  created() {
    this.$store.commit({
      type: 'changeParentName',
      pName: this.parentName,
    });
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
      this.mixTrackPage();
    });
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
      const range = 2560 - this.windowWidth;
      const quotient = (range * 13.5) / 1536;
      if (window.innerWidth > 768) {
        this.newLeft = 19 - quotient;
      } else {
        this.newLeft = 19 - (quotient - 5);
      }
    },
    redirect() {
      window.location = 'http://www.sendy.co.ke';
    },
    mixTrackPage() {
      mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
      mixpanel.track('Head of Finance Page', {
        'landing page version': 'website',
      });
    },
  },
};
</script>

<style></style>
