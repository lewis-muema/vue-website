<template>
    <div class="terms-of-service">
        <Upper/>
        <div class="job-desc" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%'}">
            <p class="job-desc-par light-bold">Privacy Notice for Drivers</p>
            <p class="job-desc-par light-bold">Last Updated: 22nd June 2018</p>
            <p class="job-desc-par">This Privacy Policy explains how Sendy collects, uses, shares and protects information about its partners. We also provide information regarding how you can access and update your information and how to use the personal information you encounter in your interaction with the Sendy web and mobile services users.</p>
            <p class="job-desc-par">The Privacy Policy is incorporated by reference into the applicable Partners Contract.</p>
            <p class="job-desc-par">We reserve the right to change or modify this Policy or any of our tools or services at any time.</p>
            <p class="job-desc-par">When we make material changes to this Policy, we will notify you by posting the updated Policy on our website, and we will update the effective date at the top of this Policy. By continuing to use any of our Websites after being notified of material changes to this Policy, you agree that the terms of this Policy as of the effective date will apply to information previously collected or collected in the future.</p>
            <p class="job-desc-par">The term "us" or "we" refers to the owner of the Sendy web and mobile platform, Sendy Limited, a private limited company, incorporated in the Republic of Kenya.</p>
            <Ol type="1" class="job-desc-par">
            <li class="jobs-listing light-bold">Personal data we process</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">Name, e-mail, phone number.</li>
            <li class="jobs-listing">Geolocation of drivers and driving routes.</li>
            <li class="jobs-listing">Information about vehicles (including registration number).</li>
            <li class="jobs-listing">Driver’s efficiency and ratings.</li>
            <li class="jobs-listing">Driver’s license, photo, profession and identification documents.</li>
            <li class="jobs-listing">Data about criminal convictions and offences. The financial data of providing transportation services is not considered as personal data, because drivers provide services in the course of economic and professional activities.</li>
            </ul>
            <li class="jobs-listing light-bold">Purposes of the processing</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">We collect and process personal data for the purpose of connecting customers and/or merchants with drivers to make deliveries through the Sendy mobile and web platforms.</li>
            <li class="jobs-listing">Geolocation and driving routes are processed to aalyze the geographical area and give suggestions to the drivers. if you do not want to disclose your geolocation for passengers, you must close the sendy application or indicate in the sendy application that you are offline and currently are not providing delivery services</li>
            <li class="jobs-listing">Driver’s license, profession, identity documents and criminal convictions and offences are processed to determine the compliance with the legal requirements and your suitability as a driver on the Sendy platform.</li>
            <li class="jobs-listing">The Sendy platform displays driver’s photo, name and vehicle details for the customers and/or Merchants to identify driver and vehicle.</li>
            <li class="jobs-listing">You will receive summaries from the Sendy Platform, which will include your efficiency and ratings as a driver. Summary and ratings about driver are necessary to provide a reliable services for passengers.</li>
            </ul>
            <li class="jobs-listing light-bold">Legal basis</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">Personal data is processed for the performance of the contract concluded with the driver. The prerequisite for the use of the Sendy services is the processing of driver's identification and geolocation data.</li>
            <li class="jobs-listing">Personal data may be processed on the ground of legitimate interest in investigating and detecting fraudulent payments.</li>
            <li class="jobs-listing">Data regarding the criminal convictions and offenses is processed for compliance with a legal obligation</li>
            </ul>
            <li class="jobs-listing light-bold">Recipients</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">Your personal data is only disclosed to customers and/or merchants, whose order has been accepted by you. Customers and/or merchants will see driver’s name, vehicle, phone number, photo and geolocation data. Customers and/or merchants also see driver’s personal data in the receipt.</li>
            <li class="jobs-listing">Processing of personal data by will occur under the same conditions as established in this privacy notice.</li>
            </ul>
            <li class="jobs-listing light-bold">Security and access</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">Any personal data collected in the course of providing services is transferred to, processed and stored in the Republic of Ireland. Only authorised partners and employees of Sendy have access to the personal data and they may access the data only for the purpose of resolving issues associated with the use of the services (including disputes regarding delivery services). Your Personal Information may be subject to access requests from governments, courts, or law enforcement in the Republic of Ireland according to their laws. By using the Services or providing us with any information, you consent to this transfer, processing and storage of your information in the Republic of Ireland.</li>
            </ul>
            <li class="jobs-listing light-bold">Processing passengers personal data</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">You may not process the personal data of passengers without the permission of us. You may not contact any passenger or collect, record, store, grant access, use or cross-use the personal data provided by the passenger or accessible to you via the Sendy platform for any reason other than for the purposes of fulfilling the delivery services.</li>
            <li class="jobs-listing">You must comply with the rules and conditions for processing of personal data of passengers as set forth in the Privacy Notice for Sendy users <router-link to="/privacy">(https://sendyit.com/privacy)</router-link>. If you violate the requirements for the processing of personal data of passengers, we may terminate your drivers account and claim damages from you.</li>
            </ul>
            <li class="jobs-listing light-bold">Access, correction, retention, deletion and data portability</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">Personal data can be viewed and corrected in Sendy Driver Platform.</li>
            <li class="jobs-listing">Your personal data will be stored as long as you have an active driver's account. If your account will be closed the personal data will be stored for additional 3 year period.</li>
            <li class="jobs-listing">Data necessary for accounting purposes shall be stored for 7 years.</li>
            <li class="jobs-listing">In the event of suspicions of administrational or criminal offence, fraud or false information, the data shall be stored for 10 years.</li>
            <li class="jobs-listing">In the event of disputes, the data shall be retained until the claim is satisfied or the expiry date of such claims.</li>
            <li class="jobs-listing">We respond to the request for deleting and transferring personal data submitted by an e-mail to <a href="mailto:support@sendy.co.ke">support@sendy.co.ke</a> where you may specify the period of data deletion and transfer.</li>
            </ul>
            <li class="jobs-listing light-bold">Dispute resolution</li>
            <ul class="job-desc-par">
            <li class="jobs-listing">Disputes relating to the processing of personal data are resolved through customer support <a href="mailto:support@sendy.co.ke">(support@sendy.co.ke)</a></li>
            </ul>
            </ol>
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
    parentName: 'DriverPrivacy',
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
    },
    redirect2(){
        window.location = "http://sendy.co.ke/terms"
    },
    redirect3(){
        window.location = "http://sendyit.com"
    }
}
}
</script>

<style>

</style>
