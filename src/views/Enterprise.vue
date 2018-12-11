<template>
    <div class="business-page">
    <Upper/>
    <div class="platform-home flex centerY overflow bg-blue bottomY">
        <div class="platform-home-left" :style= "{marginLeft: newLeft + '%'}">
            <p class="platform-home-left-head color-white">Move more goods securely and efficiently.</p>
            <p class="platform-home-left-par color-white">The cost of moving goods in East Africa can be up to 60% of the customer price. Sendy helps lower the cost of logistics by leveraging technology and optimizing deliveries.</p>
        </div>
        <div class="platform-home-right">
            <img :src="baseURL + '/Enterprise-home.png'" class="platform-home-img center-block block">
        </div>
    </div>
    <div class="platform">
        <p class="platform-head center-text color-black">Africa's most advanced delivery platform</p>
        <p class="platform-par center-block center-text block">Customers expectations on turnaround times are increasing. Let Sendy optimize your deliveries so you can focus on your core business.</p>
        <div class="platform-row center-text grid" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%'}">
            <div class="platform-column">
                <img class="platform-thumb center-block block" :src="baseURL + '/stops.png'">
                <p class="platform-column-head color-black">Multiple delivery stops</p>
                <p class="platform-column-par center-block block">Deliver goods to multiple customers under one delivery request - increasing Driver efficiency and reducing per delivery costs.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb center-block block" :src="baseURL + '/Track-p.png'">
                <p class="platform-column-head color-black">Order tracking</p>
                <p class="platform-column-par center-block block">Track all your deliveries in real time from the comfort of your office. No need to stress anymore when monitoring the deliveries.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb center-block block" :src="baseURL + '/analytics.png'">
                <p class="platform-column-head color-black">Analytics dashboard</p>
                <p class="platform-column-par center-block block">Data is the fuel of any business. Sendy's platform collects critical delivery data points that can be used to optimise your delivery process.</p>
            </div>
        </div>
        <div class="growth bg-blue">
            <p class="growth-head">Get in touch</p>
            <p class="growth-par center-text color-white">Click on the link below and a Sendy representative will contact you. Time to increase delivery<br> efficiency and lower costs.</p>
            <button class="get-started-button bg-orange bc-orange color-white open-sans center-block block button-font" type="button" onclick="location.href='';">CONTACT SALES</button>
        </div>
        <div class="customer-prefer">
            <p class="cp-head color-black center-text">Why businesses prefer Sendy</p>
            <p class="cp-par center-text center-block block">Sendy has unique features that support your delivery process better than other service providers.</p>
            <table class="cp-table" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%' , width: newWidth + '%'}">
                <tr class="cp-table-top-row bg-blue color-white center-text">
                    <td class="col1 colx">Features</td>
                    <td class="col2">Sendy</td>
                    <td class="col3">Informal Couriers</td>
                    <td class="col4">Small Couriers</td>
                    <td class="col5">Global Couriers</td>
                </tr>
                <tr class="cp-table-row" v-for="table in tables" :key="table.name">
                    <td class="col1"><p>{{table.name}}<img class="info-marker" :src="baseURL + table.url1"></p></td>
                    <td class="col2"><img class="marker" :src="baseURL + table.url2"></td>
                    <td class="col3"><img class="marker" :src="baseURL + table.url3"></td>
                    <td class="col4"><img class="marker" :src="baseURL + table.url4"></td>
                    <td class="col5"><img class="marker" :src="baseURL + table.url5"></td>
                </tr>
            </table>
        </div>
        <div class="growth bg-blue">
            <p class="growth-head">Still have more questions?</p>
            <p class="growth-par1 center-text color-white">Kindly provide us with your name and email and a Sendy representative will contact you.</p>
            <div class="growth-table center-block color-white grid">
                    <div class="growth-name">
                        <p class="margins">Name</p>
                        <input type="text" class="growth-field">
                    </div>
                    <div class="growth-email">
                        <p class="margins">Email-Address</p>
                        <input type="text" class="growth-field">
                    </div>
                    <div class="growth-submit">
                        <button class="price-submit growth-sub bc-orange color-white bg-orange open-sans block center-block open-sans" type="button" onclick="location.href='';">SUBMIT</button>
                    </div>
            </div>
        </div>
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
    parentName: 'Enterprise',
    windowWidth: null,
    newLeft: null,
    newWidth: null,
    baseURL: 'https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2',
    tables: [
        {name: 'Deliveries', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Multiple deliveries at a time', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Android, IOS and Web App', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Real-time tracking', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'API intergration', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/xmark.png'},
        {name: 'All vehicle types', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/question.png', url5: '/question.png'},
        {name: 'Payment after fullfilment', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Ratings', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'}
    ]
    }
},
computed: {
        nameDisplayer() {
            return this.$store.state.parentName;
        }
},
mounted(){
    window.scrollTo(0, 0);
    this.$nextTick(function () {
        document.dispatchEvent(new Event('custom-render-trigger'))
        this.mixTrackPage()
    })
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
      var range = 2560 - window.innerWidth
        var quotient = (range * 13.5)/1536
        this.newLeft = 19 - quotient
        this.newWidth = 100 - (this.newLeft * 2)
    },
    redirect(){
        window.location = "http://www.sendy.co.ke"
    },
    redirect2(){
        window.location = "https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565"
    },
    mixTrackPage(){
    var mixpanel = require('mixpanel-browser');
    mixpanel.init("44f45c8f1e756ba049e6284def96ac7f");
    mixpanel.track("Enterprise Page", {
    "landing page version": "website",
    });
    }
}
}
</script>

<style>

</style>
