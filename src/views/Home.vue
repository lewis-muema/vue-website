<template>
    <div>
    <!--start of upper section-->
    <Upper/>  
     <!--start of home video section--> 
    <homeVideo/>
     <!--start of partners section-->
    <div class="partners-sect">
        <p class="vehicle">Got a vehicle?</p>
            <button class="become-partner-button" type="button" onclick="location.href='https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565';">BECOME A PARTNER</button>
        <img class="partners-img" src="https://images.sendyit.com/website/got_vehicle.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
    </div>
    <!--start of services section-->
    <div class="services">
        <div class="services-container">
            <div class="services-row">
                <div class="col-lg-4" id="services-cols" align="center">
                      <span>
                        <img src="https://images.sendyit.com/frontend_apps/time_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p id="serv-heading">Deliver anywhere. Anytime.</p>
                        <p id="serv-body">Push a button and a driver will come to you in less than an hour. Whenever you’re delivering goods to your customers or loved ones, bank on Sendy to deliver on a bike, van or a truck.</p>
                      </div>
                </div>
                <div class="col-lg-4" id="services-cols" align="center">
                      <span>
                      <img src="https://images.sendyit.com/frontend_apps/reduce_cost_orange.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="" style="width:100px;">
                      </span>
                      <div class="personal-text-content personal-text-content-pricing">
                        <p id="serv-heading">Reduce costs</p>
                        <p id="serv-body">Manage all your deliveries from one spot, where you can see spending, access reporting tools, and save on logistics costs.</p>
                      </div>
                </div>
                <div class="col-lg-4" id="services-cols" align="center">
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
            <div class="col-lg-4">
                <p class="slides-header">Pick a <br>vehicle</p>
                    <div class="home-steps-des">
                        <img class="home_tutorial_image" src="https://images.sendyit.com/website/screen_vehicle.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="pick a vehicle">
                            <div class="personal-text-content-body">
                                <p>Deliver goods via motorcycle, pickup, van or truck.</p>
                            </div>
                    </div>
            </div>
            <div class="col-lg-4">
                <p class="slides-header">Book a <br>delivery</p>
                    <div class="home-steps-des">
                        <img class="home_tutorial_image" src="https://images.sendyit.com/website/screen_book.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="book a delivery">
                            <div class="personal-text-content-body">
                                <p>Select pickup and destination(s) and get a price quote.</p>
                            </div>
                    </div>
            </div>
            <div class="col-lg-4">
                <p class="slides-header">Track your <br>Driver</p>
                    <div class="home-steps-des">
                        <img class="home_tutorial_image" src="https://images.sendyit.com/website/screen_track.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" alt="track your driver">
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
    <div class="row" id="tab1">
        <div class="col-lg-7" id="img-kid">

        </div>
        <div class="col-lg-5" id="tab-blue">
            <div class="qualities-text-container">
                <p class="qualities-heading">Simple</p>
                <p class="qualities-body">One platform for all <br>your delivery needs.</p>
            </div>
        </div>
    </div>
    <div class="row" id="tab1">
        <div class="col-lg-5" id="tab-orange">
        <div class="qualities-text-container">
            <p class="qualities-heading">Transparent</p>
            <p class="qualities-body">Know where your <br>delivery is at all times.</p>
        </div> 
        </div>
        <div class="col-lg-7" id="img-senior">
            
        </div>
    </div>
        <div class="row" id="tab1">
                <div class="col-lg-7" id="img-supply">

                </div>
                <div class="col-lg-5" id="tab-blue">
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
    parentName: 'Home'
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
    }
}
</script>

<style>

</style>
