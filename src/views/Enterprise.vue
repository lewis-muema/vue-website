<template>
    <div class="business-page">
    <Upper/>
    <div class="platform-home">
        <div class="platform-home-left" :style= "{marginLeft: newLeft + '%'}">
            <p class="platform-home-left-head">Move more goods securely and efficiently.</p>
            <p class="platform-home-left-par">The cost of moving goods in East Africa can be up to 60% of the customer price. Sendy helps lower the cost of logistics by leveraging technology and optimizing deliveries.</p>
        </div>
        <div class="platform-home-right">
            <img src="../assets/Enterprise-home.png" class="platform-home-img">
        </div>
    </div>
    <div class="platform">
        <p class="platform-head">Africa's most advanced delivery platform</p>
        <p class="platform-par">Customers expectations on turnaround times are increasing. Let Sendy optimize your deliveries so you can focus on your core business.</p>
        <div class="platform-row" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%'}">
            <div class="platform-column">
                <img class="platform-thumb" src="https://www.johnson-travels.com/library/images/stops.png">
                <p class="platform-column-head">Multiple delivery stops</p>
                <p class="platform-column-par">Deliver goods to multiple customers under one delivery request - increasing Driver efficiency and reducing per delivery costs.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb" src="https://www.johnson-travels.com/library/images/Track-p.png">
                <p class="platform-column-head">Order tracking</p>
                <p class="platform-column-par">Track all your deliveries in real time from the comfort of your office. No need to stress anymore when monitoring the deliveries.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb" src="https://www.johnson-travels.com/library/images/analytics.png">
                <p class="platform-column-head">Analytics dashboard</p>
                <p class="platform-column-par">Data is the fuel of any business. Sendy's platform collects critical delivery data points that can be used to optimise your delivery process.</p>
            </div>
        </div>
        <div class="growth">
            <p class="growth-head">Get in touch</p>
            <p class="growth-par">Click on the link below and a Sendy representative will contact you. Time to increase delivery efficiency and lower costs.</p>
            <button class="get-started-button" type="button" id="get-started-center" onclick="location.href='';">CONTACT SALES</button>
        </div>
        <div class="customer-prefer">
            <p class="cp-head">Why our customers prefer Sendy</p>
            <p class="cp-par">Sendy has many features that make all your deliveries simple, transparent and secure. 
            See how we compare to others.</p>
            <table class="cp-table" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%'}">
                <tr class="cp-table-top-row">
                    <td class="col1">Features</td>
                    <td class="col2">Sendy</td>
                    <td class="col3">Boda-Boda</td>
                    <td class="col4">Small Couriers</td>
                    <td class="col5">Large International Couriers</td>
                </tr>
                <tr class="cp-table-row" v-for="table in tables" :key="table.name">
                    <td class="col1"><p>{{table.name}}<img class="info-marker" :src="table.url1"></p></td>
                    <td class="col2"><img class="marker" :src="table.url2"></td>
                    <td class="col3"><img class="marker" :src="table.url3"></td>
                    <td class="col4"><img class="marker" :src="table.url4"></td>
                    <td class="col5"><img class="marker" :src="table.url5"></td>
                </tr>
            </table>
        </div>
        <div class="growth">
            <p class="growth-head">Still have more questions?</p>
            <p class="growth-par1">Kindly provide us with your name and email and a Sendy representative will contact you.</p>
            <div class="growth-table">
                    <div class="growth-name">
                        <p>Name</p>
                        <input type="text" class="growth-field">
                    </div>
                    <div class="growth-email">
                        <p>Email-Address</p>
                        <input type="text" class="growth-field">
                    </div>
                    <div class="growth-submit">
                        <button class="price-submit" id="growth-submit" type="button" onclick="location.href='';">SUBMIT</button>
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
    baseUrl: 'https://www.johnson-travels.com/library/images/',
    newLeft: null,
    tables: [
        {name: 'Insurance on delivery', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/question.png'},
        {name: 'Unlimited parallel orders', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/question.png'},
        {name: 'Android and IOS apps', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/question.png'},
        {name: 'Real-time tracking', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/question.png'},
        {name: 'E-commerce intergration', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/xmark.png'},
        {name: 'All vehicle types(bikes, pickups, vans & trucks)', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/question.png', url5: 'https://www.johnson-travels.com/library/images/question.png'},
        {name: 'Direct M-pesa intergration', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/question.png'},
        {name: 'Driver rating', url1: 'https://www.johnson-travels.com/library/images/info.png', url2: 'https://www.johnson-travels.com/library/images/tick.png', url3: 'https://www.johnson-travels.com/library/images/xmark.png', url4: 'https://www.johnson-travels.com/library/images/xmark.png', url5: 'https://www.johnson-travels.com/library/images/question.png'}
    ]
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
      var range = 2560 - window.innerWidth
        var quotient = (range * 13.5)/1536
        this.newLeft = 19 - quotient
    },
    redirect(){
        window.location = "http://www.sendy.co.ke"
    },
    redirect2(){
        window.location = "https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565"
    }
}
}
</script>

<style>

</style>
