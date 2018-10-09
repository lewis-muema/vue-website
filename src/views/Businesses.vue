<template>
    <div class="businesses-section">
        <p class="biz-header">Over 50k+ users and 3k+ businesses trust Sendy</p>
    <div class="businesses-container">
    <span class= "arrows-biz"><img src="https://images.sendyit.com/website/driver/left_scroll_orange.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" @click="previous" class="arrow-left"></span>
        <div class="biz-tabs-holder">
        
        <span class="biz-carousel">
        <transition :name ="direction">   
            <div v-if="pos == 1 && state == true" class="biz-imgholder">
            <img :src= "imgs1[0].url" class="biz-img">
            <img :src= "imgs1[1].url" class="biz-img">
            <img :src= "imgs1[2].url" class="biz-img">
            <img :src= "imgs1[3].url" class="biz-img">
            <img :src= "imgs1[4].url" class="biz-img">
            </div>
        </transition>
        <transition :name ="direction">
            <div v-if="pos == 2 && state == true" class="biz-imgholder">
            <img :src= "imgs2[0].url" class="biz-img">
            <img :src= "imgs2[1].url" class="biz-img">
            <img :src= "imgs2[2].url" class="biz-img">
            <img :src= "imgs2[3].url" class="biz-img">
            <img :src= "imgs2[4].url" class="biz-img">
            </div>
        </transition>
        <transition :name ="direction">
            <div v-if="pos == 3 && state == true" class="biz-imgholder">
            <img :src= "imgs3[0].url" class="biz-img">
            <img :src= "imgs3[1].url" class="biz-img">
            <img :src= "imgs3[2].url" class="biz-img">
            <img :src= "imgs3[3].url" class="biz-img">
            <img :src= "imgs3[4].url" class="biz-img">
            </div>
        </transition>
        </span>
        
        </div>
    <span class= "arrows-biz"><img src="https://images.sendyit.com/website/driver/right_scroll_orange.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" @click="next" class="arrow-right"></span>
    </div>
    <button class="get-started-button-bottom" type="button" onclick="location.href='https://apptest.sendyit.com/get_started';">GET STARTED</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        imgs1: [
            {name:'safaricom', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-14.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'multichoice', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'kenafric', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-02.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'haltons', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-03.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'bidco', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-04.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'}
        ],
        imgs2: [
            {name:'goodlife', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-10.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'toyota', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-07.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'envirofit', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-06.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'m-kopa', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-11.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'doshi', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-08.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'}
        ],
        imgs3: [
            {name:'m-kopa', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-11.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'doshi', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-08.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'davis&shirtliff', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-09.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'crown', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-05.jpg?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'},
            {name:'highlands', url:'https://images.sendyit.com/website/partnerbrands/PartnerBrands-12.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16'}
        ],
        state: true,
        direction: 'slide-fade',
        
        pos: 1
        }
        },
    methods: {
        next() {
            this.direction = 'slide-fade-left'
            if(this.pos < '3'){
                var newPos = this.pos + 1
                this.pos = newPos
            }
            else{
                this.pos = 1
            }
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 100) 
        },
        previous() {
            this.direction = 'slide-fade-right'
            if(this.pos < '4' && this.pos > 1){
                var newPos = this.pos - 1
                this.pos = newPos
            }
            else{
                this.pos = 3
            }
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 100) 
            
        },
        counter(){
            
            
        
        }
    }
}
</script>

<style>

</style>
