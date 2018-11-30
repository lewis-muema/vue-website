<template>
    <div class="businesses-section">
        <p class="biz-header center-text open-sans">Over 50k+ users and 3k+ businesses trust Sendy</p>
    <div class="businesses-container flex centerX centerY">
    <span class= "arrows-biz relative flex centerX"><img src="https://images.sendyit.com/website/driver/left_scroll_orange.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" @click="previous" class="arrow-left"></span>
        <div class="biz-tabs-holder relative overflow">
        
        <span class="biz-carousel" v-if="windowWidth > 1200">
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

        <span class="biz-carousel" v-if="windowWidth <= 1200">
        <transition :name ="direction">   
            <div v-if="pos == 1 && state == true" class="biz-imgholder">
            <img :src= "imgs1[0].url" class="biz-img">
            <img :src= "imgs1[1].url" class="biz-img">
            <img :src= "imgs1[2].url" class="biz-img">
            </div>
        </transition>
        <transition :name ="direction">
            <div v-if="pos == 2 && state == true" class="biz-imgholder">
            <img :src= "imgs1[3].url" class="biz-img">
            <img :src= "imgs1[4].url" class="biz-img">
            <img :src= "imgs2[0].url" class="biz-img">
            </div>
        </transition>
        <transition :name ="direction">
            <div v-if="pos == 3 && state == true" class="biz-imgholder">
            <img :src= "imgs2[1].url" class="biz-img">
            <img :src= "imgs2[2].url" class="biz-img">
            <img :src= "imgs2[3].url" class="biz-img">
            </div>
        </transition>
        <transition :name ="direction">
            <div v-if="pos == 4 && state == true" class="biz-imgholder">
            <img :src= "imgs2[4].url" class="biz-img">
            <img :src= "imgs3[0].url" class="biz-img">
            <img :src= "imgs3[1].url" class="biz-img">
            </div>
        </transition>
        <transition :name ="direction">
            <div v-if="pos == 5 && state == true" class="biz-imgholder">
            <img :src= "imgs3[2].url" class="biz-img">
            <img :src= "imgs3[3].url" class="biz-img">
            <img :src= "imgs3[4].url" class="biz-img">
            </div>
        </transition>        
        </span>
        
        </div>
    <span class= "arrows-biz relative flex centerX"><img src="https://images.sendyit.com/website/driver/right_scroll_orange.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" @click="next" class="arrow-right"></span>
    </div>
    <router-link to="/getstarted" v-if="windowWidth > '768'"><div class="get-started-button-bottom bg-orange bc-orange open-sans color-white center-block flex centerX centerY" type="button">GET STARTED</div></router-link>
    <img v-if="windowWidth <= '768' && android == true" src="https://images.sendyit.com/website/home/googleplayicon.png" class="lower-playstore-button center-block block">
    <img v-if="windowWidth <= '768' && IOS == true" src="https://images.sendyit.com/website/home/appstoreicon.png" class="lower-appstore-button center-block block">
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
        windowWidth: null,
        pos: 1,
        android: null,
        IOS: null,
        }
        },
    methods: {
        next() {
            this.direction = 'slide-fade-left'
            var newPos = this.pos + 1
            if (this.windowWidth > 1200){
            if(this.pos < '3'){
                this.pos = newPos
            }
            else{
                this.pos = 1
            }
            }
            else{
            if(this.pos < '5'){
                this.pos = newPos
            }
            else{
                this.pos = 1
            }
            }
            
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 200) 
        },
        previous() {
            this.direction = 'slide-fade-right'
            var newPos = this.pos - 1
            if(this.windowWidth <= 1200){
            if(this.pos < '4' && this.pos > 1){
                this.pos = newPos
            }
            else{
                this.pos = 3
            }
            }
            else{
            if(this.pos < '6' && this.pos > 1){
                this.pos = newPos
            }
            else{
                this.pos = 5
            }
            }
            
            this.state = false
            var self = this;
            setTimeout(function(){
                self.state = true
            }, 200) 
            
        },
        handleResize() {
        this.windowWidth = window.innerWidth;
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
        },
        runall(){
            this.detectAndroid();
            this.detectIOS();
        }
    },
    computed: {
        nameDisplayer() {
            return this.$store.state.parentName
            
        }
    },
    created() {
        this.parentName = this.nameDisplayer
        window.addEventListener('resize', this.handleResize)
            this.handleResize(); 
            this.detectAndroid();
            this.detectIOS();            
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style>

</style>
