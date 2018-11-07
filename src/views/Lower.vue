<template>
    <div :class="sectionTitle">
        <table class="tabs-table">
            <tr><td>
        <div class="tabs-container">
        <div class="lower-cols">
            <p class="lower-headers">Info</p>
            <router-link to="/" class="lower-links">Home</router-link><br>
            <router-link to="/API" class="lower-links">API</router-link><br>
            <router-link to="/cities" class="lower-links">Cities</router-link><br>
            <router-link to="/merchant" class="lower-links">Merchant</router-link><br>
            <router-link to="/enterprise" class="lower-links">Enterprise</router-link><br>
            <p class="copyright" v-if="windowWidth > '768'">© Sendy 2018. All rights reserved.</p>
        </div>
        <div class="lower-cols">
            <p class="lower-headers">Company</p>
            <router-link to="/careers" class="lower-links">Careers</router-link><br>
            <a href="" class="lower-links">Blog</a><br>
            <router-link to="/partners" class="lower-links">Drivers</router-link><br>
            <a href="" class="lower-links">Driver login</a>
        </div>
        <div class="lower-cols">
            <p class="lower-headers">Contact</p>
            <a href="" class="lower-links">Help & Support</a><br>
            <a href="" class="lower-links">Facebook</a><br>
            <a href="" class="lower-links">Twitter</a><br>
            <a href="" class="lower-links">LinkedIn</a><br>
            <a href="" class="lower-links">Medium</a>
            <p class="copyright" v-if="windowWidth <= '768'">© Sendy 2018. All rights reserved.</p>
        </div>
        <div class="lower-cols">
            <p class="lower-headers">Policies</p>
            <router-link to="/terms" class="lower-links">Terms of Service</router-link><br>
            <router-link to="/privacy" class="lower-links">Privacy</router-link><br>
            <router-link to="/driverprivacy" class="lower-links">Driver Privacy</router-link><br>
        </div>
        </div></td>
        <td class="apps-row">
        <div class="apps-bar" v-if="windowWidth > '768'">
            <span class="">
                    <a onclick="mixpane_register_on_personal('Google Play Link')" href="https://play.google.com/store/apps/details?id=com.sendy.co.ke.sendyy&amp;hl=en">
                        <img class="playstore_home_view" id="lower-playstore" src="https://images.sendyit.com/website/home/googleplayicon.png">
                    </a>
                    </span>
                    <span class="">
                        <a onclick="mixpane_register_on_personal('Apple App Store Link')" href="https://itunes.apple.com/us/app/sendy-delivery-app/id1088688361?ls=1&amp;mt=8">
                            <img class="appstore_home_view" src="https://images.sendyit.com/website/home/appstoreicon.png">
                        </a>
                    </span>
            <div class="social-btns">
            <iframe id="fbton" src="https://www.facebook.com/plugins/like.php?href=https://web.facebook.com/Sendyit/&amp;layout=button&amp;show_faces=false&amp;share=false&amp;width=50&amp;action=like&amp;font=verdana&amp;colorscheme=light" allowtransparency="true" frameborder="0" scrolling="no">
            </iframe>
            <div class="twitter-btn">
            <a id="twitter-btn" href="https://twitter.com/SendyMobile?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-screen-name="false" data-show-count="false">Follow @SendyMobile</a>
            </div>
            </div>
            
        </div>
            </td></tr>
            <tr><td>
        <div class="apps-bar" v-if="windowWidth <= '430' && parentName == 'API'">
            <span class="" v-if="android == true">
                    <a onclick="mixpane_register_on_personal('Google Play Link')" href="https://play.google.com/store/apps/details?id=com.sendy.co.ke.sendyy&amp;hl=en">
                        <img class="playstore_home_view" id="lower-playstore" src="https://images.sendyit.com/website/home/googleplayicon.png">
                    </a>
                    </span>
                    <span class="" v-if="IOS == true">
                        <a onclick="mixpane_register_on_personal('Apple App Store Link')" href="https://itunes.apple.com/us/app/sendy-delivery-app/id1088688361?ls=1&amp;mt=8">
                            <img class="appstore_home_view" src="https://images.sendyit.com/website/home/appstoreicon.png">
                        </a>
                    </span>
        </div>
            </td></tr>
        </table>    
    </div>
</template>

<script>
export default {
    data(){
        return {
            android: null,
            IOS: null,
            web: null,
            parentName: null,
            sectionTitle: null,
            windowWidth: null
        }
    },
    computed: {
        nameDisplayer() {
            return this.$store.state.parentName
            
        }
    },
    created() {
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
        this.parentName = this.nameDisplayer
    if(this.parentName == 'Home' || this.parentName == 'AllCities' || this.parentName == 'Nairobi' || this.parentName == 'Mombasa' || this.parentName == 'Kisumu' || this.parentName == 'Thika' || this.parentName == 'Partners' || this.parentName == 'Careers' || this.parentName == 'Merchant' || this.parentName == 'Enterprise'){
                this.sectionTitle = 'lower-section-orange'
            }
            else if(this.parentName == 'API' || this.parentName == 'SeniorPortManager' || this.parentName == 'ClientRelationsManager'  || this.parentName == 'AndroidEngineer'  || this.parentName == 'DataAnalyst' || this.parentName == 'QualityAssuranceTester' || this.parentName == 'HeadOfFinance' || this.parentName == 'KisumuCityManager' || this.parentName == 'Terms' || this.parentName == 'Privacy' || this.parentName == 'DriverPrivacy' || this.parentName == 'JuniorOperationsAssociate' || this.parentName == 'HeadOfPartnerOperations'){
                this.sectionTitle = 'lower-section-blue'
            }
        window.addEventListener('resize', this.handleResize)
            this.handleResize();
            this.detectAndroid();
            this.detectIOS();
            this.detectWeb();
    },
    destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
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
    }
    }


}
</script>

<style>

</style>
