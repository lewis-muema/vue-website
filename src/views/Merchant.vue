<template>
    <div class="business-page">
    <Upper/>
    <div class="platform-home1">
        <div class="platform-home1-left">
            <img src="../assets/E-Commerce-Orange.png" class="platform-home1-img">
        </div>
        <div class="platform-home1-right">
            <p class="platform-home1-right-head">Deliver to your clients without the stress.</p>
            <p class="platform-home1-right-par">We understand your business like nobody else. Whether you are selling clothing, furniture or electronics, Sendy will deliver your goods safely to your customers.</p>
        </div>
    </div>
    <div class="platform">
        <p class="platform-head">Grow your business with the most efficient delivery service</p>
        <p class="platform-par">Sendy takes away the uncertainty of conventional delivery methods and makes the process simple, transparent and secure.</p>
        <div class="platform-row" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%'}">
            <div class="platform-column">
                <img class="platform-thumb" src="https://www.johnson-travels.com/library/images/Transparent-Price.png">
                <p class="platform-column-head">One fixed price across the city</p>
                <p class="platform-column-par">Sendy offers you one price for all your Nairobi deliveries. No zones or maximum distance. Know exactly what it's going to cost.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb" src="https://www.johnson-travels.com/library/images/Connect.png">
                <p class="platform-column-head">Insurance</p>
                <p class="platform-column-par">All goods are insured against loss or damage while in transit. Enjoy peace of mind when delivering to your customers.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb" src="https://www.johnson-travels.com/library/images/Stops2.png">
                <p class="platform-column-head">Share arrival time</p>
                <p class="platform-column-par">Keep your customer in the know by sharing the expected delivery time. This will impr/ove your client's experience.</p>
            </div>
        </div>
        <div class="growth" id="growth1">
            <p class="growth-head">Ready?</p>
            <button class="get-started-button-blue" type="button" onclick="location.href='https://apptest.sendyit.com/get_started';">GET STARTED</button>
            <p class="login-par">Already have an account? <a @click="redirect2" id="login-white">Login</a></p>
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
    parentName: 'Merchant',
    windowWidth: null,
    newLeft: null,
    baseUrl: 'https://www.johnson-travels.com/library/images/',
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
