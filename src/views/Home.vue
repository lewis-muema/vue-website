<template>
    <div>
    <!--start of upper section-->
    <Upper/>  
     <!--start of home video section--> 
    <homeVideo/>
     <!--start of partners section-->
    <div class="partners-sect">
        <p class="vehicle" >Got a vehicle?</p>
            <button class="become-partner-button" type="button" onclick="location.href='https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565';">BECOME A PARTNER</button>
        <img v-if="windowWidth > '768'" class="partners-img" src="https://images.sendyit.com/website/got_vehicle.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
    </div>
    <!--start of enterprise section-->
    <div class="kitenge-divider"></div>
    <table class="enterprise-section">
        <tr>
            <td class="enterprise-desc">
                <p class="enterprise-desc-head">Grow your business with Sendy</p>
                <p class="enterprise-desc-par">Logistics is fundamental to the success of a business. Whether you run an online shop or a manufacturing business, Sendy is the preferred logistics platform for helping you grow your business.</p>
                <div class="img-row">
                <img src="../assets/Chandaria.png" class="enterprise-clients">
                <img src="../assets/Safaricom.png" class="enterprise-clients">
                <img src="../assets/Copia.png" class="enterprise-clients">
                <img src="../assets/Highlands.png" class="enterprise-clients">
                </div>
                <div class="img-row">
                <img src="../assets/Unilever.png" class="enterprise-clients">
                <img src="../assets/Bidco.png" class="enterprise-clients">
                <img src="../assets/Kenafric.png" class="enterprise-clients">
                <img src="../assets/Crown.png" class="enterprise-clients">
                </div>
            </td>
            <td class="e-commerce-category">
                <img src="../assets/E-Commerce.png" class="enterprise-category-image">
                <p class="enterprise-head">E-commerce</p>
                <p class="enterprise-par">Focus on your core business, and let us handle the stress of deliveries. Sendy is the platform for e-commerce door-to-door deliveries.</p>
                <p><a href="" class="enterprise-link">Learn More</a></p>
            </td>
            <td class="enterprise-category">
                <img src="../assets/Enterprise.png" class="enterprise-category-image">
                <p class="enterprise-head">Enterprise</p>
                <p class="enterprise-par">Sendy's technology helps Manufacturers and Distributors to optimize their logistics, bringing down the cost of moving your goods.</p>
                <p><a href="" class="enterprise-link">Learn More</a></p>
            </td>
        </tr>
    </table>
    <div class="kitenge-divider"></div>
    <!--start of services section-->
    <div class="services">
        <div class="services-container" :style= "{marginLeft: newLeft + '%' , marginRight: newLeft + '%' , width: secWidth + '%'}">
            <div class="services-row">
                <div class="services-column" id="services-cols" align="center">
                      <span>
                        <img src="https://images.sendyit.com/frontend_apps/time_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p id="serv-heading">Deliver anywhere. Anytime.</p>
                        <p id="serv-body">Push a button and a driver will come to you in less than an hour. Whenever you’re delivering goods to your customers or loved ones, bank on Sendy to deliver on a bike, van or a truck.</p>
                      </div>
                </div>
                <div class="services-column" id="services-cols" align="center">
                      <span>
                      <img src="https://images.sendyit.com/frontend_apps/reduce_cost_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p id="serv-heading">Reduce costs</p>
                        <p id="serv-body">Manage all your deliveries from one spot, where you can see spending, access reporting tools, and save on logistics costs.</p>
                      </div>
                </div>
                <div class="services-column" id="services-cols" align="center">
                      <span>
                          <img src="https://images.sendyit.com/frontend_apps/secure_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p id="serv-heading">Your goods are protected</p>
                        <p id="serv-body">Each Sendy delivery is backed by an insurance policy from the moment your goods are in our hands.</p>
                      </div>
                </div>
                </div>
            </div>
    </div>
    <!--divider-->
    <div class="kitenge-divider"></div>
    <!--start of estimations-->
    <Estimations/>
    <!--divider-->
    <div class="kitenge-divider"></div>
    <!--start of slides section-->
    <div class="slides-section">
        <div class="slides-container">
            <div class="slides-column">
                <p class="slides-header">Pick a <br>vehicle</p>
                    <div class="home-steps-des">
                        <img :style= "{ width : newWidth + '%' }" class="home_tutorial_image" src="https://images.sendyit.com/website/screen_vehicle.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="pick a vehicle">
                            <div class="personal-text-content-body">
                                <p>Deliver goods via motorcycle, pickup, van or truck.</p>
                            </div>
                    </div>
            </div>
            <div class="slides-column" v-if="windowWidth <= '1200'">
            <div class="kitenge-divider" id="kitenge-fit"></div>
            </div>
            <div class="slides-column">
                <p class="slides-header">Book a <br>delivery</p>
                    <div class="home-steps-des">
                        <img :style= "{ width : newWidth + '%' }" class="home_tutorial_image" src="https://images.sendyit.com/website/screen_book.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="book a delivery">
                            <div class="personal-text-content-body">
                                <p>Select pickup and destination(s) and get a price quote.</p>
                            </div>
                    </div>
            </div>
            <div class="slides-column" v-if="windowWidth <= '1200'">
            <div class="kitenge-divider" id="kitenge-fit"></div>
            </div>
            <div class="slides-column">
                <p class="slides-header">Track your <br>Driver</p>
                    <div class="home-steps-des">
                        <img :style= "{ width : newWidth + '%' }" class="home_tutorial_image" src="https://images.sendyit.com/website/screen_track.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="track your driver">
                            <div class="personal-text-content-body">
                                <p>Track your Driver throughout the delivery in real time.</p>
                            </div>
                    </div>
            </div>                      
        </div>
    
    </div>

    <!--divider-->
        <div class="kitenge-divider"></div>
    <!--start of qualities section-->
    <div class = "qualities-section">
    <div class="qualities-row" id="tab1">
        <div class="qualities-column-7" id="img-kid">

        </div>
        <div class="qualities-column-5" id="tab-blue">
            <div class="qualities-text-container">
                <p class="qualities-heading">Simple</p>
                <p class="qualities-body">One platform for all <br>your delivery needs.</p>
            </div>
        </div>
    </div>
    <div class="qualities-row" id="tab1">
        <div v-if="windowWidth <= '1200'" class="qualities-column-7" id="img-senior"></div>
        <div class="qualities-column-5" id="tab-orange">   
        <div class="qualities-text-container">
            <p class="qualities-heading">Transparent</p>
            <p class="qualities-body">Know where your <br>delivery is at all times.</p>
        </div> 
        </div>
        <div v-if="windowWidth > '1200'" class="qualities-column-7" id="img-senior"></div>
    </div>
        <div class="qualities-row" id="tab1">
                <div class="qualities-column-7" id="img-supply">

                </div>
                <div class="qualities-column-5" id="tab-blue">
                <div class="qualities-text-container">
                    <p class="qualities-heading">User-Focused</p>
                    <p class="qualities-body">Payment, pricing, and <br>platform options <br>tailored for your <br>business.</p>
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
    <div class="kitenge-divider"></div>
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
    secWidth: null
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
            this.detectIOS();            
    },
     destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      var range = 2560 - this.windowWidth
        var quotient = (range * 13.5)/1536
        this.newLeft = 19 - quotient
        this.secWidth = 100 - (this.newLeft * 2)
        var quotient2 = (range * 30)/1194
        var estWidth = 50 + quotient2
        if (this.windowWidth > 1200){
        this.newWidth = estWidth
        }
        else{
        this.newWidth = 33
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
