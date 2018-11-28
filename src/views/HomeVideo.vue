<template>
<div class="section section__home">

<div class="section__text bottomY absolute" v-if="windowWidth > '768'" :style= "{left: newLeft + '%'}">
    <h3 class="home-text-bold">The Solution for <br>All your deliveries</h3>
        <p class="home-text-regular relative">Move anything<br>from point A to B at the<br>touch of a button.<br>Simply. Transparently.</p>
            <div class="get-started-button bg-orange bc-orange bottomY centerX flex">
                <span class="">
                    <router-link to="/getstarted"><div class="get-started-button bg-orange bc-orange centerY centerX flex open-sans color-white" type="button">GET STARTED</div></router-link>
                </span>
            </div>
            <div class="app-links">
                <p class="app-links-text">Experience Sendy on any device</p>                
                    <span class="">
                        <router-link to="/playstore">
                            <img class="playstore_home_view height" src="https://images.sendyit.com/website/home/googleplayicon.png">
                        </router-link>
                    </span>
                    <span class="">
                        <router-link to="/appstore">
                            <img class="appstore_home_view height" src="https://images.sendyit.com/website/home/appstoreicon.png">
                        </router-link>
                    </span>
                    <span class="">
                        <router-link to="/signup">
                            <img class="webplatform_home_view height" src="https://images.sendyit.com/website/home/browsericon.png">
                        </router-link>
                    </span>  
            </div>
</div>

<div class="video-section absolute overflow" v-if="windowWidth > '768'" :style= "{right: newLeft + '%' , width: newWidth + '%'}">
    <div class="phone-video-section absolute">
        <img class="home-video-show-mobile-image absolute" src="https://images.sendyit.com/website/home/mobile_frame_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
            <video class="home-video-show-mobile-video absolute" loop="yes" muted="" autoplay="true" playsinline="" preload="true" src="https://images.sendyit.com/website/home/mobile_video_01.mp4?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" poster="https://images.sendyit.com/website/home/mobile_first_image_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" width="164.347826087px" __idm_id__="140516354"></video>
    </div>
    <div class="desktop-video-section absolute">
        <img class="home-video-show-desktop-image absolute" src="https://images.sendyit.com/website/home/laptop_frame_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
            <video class="home-video-show-desktop-video absolute" loop="yes" muted="" autoplay="true" playsinline="" preload="true" src="https://images.sendyit.com/website/home/laptop_video_01.mp4?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" poster="https://images.sendyit.com/website/home/laptop_first_image_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" width="687.4183976261px" __idm_id__="140516353"></video>
            
    </div>
</div>
<div class="text-section-mobile block center-block relative center-text color-white" v-if="windowWidth <= '768'">
    <h3 class="home-text-bold bold-mobile color-white">The Solution for <br>All your deliveries</h3>
    <p class="home-text-regular relative regular-mobile section">Move anything from point A to B at<br>the touch of a button.<br>Simply. Transparently.</p>
    <router-link to="/getstarted"><div class="get-started-button centerY flex centerX open-sans center-block bg-white color-black bc-white button-mobile" type="button">GET STARTED</div></router-link>
</div>
</div>
</template>

<script>
export default {
data() {
    return {
    android: null,
    IOS: null,
    web: null,
    windowWidth: null,
    newLeft: null,
    newWidth: null,
    newMargin: null,
    newRight: null
    }
},

created() {
            window.addEventListener('resize', this.handleResize)
            this.detectAndroid();
            this.detectIOS();
            this.detectWeb();
            this.handleResize();            
    },
     destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    methods: {
    detectAndroid() { 
    if( navigator.userAgent.match(/Android/i)){
        this.android = true
        }
    },
    detectIOS() { 
    if( navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)){
        this.IOS = true
        }
    },
    detectWeb() {
    if(this.android == false && this.IOS == false){
        this.web = true

    }
    },
    RunAll() {
    this.detectAndroid();
    this.detectIOS();
    this.detectWeb();
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      var range = 2560 - this.windowWidth
        var quotient = (range * 13.5)/1536
        this.newLeft = 19 - quotient
        var quotient2 = (range * 19)/1120
        this.newWidth = 35 + quotient2
    }
    }
}
</script>

<style>

</style>
