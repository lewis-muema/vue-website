<template>
    <div class="reviews-section">
        <div class="partnerships">
            <p class="partner-head" v-if ="parentName == 'Home'">Partnerships</p>
            <p class="partner-head" v-if ="parentName == 'Partners'">Testimonials</p>
            <p class="partner-body" v-if ="parentName == 'Home'">We believe in the power of partnership. Together we will unlock Africa’s potential.</p>
        </div>
        <div class="reviews-container">
        <span class= "arrows"><img src="https://images.sendyit.com/website/driver/left_scroll_white.png" @click="previous" class="arrow-left"></span>
        <div class="tabs-holder">
        <transition :name ="direction">
        <span class="carousel-images-left" v-if="state == true" >
            <div class="imgholder-left">
            <img v-if ="parentName == 'Home'" :src= "imgs[0].url" class="review-left">
            <img v-if ="parentName == 'Partners'" :src= "imgs1[0].url" class="review-left">
            <div class="blinder"></div>
            </div>
        <div class="description">
        </div>
        </span>
        </transition>
        <transition :name="direction">
        <span class="carousel-images-center" v-if="state == true">
            <div class="gradient-top"></div>
            <div class="gradient-bottom"></div>
            <div class="gradient-left"></div>
            <div class="gradient-rignt"></div>
            <div class="imgholder-center">
            <img v-if ="parentName == 'Home'" :src= "imgs[1].url" class="review-center">
            <img v-if ="parentName == 'Partners'" :src= "imgs1[1].url" class="review-center">
            </div>
            <div class="description-center">
                <p class="desc" v-if="parentName == 'Home'"> {{ imgs[1].name }} </p>
                <p class="desc" v-if="parentName == 'Home'">Customer</p>
                <p class="desc-par" v-if="parentName == 'Home'"> {{ imgs[1].desc }} </p>
                <p class="desc" v-if="parentName == 'Partners'"> {{ imgs1[1].name }} </p>
                <p class="desc" v-if="parentName == 'Partners'">{{ imgs1[1].role }}</p>
                <p class="desc-par" v-if="parentName == 'Partners'"> {{ imgs1[1].desc }} </p>
                
            </div>
        </span>
        </transition>
        <transition :name="direction" >
        <span class="carousel-images-right" v-if="state == true">
            <div class="imgholder-right">
            <img v-if ="parentName == 'Home'" :src= "imgs[2].url" class="review-right">
            <img v-if ="parentName == 'Partners'" :src= "imgs1[2].url" class="review-right">
            <div class="blinder"></div>
            </div>
            <div class="description">
            </div>
        </span>
        </transition>
        </div>
        <span class= "arrows"><img src="https://images.sendyit.com/website/driver/right_scroll_white.png" @click="next" class="arrow-right"></span>
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        imgs: [
            {name:'Kevin - Highlands', url:'https://images.sendyit.com/website/Kevin-Highlands.png', desc:'"Sendy is always available. 24.7. They have loads of trucks and are always about to accommodate our different load sizes."'},
            {name:'Sarah - Wakuu Suits', url:'https://images.sendyit.com/website/Sara-Wakuu.png', desc:'"Sendy is the fast and flexible solution for a messenger within Nairobi. Sendy makes so many things easier day to day."'},
            {name:'Bob - Safaricom', url:'https://images.sendyit.com/website/Bob-Safaricom.png', desc:'"In the case of Sendy, the team is doing something that no one else is doing. An African solution to an African challenge."'},
            {name:'Victor - Synergy', url:'https://images.sendyit.com/website/Victor-Synergy.png', desc:'"Sendy is the most reliable company I use. Guys at Sendy have become my friends. They make my work so easy. They are very efficient, effective, and on time."'},
        ],
        imgs1: [
            {name:'James', role: "Truck Driver & Owner", url:'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Testimonial05.png', desc:'"I am excited I found Sendy. Its a good company that is providing jobs for Drivers &amp; Owners like us."'},
            {name:'Miriam', role: "Van Owner", url:'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Testimonial01.png', desc:'"I’m doing very well with Sendy! I did a great delivery to Lamu and back just yesterday!"'},
            {name:'George', role: "Motorcycle Driver & Owner", url:'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Testimonial02.png', desc:'"Because of Sendy, things are not as hard.  My income has increased from 1 to 2 and life is much simpler."'},
            {name:'Charles', role: "Motorcycle Driver & Owner", url:'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Testimonial03.png', desc:'"I have saved enough to buy another bike because of Sendy &amp; I’m finally free from my debts!" '},
            {name:'John', role: "Pickup Driver", url:'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Testimonial04.png', desc:'"Sendy is good with communication, and they are good people. They keep me very busy!"'},
        ],
        state: true,
        direction: 'slide-fade',
        parentName: null,
        }
        },

    computed: {
        nameDisplayer(){
            return this.$store.state.parentName
        }
    },

    methods: {
        next() {
            this.direction = 'slide-fade-left'
            var namer = this.imgs[0]
            this.imgs.splice(4,0,namer)
            this.imgs.splice(0,1)
            var namerA = this.imgs1[0]
            this.imgs1.splice(5,0,namerA)
            this.imgs1.splice(0,1)
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 100)
            
        },
        previous() {
            this.direction = 'slide-fade-right'           
            var namer1 = this.imgs[3]
            this.imgs.splice(0,0,namer1)//adds on element to the front of the array 
            this.imgs.splice(4,1)
            var namer1A = this.imgs1[4]
            this.imgs1.splice(0,0,namer1A)//adds on element to the front of the array 
            this.imgs1.splice(5,1)
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 100)
        }
    },
    created() {
        this.parentName = this.nameDisplayer
    }
}
</script>

<style>

</style>
