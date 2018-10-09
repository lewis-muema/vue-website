<template>
    <div :class="sectionTitle">
        <div class="info-bar">
            <p class="lower-headers">Info</p>
            <router-link to="/" class="lower-links">Home</router-link><br>
            <router-link to="/API" class="lower-links">API</router-link><br>
            <a href="" class="lower-links">Cities</a>
            <p class="copyright">© Sendy 2018. All rights reserved.</p>
        </div>
        <div class="company-bar">
            <p class="lower-headers">Company</p>
            <a href="" class="lower-links">Careers</a><br>
            <a href="" class="lower-links">Blog</a><br>
            <a href="" class="lower-links">Drivers</a><br>
            <a href="" class="lower-links">Driver login</a>
        </div>
        <div class="contact-bar">
            <p class="lower-headers">contact</p>
            <a href="" class="lower-links">Help & Support</a><br>
            <a href="" class="lower-links">Facebook</a><br>
            <a href="" class="lower-links">Twitter</a><br>
            <a href="" class="lower-links">LinkedIn</a><br>
            <a href="" class="lower-links">Medium</a>
        </div>
        <div class="policies-bar">
            <p class="lower-headers">Policies</p>
            <a href="" class="lower-links">Terms of Service</a><br>
            <a href="" class="lower-links">Privacy</a><br>
            <a href="" class="lower-links">Driver Privacy</a>
        </div>
        <div class="apps-bar">
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
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            parentName: null,
            sectionTitle: null
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
    if(this.parentName == 'Home'){
                this.sectionTitle = 'lower-section-orange'
            }
            else if(this.parentName == 'API'){
                this.sectionTitle = 'lower-section-blue'
            }
    }


}
</script>

<style>

</style>
