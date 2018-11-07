<template>
<div class="home-section">

<div class="text-section" v-if="windowWidth > '768'" :style= "{left: newLeft + '%'}">
    <h3 class="home-text-bold">The Solution for <br>All your deliveries</h3>
        <p class="home-text-regular">Move anything<br>from point A to B at the<br>touch of a button.<br>Simply. Transparently.</p>
            <div class="get-started-button">
                <span class="">
                    <button class="get-started-button" type="button" onclick="location.href='https://apptest.sendyit.com/get_started';">GET STARTED</button>
                </span>
            </div>
            <div class="app-links">
                <p class="app-links-text" id="app-links-text-size">Experience Sendy on any device</p>                
                    <span class="">
                        <a onclick="mixpane_register_on_personal('Google Play Link')" href="https://play.google.com/store/apps/details?id=com.sendy.co.ke.sendyy&amp;hl=en">
                            <img class="playstore_home_view" src="https://images.sendyit.com/website/home/googleplayicon.png">
                        </a>
                    </span>
                    <span class="">
                        <a onclick="mixpane_register_on_personal('Apple App Store Link')" href="https://itunes.apple.com/us/app/sendy-delivery-app/id1088688361?ls=1&amp;mt=8">
                            <img class="appstore_home_view" src="https://images.sendyit.com/website/home/appstoreicon.png">
                        </a>
                    </span>
                    <span class="">
                        <a href="https://app.sendyit.com/biz/">
                            <img class="webplatform_home_view" src="https://images.sendyit.com/website/home/browsericon.png">
                        </a>
                    </span>  
            </div>
</div>

<div class="video-section" v-if="windowWidth > '768'" :style= "{right: newLeft + '%' , width: newWidth + '%'}" id="vidouter">
    <div class="phone-video-section">
        <img class="home-video-show-mobile-image" src="https://images.sendyit.com/website/home/mobile_frame_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
            <video class="home-video-show-mobile-video" loop="yes" muted="" autoplay="true" playsinline="" preload="true" src="https://images.sendyit.com/website/home/mobile_video_01.mp4?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" poster="https://images.sendyit.com/website/home/mobile_first_image_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" width="164.347826087px" __idm_id__="140516354"></video>
    </div>
    <div class="desktop-video-section">
        <img class="home-video-show-desktop-image" src="https://images.sendyit.com/website/home/laptop_frame_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16">
            <video class="home-video-show-desktop-video" id="vid" loop="yes" muted="" autoplay="true" playsinline="" preload="true" src="https://images.sendyit.com/website/home/laptop_video_01.mp4?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" poster="https://images.sendyit.com/website/home/laptop_first_image_01.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" width="687.4183976261px" __idm_id__="140516353"></video>
            
    </div>
</div>
<div class="text-section-mobile" v-if="windowWidth <= '768'">
    <h3 class="home-text-bold" id="bold-mobile">The Solution for <br>All your deliveries</h3>
    <p class="home-text-regular" id="regular-mobile">Move anything from point A to B at<br>the touch of a button.<br>Simply. Transparently.</p>
    <button class="get-started-button" id="button-mobile" type="button" onclick="location.href='https://apptest.sendyit.com/get_started';">GET STARTED</button>
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
