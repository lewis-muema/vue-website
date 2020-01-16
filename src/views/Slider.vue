<template>
  <div class="businesses-container flex centerX centerY">
    <span class="arrows-biz"><img src="https://images.sendyit.com/website/driver/left_scroll_orange.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" @click="previous" class="arrow-left"/></span>
    <div class="slider-holder overflow">
      <span class="slider-carousel">
        <div class="slider-imgholder">
          <div class="partner-imgholder1" :style="{ left: leftDist + '%' }">
            <img :src="imgs1[0].url" class="partner-img1 block center-block" :style="{ width: newLeft + '%' }" />
            <p class="slider-par center-text">{{ imgs1[0].name }}</p>
          </div>
          <div class="partner-imgholder1" :style="{ left: leftDist + '%' }">
            <img :src="imgs1[1].url" class="partner-img1 block center-block" :style="{ width: newLeft + '%' }" />
            <p class="slider-par center-text">{{ imgs1[1].name }}</p>
          </div>
          <div class="partner-imgholder1" :style="{ left: leftDist + '%' }">
            <img :src="imgs1[2].url" class="partner-img1 block center-block" :style="{ width: newLeft + '%' }" />
            <p class="slider-par center-text">{{ imgs1[2].name }}</p>
          </div>
          <div class="partner-imgholder1" :style="{ left: leftDist + '%' }">
            <img :src="imgs1[3].url" class="partner-img1 block center-block" :style="{ width: newLeft + '%' }" />
            <p class="slider-par center-text">{{ imgs1[3].name }}</p>
          </div>
          <div class="partner-imgholder1" :style="{ left: leftDist + '%' }">
            <img :src="imgs1[4].url" class="partner-img1 block center-block" :style="{ width: newLeft + '%' }" />
            <p class="slider-par center-text">{{ imgs1[4].name }}</p>
          </div>
        </div>
      </span>
    </div>
    <span class="arrows-biz"><img src="https://images.sendyit.com/website/driver/right_scroll_orange.png?v=1LeOeCUTAAAAAGs99manIwc7kghOUdgkr_rnuoCE16" @click="next" class="arrow-right"/></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs1: [
        { name: '1. Recieve delivery orders', url: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/App_Step1.png' },
        { name: '2. View extra details', url: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/App_Step2.png' },
        { name: '3. Accept order & pickup delivery', url: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/App_Step3.png' },
        { name: '4. Deliver goods to destination', url: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/App_Step4.png' },
        { name: '5. Withdraw payments weekly', url: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/App_Step5.png' },
      ],
      state: true,
      direction: 'slide-fade',
      leftDist: 0,
      newLeft: null,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    next() {
      if (this.leftDist > '-22' && this.leftDist < '1') {
        this.leftDist = this.leftDist - 20;
      }
    },
    previous() {
      if (this.leftDist > '-50' && this.leftDist < '0') {
        this.leftDist = this.leftDist + 20;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
      const range = 2560 - window.innerWidth;
      const quotient = (range * 35) / 1120;
      const newWidth = 45 + quotient;
      if (window.innerWidth < 1440) {
        this.newLeft = 80;
      } else {
        this.newLeft = newWidth;
      }
    },
  },
};
</script>

<style></style>
