<template>
  <div class="carousel-holder overflow section">
    <div class="partners-carousel relative section">
      <div :class="{ none: pos == '1' }" class="partner-imgholder absolute">
        <img v-if="parentName == 'Partners' && actualWidth > 430" :src="imgs1" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Partners' && actualWidth <= 430" :src="imgz1" class="partner-img" :style="{ width: lessWidth + 'px', marginLeft: '-40px' }" />
        <img v-if="parentName == 'Careers' && actualWidth > 430" :src="img1" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Careers' && actualWidth <= 430" :src="img1" class="partner-img" :style="{ width: windowWidth + 'px', position: 'absolute', left: '-394px' }" />
      </div>
      <div :class="{ none: pos == '2' }" class="partner-imgholder absolute">
        <img v-if="parentName == 'Partners' && actualWidth > 430" :src="imgs2" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Partners' && actualWidth <= 430" :src="imgz2" class="partner-img" :style="{ width: lessWidth + 'px' }" />
        <img v-if="parentName == 'Careers' && actualWidth > 430" :src="img2" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Careers' && actualWidth <= 430" :src="img2" class="partner-img" :style="{ width: windowWidth + 'px', position: 'absolute', left: '-890px' }" />
      </div>
      <div :class="{ none: pos == '3' }" class="partner-imgholder absolute">
        <img v-if="parentName == 'Partners' && actualWidth > 430" :src="imgs3" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Partners' && actualWidth <= 430" :src="imgz3" class="partner-img" :style="{ width: lessWidth + 'px' }" />
        <img v-if="parentName == 'Careers' && actualWidth > 430" :src="img3" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Careers' && actualWidth <= 430" :src="img3" class="partner-img" :style="{ width: windowWidth + 'px', position: 'absolute', left: '-200px' }" />
      </div>
      <div :class="{ none: pos == '4' }" class="partner-imgholder absolute">
        <img v-if="parentName == 'Partners' && actualWidth > 430" :src="imgs4" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Partners' && actualWidth <= 430" :src="imgz4" class="partner-img" :style="{ width: lessWidth + 'px', marginLeft: '-100px' }" />
        <img v-if="parentName == 'Careers' && actualWidth > 430" :src="img4" class="partner-img" :style="{ width: windowWidth + 'px' }" />
        <img v-if="parentName == 'Careers' && actualWidth <= 430" :src="img4" class="partner-img" :style="{ width: windowWidth + 'px', position: 'absolute', left: '-140px' }" />
      </div>
      <div class="slideshow-comments absolute">
        <p class="slideshow-comments-head color-white" v-if="parentName == 'Partners'">Make More Money</p>
        <p class="slideshow-comments-head color-white" v-if="parentName == 'Careers'">Ready To Step Up?</p>
        <p class="slideshow-comments-par color-white" v-if="parentName == 'Partners'">Partner with Sendy!</p>
        <p class="slideshow-comments-par color-white" v-if="parentName == 'Careers'">
          Exceed expectations, one<br />
          delivery at a time.
        </p>
        <router-link to="/onboarding"><div class="slideshow-comments-button bc-orange bg-orange centerY centerX flex open-sans color-white sbtn" v-if="parentName == 'Partners'" @click="mixTrackElements('Apply Now')">APPLY NOW</div></router-link>
        <div
          class="slideshow-comments-button bc-orange bg-orange  centerX centerY flex open-sans color-white sbtn"
          v-if="parentName == 'Careers'"
          @click="
            scrollDown;
            mixTrackElements('Join Sendy');
          "
        >
          JOIN
        </div>
      </div>
      <div class="pointer-holder absolute flex centerX">
        <div class="pointer" @click="first"><div class="filler" v-if="pos == '1'"></div></div>
        <div class="pointer" @click="second"><div class="filler" v-if="pos == '2'"></div></div>
        <div class="pointer" @click="third"><div class="filler" v-if="pos == '3'"></div></div>
        <div class="pointer" @click="fourth"><div class="filler" v-if="pos == '4'"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';

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
      imgz1: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/driver_mobile_slider_5.jpg',
      imgz2: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/driver_mobile_slider_2.jpg',
      imgz3: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/driver_mobile_slider_4.jpg',
      imgz4: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/driver_mobile_slider_3.jpg',
      windowWidth: null,
      carouselWidth: null,
      img1: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_01.jpg',
      img2: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_02.jpg',
      img3: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_16.jpg',
      img4: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/careers/careers_slider_04.jpg',
      actualWidth: null,
      lessWidth: 450,
    };
  },
  computed: {
    nameDisplayer() {
      return this.$store.state.parentName;
    },
  },
  created() {
    this.parentName = this.nameDisplayer;
    const self = this;
    setInterval(() => {
      if (this.pos < '4') {
        const newPos = this.pos + 1;
        self.pos = newPos;
      } else {
        this.pos = 1;
      }
      // alert(this.pos)
    }, 15000);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.actualWidth = window.innerWidth;
      if (window.innerWidth > 430) {
        this.windowWidth = window.innerWidth + 20;
      } else {
        this.windowWidth = 1275;
      }

      this.carouselWidth = this.windowWidth;
    },
    first() {
      this.pos = 1;
    },
    second() {
      this.pos = 2;
    },
    third() {
      this.pos = 3;
    },
    fourth() {
      this.pos = 4;
    },
    scrollDown() {
      const distance = 2200;
      const duration = 1000;
      const initialY = document.body.scrollTop;
      const y = initialY + distance;
      const baseY = (initialY + y) * 0.5;
      const difference = initialY - baseY;
      const startTime = performance.now();

      function step() {
        let normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
        if (normalizedTime < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
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
