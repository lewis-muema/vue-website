<template>
    <div class="partners-page">
    <Upper/>
    <Slideshow/>
    <div class = "sendy-intro">
        <p class="sendy-intro-head">What is Sendy?</p>
        <p class="sendy-intro-body">Sendy connects Customers with Drivers to help deliver goods simply and transparently. Customers place orders through the Sendy platform, and Sendy dispatches these orders in real time to available Sendy Drivers.<br><br>
        As a Sendy Partner, we empower you to make more money with your vehicle. Put your vehicle on our platform, and we'll connect you to more delivery opportunities and access to carrier liablity and Driver accident insurance. Partner with Sendy to increase your income. Let's Deliver!</p>
    
    </div>
    <div class = "earnings">
        <div class="earnings-container">
        <p class="earnings-head">How much can you make with sendy?</p>
        <div class="selectors">
        <select class="selector-1">
            <option value="City">City</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Thika">Thika</option>
        </select>
        <select class="selector-2">
            <option value="Vehicle">Vehicle</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Tuk-Tuk">Tuk-tuk</option>
            <option value="Pickup">Pickup</option>
            <option value="Van">Van</option>
            <option value="3T Truck">3T Truck</option>
            <option value="5T Truck">5T Truck</option>
            <option value="7T Truck">7T Truck</option>
            <option value="10T Truck">10T Truck</option>
            <option value="14T Truck">14T Truck</option>
            <option value="27T Truck">27T Truck</option>
        </select>
        <select class="selector-3">
            <option value="Time">Time</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="1 year">1 year</option>
        </select>
        <button class="calculate-earnings">calculate</button>
        </div>
        </div>
    </div>
    <div class="how-it-works">
        <p class="how-head">
            How does it work
        </p>
        <Slider/>
    </div>
    <carousel/>
    <div class="FAQ-section">
        <div class="FAQ-content-holder">
           <p class="FAQ-head">FAQS</p>
           <p class="FAQ-body-bold">What are the requirements to join Sendy?</p>
               <ul class="FAQ-body-light">
                    <li>National ID/Passport</li>
                    <li>Valid Certificate of Good Conduct</li>
                    <li>Valid Driver’s License</li>
                    <li>Motor Vehicle Insurance</li>
                    <li>Motor Vehicle Log Book/Proof of Ownership</li>
                    <li>GPS enabled Android smartphone</li>
               </ul>
            <p class="FAQ-body-bold">How much do I pay Sendy?</p> 
            <p class="FAQ-body-light">Sign up is free. Sendy works on a small service fee and 20% commission per delivery.</p>
            <p class="FAQ-body-bold">How will I be paid?</p>
            <p class="FAQ-body-light">Partners can withdraw total weekly earnings on Saturday via MPesa. The withdrawal process is initiated from the Partner app, and the money can be delivered to either the Driver, Owner or another number provided during training.</p>
            <p class="FAQ-body-bold">Can I bring multiple vehicles to the platform?</p>
            <p class="FAQ-body-light">Yes! There is no limit to the number of vehicles you can bring to the platform.</p>
            <p class="FAQ-body-bold">Who brings the Driver on board?</p>
            <p class="FAQ-body-light">The Owner of the vehicle is responsible for sourcing the Driver(s).</p>
            <p class="FAQ-body-bold">Who covers fuel costs and Driver stipend?</p>
            <p class="FAQ-body-light">The Owner covers the fuel costs, Driver stipend, and any other expenses that are Driver or vehicle related.</p>
        </div>
    </div>
    <Lower/>
    <div class="kitenge-divider"></div>
    </div>
</template>

<script>
import Upper from './Upper';
import Lower from './Lower';
import Carousel from './Carousel';
import Slider from './Slider';
import Slideshow from './Slideshow';
export default {
components: {
    Upper,
    Lower,
    Carousel,
    Slider,
    Slideshow
},
data() {
    return {
    parentName: 'Partners',
    imgs1: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image1scroll.jpg',
    imgs2: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image2scroll.jpg',
    imgs3: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image3scroll.jpg',
    imgs4: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image4scroll.jpg',
    state: true,
    direction: 'slide-fade-left-car',
    pos: 1,
    windowWidth: null
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
    var self = this;
    setInterval(() => {
        if(this.pos < '4'){
                
                var newPos = this.pos + 1
                self.pos = newPos
            }
            else{
                this.pos = 1
            }
        //alert(this.pos)
        
    }, 15000);
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    },
     destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
    },
    first(){
        this.pos = 1
    },
    second(){
        this.pos = 2
    },
    third(){
        this.pos = 3
    },
    fourth(){
        this.pos = 4
    }
    }
    
}
</script>

<style>

</style>
