<template>
    <div>
    <!--start of upper section-->
    <Upper/>
     <!--start of home video section-->
    <homeVideo/>
     <!--start of partners section-->
    <div class="partners-sect overflow bg-orange">
        <div class="partner-col grid">
        <div class="partner-row flex centerY">
        <table class="partner-details" :style= "{position: 'absolute' , left : newLeft3 + '%'}">
            <tr><td>
            <p class="vehicle relative color-white" >Got a vehicle?</p>
            </td></tr>
            <tr><td>
            <button class="become-partner-button bg-orange flex centerX bottomY relative open-sans color-white bc-white" v-if="windowWidth > '768'" type="button"><router-link to="/partners" class="color-white">BECOME A PARTNER</router-link></button>
            </td></tr>
        </table>
        </div>
        <div class="partner-row flex centerY">
        <button class="become-partner-button bg-orange flex centerX bottomY relative open-sans color-white bc-white" v-if="windowWidth <= '768'" type="button"><router-link to="/partners" class="color-white">BECOME A PARTNER</router-link></button>
        <img v-if="windowWidth > '768'" :style= "{position: 'absolute' , right: newLeft2 + '%' , height: imgWidth + 'px'}" class="partners-img relative" src="https://images.sendyit.com/website/got_vehicle.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
        </div>
        </div>
    </div>
    <!--start of enterprise section-->
    <!-- <div class="kitenge-divider"></div> -->
    <div class="enterprise-section grid centerY" :style= "{marginLeft: 'auto' , marginRight: 'auto' , width: secWidth + '%'}">
            <div class="enterprise-desc">
                <p class="enterprise-desc-head">Grow your business with Sendy</p>
                <p class="enterprise-desc-par">Logistics is fundamental to the success of a business. Whether you run an online shop or a manufacturing business, Sendy is the preferred logistics platform for helping you grow your business.</p>
                <div class="img-row">
                <img :src="baseURL + '/Chandaria.png'" class="enterprise-clients">
                <img :src="baseURL + '/Safaricom.png'" class="enterprise-clients">
                <img :src="baseURL + '/Copia.png'" class="enterprise-clients">
                <img :src="baseURL + '/Highlands.png'" class="enterprise-clients">
                </div>
                <div class="img-row">
                <img :src="baseURL + '/Unilever.png'" class="enterprise-clients">
                <img :src="baseURL + '/Bidco.png'" class="enterprise-clients">
                <img :src="baseURL + '/Kenafric.png'" class="enterprise-clients">
                <img :src="baseURL + '/Crown.png'" class="enterprise-clients">
                </div>
            </div>
            <div class="e-commerce-category">
                <router-link to="/e-commerce">
                <div class="boundary">
                <img :src="baseURL + '/E-Commerce.png'" class="enterprise-category-image center-block block center-text">
                <p class="enterprise-head center-block block center-text open-sans">E-commerce</p>
                <p class="enterprise-par center-block block center-text open-sans">Focus on your core business, and let us handle the stress of deliveries. Sendy is the platform for e-commerce door-to-door deliveries.</p>
                <p><router-link to="/e-commerce" class="enterprise-link center-block block center-text color-orange">Learn More</router-link></p>
                </div>
                </router-link>
            </div>
            <div class="enterprise-category">
                <router-link to="/enterprise">
                <div class="boundary">
                <img :src="baseURL + '/Enterprise-sect.png'" class="enterprise-category-image center-block block center-text">
                <p class="enterprise-head center-block block center-text">Enterprise</p>
                <p class="enterprise-par center-block block center-text">Sendy's technology helps Manufacturers and Distributors to optimize their logistics, bringing down the cost of moving your goods.</p>
                <p><router-link to="/enterprise" class="enterprise-link center-block block center-text color-orange">Learn More</router-link></p>
                </div>
                </router-link>
            </div>
    </div>
    <div class="kitenge-divider"></div>
    <!--start of services section-->
    <div class="services">
        <div class="services-container flex centerY" :style= "{marginLeft: 'auto' , marginRight: 'auto' , width: secWidth + '%'}">
            <div class="services-row grid">
                <div class="services-column services-cols" align="center">
                      <span>
                        <img src="https://images.sendyit.com/frontend_apps/time_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p class="serv-heading">Deliver anywhere. Anytime.</p>
                        <p class="serv-body">Push a button and a driver will come to you in less than an hour. Whenever you’re delivering goods to your customers or loved ones, bank on Sendy to deliver on a bike, van or a truck.</p>
                      </div>
                </div>
                <div class="services-column services-cols" align="center">
                      <span>
                      <img src="https://images.sendyit.com/frontend_apps/reduce_cost_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p class="serv-heading">Reduce costs</p>
                        <p class="serv-body">Manage all your deliveries from one spot, where you can see spending, access reporting tools, and save on logistics costs.</p>
                      </div>
                </div>
                <div class="services-column services-cols" align="center">
                      <span>
                          <img src="https://images.sendyit.com/frontend_apps/secure_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p class="serv-heading">Your goods are protected</p>
                        <p class="serv-body">Each Sendy delivery is backed by an insurance policy from the moment your goods are in our hands.</p>
                      </div>
                </div>
                </div>
            </div>
    </div>
    <!--divider-->
    <!-- <div class="kitenge-divider"></div> -->
    <!--start of estimations-->
    <Estimations/>
    <!--divider-->
    <!-- <div class="kitenge-divider"></div> -->
    <!--start of slides section-->
    <div class="slides-section flex centerY">
        <div class="slides-container grid center-block center-text">
            <div class="slides-column">
                <p class="slides-header open-sans">Pick a <br>vehicle</p>
                    <div class="home-steps-des">
                        <img :style= "{ width : newWidth + '%' }" class="home_tutorial_image" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/first-screenshot.png" alt="pick a vehicle">
                            <div class="personal-text-content-body open-sans">
                                <p>Deliver goods via motorcycle, pickup, van or truck.</p>
                            </div>
                    </div>
            </div>
            <div class="slides-column" v-if="windowWidth <= '1200'">
            <div class="kitenge-divider kitenge-fit"></div>
            </div>
            <div class="slides-column">
                <p class="slides-header open-sans">Book a <br>delivery</p>
                    <div class="home-steps-des">
                        <img :style= "{ width : newWidth + '%' }" class="home_tutorial_image" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/second-screenshot.png" alt="book a delivery">
                            <div class="personal-text-content-body">
                                <p>Select pickup and destination(s) and get a price quote.</p>
                            </div>
                    </div>
            </div>
            <div class="slides-column" v-if="windowWidth <= '1200'">
            <div class="kitenge-divider kitenge-fit"></div>
            </div>
            <div class="slides-column">
                <p class="slides-header open-sans">Track your <br>Driver</p>
                    <div class="home-steps-des">
                        <img :style= "{ width : newWidth + '%' }" class="home_tutorial_image" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/third-screenshot.png" alt="track your driver">
                            <div class="personal-text-content-body">
                                <p>Track your Driver throughout the delivery in real time.</p>
                            </div>
                    </div>
            </div>
        </div>

    </div>

    <!--divider-->
        <!-- <div class="kitenge-divider"></div> -->
    <!--start of qualities section-->
    <div class = "qualities-section overflow">
    <div class="qualities-row tab1 grid">
        <div class="qualities-column-7 img-kid">

        </div>
        <div class="qualities-column-5 qualities-tab bg-blue flex centerX centerY">
            <div class="qualities-text-container">
                <p class="qualities-heading open-sans color-white">Simple</p>
                <p class="qualities-body open-sans color-white">One platform for all <br>your delivery needs.</p>
            </div>
        </div>
    </div>
    <div class="qualities-row tab1 grid">
        <div v-if="windowWidth <= '1200'" class="qualities-column-7 img-senior"></div>
        <div class="qualities-column-5 qualities-tab bg-orange flex centerX centerY">
        <div class="qualities-text-container">
            <p class="qualities-heading open-sans color-white">Transparent</p>
            <p class="qualities-body open-sans color-white">Know where your <br>delivery is at all times.</p>
        </div>
        </div>
        <div v-if="windowWidth > '1200'" class="qualities-column-7 img-senior"></div>
    </div>
        <div class="qualities-row tab1 grid">
                <div class="qualities-column-7 img-supply">

                </div>
                <div class="qualities-column-5 qualities-tab bg-blue flex centerX centerY">
                <div class="qualities-text-container">
                    <p class="qualities-heading open-sans color-white">User-Focused</p>
                    <p class="qualities-body open-sans color-white">Payment, pricing, and <br>platform options <br>tailored for your <br>business.</p>
                </div>
                </div>
        </div>
