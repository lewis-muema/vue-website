<template>
  <div class="thika-details">
    <Upper />
    <CityImg />
    <div class="cities-details-minor">
      <p class="cities-desc-head">We are in Thika!</p>
      <p class="cities-desc-body">Now offering door-to-door delivery services in Thika and between cities.</p>
      <button class="cities-sign-up-button color-white bg-orange bc-orange open-sans block center-block" type="button" onclick="location.href='https://app.sendyit.com/biz/auth/page/location';">SIGN UP</button>
    </div>
    <Lower />
    <div class="kitenge-divider"></div>
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';
import Upper from './Upper.vue';
import Lower from './Lower.vue';
import CityImg from './CityImg.vue';

export default {
  components: {
    Upper,
    Lower,
    CityImg,
  },
  data() {
    return {
      parentName: 'Thika',
    };
  },
  computed: {
    nameDisplayer() {
      return this.$store.state.parentName;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
      this.mixTrackPage();
    });
  },
  created() {
    this.$store.commit({
      type: 'changeParentName',
      pName: this.parentName,
    });
  },
  methods: {
    mixTrackPage() {
      mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
      mixpanel.track('Thika Page', {
        'landing page version': 'website',
      });
    },
  },
};
</script>

<style></style>
