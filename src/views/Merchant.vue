<template>
    <div class="business-page">
    <Upper/>
    <div class="platform-home1 flex centerY overflow bg-blue centerY">
        <div class="platform-home1-left overflow">
            <img src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/E-Commerce-Orange.png" class="platform-home1-img block center-block">
        </div>
        <div class="platform-home1-right">
            <p class="platform-home1-right-head color-white">Deliver to your clients without the stress.</p>
            <p class="platform-home1-right-par color-white">We understand your business like nobody else. Whether you are selling clothing, furniture or electronics, Sendy will deliver your goods safely to your customers.</p>
        </div>
    </div>
    <div class="platform">
        <p class="platform-head center-text color-black">Grow your business with the most efficient delivery service</p>
        <p class="platform-par center-block center-text block">Sendy takes away the uncertainty of conventional delivery methods and makes the process simple,<br> transparent and secure.</p>
        <div class="platform-row center-text grid" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%'}">
            <div class="platform-column">
                <img class="platform-thumb center-block block" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/Transparent-Price.png">
                <p class="platform-column-head color-black">One fixed price across the city</p>
                <p class="platform-column-par center-block block">Sendy offers you one price for all your Nairobi deliveries. No zones or maximum distance. Know exactly what it's going to cost.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb center-block block" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/Connect.png">
                <p class="platform-column-head color-black">Insurance</p>
                <p class="platform-column-par center-block block">All goods are insured against loss or damage while in transit. Enjoy peace of mind when delivering to your customers.</p>
            </div>
            <div class="platform-column">
                <img class="platform-thumb center-block block" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/Multiple-Stops.png">
                <p class="platform-column-head color-black">Share arrival time</p>
                <p class="platform-column-par center-block block">Keep your customer in the know by sharing the expected delivery time. This will impr/ove your client's experience.</p>
            </div>
        </div>
        <div class="growth bg-orange">
            <p class="growth-head">Ready?</p>
            <button class="get-started-button-blue center-block block centerX bottomY bg-blue bc-blue color-white open-sans" type="button" onclick="location.href='https://apptest.sendyit.com/get_started';">GET STARTED</button>
            <p class="login-par">Already have an account? <router-link to="partners" class="color-white">Login</router-link></p>
        </div>
        <div class="customer-prefer">
            <p class="cp-head color-black center-text">Why E-Commerce businesses prefer Sendy</p>
            <p class="cp-par center-text center-block block">Sendy has unique features that make us the best delivery service for your E-Commerce business.</p>
            <table class="cp-table" :style= "{marginLeft: newLeft + '%', marginRight: newLeft + '%' , width: newWidth + '%'}">
                <tr class="cp-table-top-row bg-blue color-white center-text">
                    <td class="col1 colx">Features</td>
                    <td class="col2">Sendy</td>
                    <td class="col3">Boda-Boda</td>
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
                        <button class="price-submit growth-sub bg-orange color-white bc-orange block center-block open-sans" type="button" onclick="location.href='';">SUBMIT</button>
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
    newWidth: null,
    baseURL: 'https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2',
    tables: [
        {name: 'Deliveries', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Multiple deliveries at once', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Android, IOS and Web App', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Real-time tracking', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'E-commerce intergration and API intergration', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/xmark.png'},
        {name: 'All vehicle types', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/question.png', url5: '/question.png'},
        {name: 'Direct M-pesa intergration', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'},
        {name: 'Ratings', url1: '/info.png', url2: '/tick.png', url3: '/xmark.png', url4: '/xmark.png', url5: '/question.png'}
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
    mounted(){
        window.scrollTo(0, 0);
            this.$nextTick(function () {
        document.dispatchEvent(new Event('custom-render-trigger'))
    })
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
    }
}
}
</script>

<style>

</style>
