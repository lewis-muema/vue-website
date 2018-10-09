<template>
    <div class="reviews-section">
        <div class="partnerships">
            <p class="partner-head">Partnerships</p>
            <p class="partner-body">We believe in the power of partnership. Together we will unlock Africa’s potential.</p>
        </div>
        <div class="reviews-container">
        <span class= "arrows"><img src="https://images.sendyit.com/website/driver/left_scroll_white.png" @click="previous" class="arrow-left"></span>
        <div class="tabs-holder">
        <transition :name ="direction">
        <span class="carousel-images-left" v-if="state == true" >
            <div class="imgholder-left">
            <img :src= "imgs[0].url" class="review-left">
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
            <img :src= "imgs[1].url" class="review-center">
            </div>
            <div class="description-center">
                <p class="desc"> {{ imgs[1].name }} </p>
                <p class="desc">Customer</p>
                <p class="desc-par"> {{ imgs[1].desc }} </p>
            </div>
        </span>
        </transition>
        <transition :name="direction" >
        <span class="carousel-images-right" v-if="state == true">
            <div class="imgholder-right">
            <img :src= "imgs[2].url" class="review-right">
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
        state: true,
        direction: 'slide-fade'
        }
        },
    methods: {
        next() {
            this.direction = 'slide-fade-left'
            var namer = this.imgs[0]
            this.imgs.splice(4,0,namer)
            this.imgs.splice(0,1)
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
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 100)
        }
    }
}
</script>

<style>

</style>
