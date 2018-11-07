<template>
    <div class="carousel-holder">
    <div class="partners-carousel">
   
            <div :class="{'none': pos == '1'}" class="partner-imgholder">
            <img v-if="parentName == 'Partners'" :src= "imgs1" class="partner-img" :style= "{width: windowWidth + 'px'}">
            <img v-if="parentName == 'Careers'" :src= "img1" class="partner-img" :style= "{width: windowWidth + 'px'}">
            </div>
            <div :class="{'none': pos == '2'}" class="partner-imgholder">
            <img v-if="parentName == 'Partners'" :src= "imgs2" class="partner-img" :style= "{width: windowWidth + 'px'}">
            <img v-if="parentName == 'Careers'" :src= "img2" class="partner-img" :style= "{width: windowWidth + 'px'}">
            </div>
            <div :class="{'none': pos == '3'}" class="partner-imgholder">
            <img v-if="parentName == 'Partners'" :src= "imgs3" class="partner-img" :style= "{width: windowWidth + 'px'}">
            <img v-if="parentName == 'Careers'" :src= "img3" class="partner-img" :style= "{width: windowWidth + 'px'}">
            </div>
            <div :class="{'none': pos == '4'}" class="partner-imgholder">
            <img v-if="parentName == 'Partners'" :src= "imgs4" class="partner-img" :style= "{width: windowWidth + 'px'}">
            <img v-if="parentName == 'Careers'" :src= "img4" class="partner-img" :style= "{width: windowWidth + 'px'}">
            </div>
            <div class="slideshow-comments">
            <p class="slideshow-comments-head" v-if="parentName == 'Partners'">Make More Money</p>
            <p class="slideshow-comments-head" v-if="parentName == 'Careers'">Ready To Step Up?</p>
            <p class="slideshow-comments-par" v-if="parentName == 'Partners'">Partner with Sendy!</p>
            <p class="slideshow-comments-par" v-if="parentName == 'Careers'">Exceed expectations, one<br> delivery at a time.</p>
            <button class="slideshow-comments-button" id="sbtn" v-if="parentName == 'Partners'" onclick="location.href='https://partner.sendyit.com/onboarding_portal/';">APPLY NOW</button>
            <button class="slideshow-comments-button" id="sbtn" v-if="parentName == 'Careers'" @click="scrollDown">JOIN</button>
            </div>
            <div class="pointer-holder">
                <div class="pointer" @click="first"><div class="filler" v-if="pos == '1'" ></div></div>
                <div class="pointer" @click="second"><div class="filler" v-if="pos == '2'" ></div></div>
                <div class="pointer" @click="third"><div class="filler" v-if="pos == '3'" ></div></div>
                <div class="pointer" @click="fourth"><div class="filler" v-if="pos == '4'" ></div></div>
    </div>
    </div>
    
    </div>
</template>

<script>
export default {
    data() {
    return {
    parentName: null,
    imgs1: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image1scroll.jpg',
    imgs2: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image2scroll.jpg',
    imgs3: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image3scroll.jpg',
    imgs4: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image4scroll.jpg',
    state: true,
    direction: 'slide-fade-left-car',
    pos: 1,
    windowWidth: null,
    carouselWidth: null,
    img1: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_01.jpg',
    img2: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_02.jpg',
    img3: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_16.jpg',
    img4: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_04.jpg',
    }
},
computed: {
        nameDisplayer() {
            return this.$store.state.parentName;
        }
},
created() {
    this.parentName = this.nameDisplayer
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
        if (window.innerWidth > 430){
            this.windowWidth = window.innerWidth + 20; 
        }else{
            this.windowWidth = 900
        }
        
        this.carouselWidth = this.windowWidth;     
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
    },
    scrollDown(){
    var distance = 2200
    var duration = 1000
    var initialY = document.body.scrollTop;
    var y = initialY + distance;
    var baseY = (initialY + y) * 0.5;
    var difference = initialY - baseY;
    var startTime = performance.now();

    function step() {
        var normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
        if (normalizedTime < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
    }
    }
}
</script>

<style>

</style>