</div>

    <!--start of reviews section-->
    <Carousel/>
    <!--start of businesses section-->
    <Businesses/>
    <!--start of lower section-->
    <Lower/>
    <!--divider-->
    <!-- <div class="kitenge-divider"></div> -->
    </div>
</template>

<script>
import Upper from './Upper'
import HomeVideo from './HomeVideo'
import Estimations from './Estimations'
import Carousel from './Carousel'
import Businesses from './Businesses'
import Lower from './Lower'
export default {
components: {
    Upper,
    HomeVideo,
    Estimations,
    Carousel,
    Businesses,
    Lower
},
data() {
    return {
    parentName: 'Home',
    windowWidth: null,
    android: null,
    IOS: null,
    newWidth: null,
    newLeft: null,
    secWidth: null,
    imgWidth: null,
    baseURL: 'https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2',
    newLeft2: null,
    newLeft3: null
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
            this.detectAndroid();
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
      this.windowWidth = window.innerWidth;
      var range = 2560 - this.windowWidth
        var quotient = (range * 13.5)/1536
        this.newLeft = 19 - quotient
        this.newLeft2 = this.newLeft + 4
        this.newLeft3 = this.newLeft2 + 3
        if(this.windowWidth > 430){
            this.secWidth = 100 - (this.newLeft * 2)
        }
        else{
            this.secWidth = 98 - (this.newLeft * 2)
        }
        var quotient2 = (range * 30)/1194
        var estWidth = 50 + quotient2
        if (this.windowWidth > 1200){
        this.newWidth = estWidth
        }
        else if(this.windowWidth <= 1200 && this.windowWidth > 768){
        this.newWidth = 50
        }
        else if(this.windowWidth <= 768 && this.windowWidth > 430){
        this.newWidth = 60
        }
        else{
        this.newWidth = 90
        }
        var quotient3 = (range * 10)/1536
        if(this.windowWidth < 1100){
            this.imgWidth = 170 - quotient3
        }
        else{
            this.imgWidth = 200 - quotient3
        }

    },
    redirect(){
        window.location = "http://www.sendy.co.ke"
    },
    detectAndroid() {
    if( navigator.userAgent.match(/Android/i)){
        this.android = true
        this.IOS = false
        }
    },
    detectIOS() {
    if( navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)){
        this.IOS = true
        this.android = false
        }
    }
    }
}
</script>

<style>

</style>
