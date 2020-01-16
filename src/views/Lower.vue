<template>
  <div :class="sectionTitle">
    <table class="section">
      <tr>
        <td>
          <div class="tabs-container grid">
            <div class="lower-cols">
              <p class="lower-headers color-white open-sans">Info</p>
              <router-link to="/" class="lower-links">Home</router-link><br />
              <router-link to="/API" class="lower-links">API</router-link><br />
              <router-link to="/cities" class="lower-links">Cities</router-link><br />
              <router-link to="/e-commerce" class="lower-links">E-Commerce</router-link><br />
              <router-link to="/enterprise" class="lower-links">Enterprise</router-link><br />
              <p class="copyright color-white relative" v-if="windowWidth > '768'">
                © Sendy 2018. All rights reserved.
              </p>
            </div>
            <div class="lower-cols">
              <p class="lower-headers color-white open-sans">Company</p>
              <router-link to="/careers" class="lower-links">Careers</router-link><br />
              <router-link to="/blogpage" class="lower-links">Blog</router-link><br />
              <router-link to="/partners" class="lower-links">Drivers</router-link><br />
              <router-link to="/driverslogin" class="lower-links">Owners login</router-link>
            </div>
            <div class="lower-cols">
              <p class="lower-headers color-white open-sans">Contact</p>
              <router-link to="/help&support" class="lower-links">Help & Support</router-link><br />
              <router-link to="/facebook" class="lower-links">Facebook</router-link><br />
              <router-link to="/twitter" class="lower-links">Twitter</router-link><br />
              <router-link to="/linkedin" class="lower-links">LinkedIn</router-link><br />
              <router-link to="/medium" class="lower-links">Medium</router-link>
              <p class="copyright color-white relative" v-if="windowWidth <= '768'">
                © Sendy 2018. All rights reserved.
              </p>
            </div>
            <div class="lower-cols">
              <p class="lower-headers color-white open-sans">Policies</p>
              <router-link to="/terms" class="lower-links">Terms of Service</router-link><br />
              <router-link to="/privacy" class="lower-links">Privacy</router-link><br />
              <router-link to="/driverprivacy" class="lower-links">Driver Privacy</router-link><br />
            </div>
          </div>
        </td>
        <td class="apps-row">
          <div class="apps-bar" v-if="windowWidth > '768'">
            <span class="">
              <router-link to="/playstore">
                <img class="playstore_home_view lower-playstore section" src="https://images.sendyit.com/website/home/googleplayicon.png" />
              </router-link>
            </span>
            <span class="">
              <router-link to="/appstore">
                <img class="appstore_home_view section" src="https://images.sendyit.com/website/home/appstoreicon.png" />
              </router-link>
            </span>
            <div class="social-btns">
              <iframe class="fbton" src="https://www.facebook.com/plugins/like.php?href=https://web.facebook.com/Sendyit/&amp;layout=button&amp;show_faces=false&amp;share=false&amp;width=50&amp;action=like&amp;font=verdana&amp;colorscheme=light" allowtransparency="true" frameborder="0" scrolling="no"> </iframe>
              <div class="twitter-btn">
                <router-link to="/follow" class="twitter-follow-button twitter-btn" data-show-screen-name="false" data-show-count="false"><img class="twtt" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/twitterr.png"/></router-link>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="apps-bar" v-if="windowWidth <= '430' && parentName == 'API'">
            <span class="" v-if="android == true" @click="mixTrackElements('Google Play Link')">
              <router-link to="/playstore">
                <img class="playstore_home_view lower-playstore" src="https://images.sendyit.com/website/home/googleplayicon.png" />
              </router-link>
            </span>
            <span class="" v-if="IOS == true" @click="mixTrackElements('Apple App Store Link')">
              <router-link to="/appstore">
                <img class="appstore_home_view" src="https://images.sendyit.com/website/home/appstoreicon.png" />
              </router-link>
            </span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';

export default {
  data() {
    return {
      android: null,
      IOS: null,
      web: null,
      parentName: null,
      sectionTitle: null,
      windowWidth: null,
      newWidth: null,
      blue: [],
      orange: ['Home', 'AllCities', 'Nairobi', 'Mombasa', 'Kisumu', 'Thika', 'Partners', 'Careers', 'Merchant', 'Enterprise'],
    };
  },
  computed: {
    nameDisplayer() {
      return this.$store.state.parentName;
    },
  },
  created() {
    /* eslint-disable */
    (function(d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    /* eslint-enable */
    this.parentName = this.nameDisplayer;
    /* prettier-ignore */
    if (this.orange.includes(this.parentName)) {
      this.sectionTitle = 'lower-section-orange';
    /* prettier-ignore */
    } else {
      this.sectionTitle = 'lower-section-blue';
    }
    /* prettier-ignore-end */
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.detectAndroid();
    this.detectIOS();
    this.detectWeb();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      const range = 2560 - this.windowWidth;
      const quotient = (range * 13.5) / 1536;
      this.newWidth = 100 - (19 - quotient);
    },
    detectAndroid() {
      if (navigator.userAgent.match(/Android/i)) {
        this.android = true;
      }
    },
    detectIOS() {
      /* prettier-ignore */
      if (navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
        this.IOS = true;
      }
    },
    detectWeb() {
      if (this.android === false && this.IOS === false) {
        this.web = true;
      }
    },
    mixTrackElements(data) {
      mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
      mixpanel.track(data, {
        'landing page version': 'website',
      });
    },
  },
};
</script>

<style></style>
