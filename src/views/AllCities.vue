<template>
  <div class="all-cities">
    <Upper />
    <CityImg />
    <div class="cities-details" :style="{ width: newWidth + '%', marginLeft: newLeft + '%' }">
      <p class="cities-details-head center-text">
        Connecting you to Delivery Service Partners across Kenya
      </p>
      <div class="cities-row grid">
        <div class="cities-tab center-text">
          <p class="cities-tab-head center-text color-orange">Nairobi</p>
          <router-link to="/cities/nairobi" class="cities-links">Westlands</router-link><br />
          <router-link to="/cities/nairobi" class="cities-links">Ngong Road</router-link><br />
          <router-link to="/cities/nairobi" class="cities-links">Mombasa Road</router-link><br />
          <router-link to="/cities/nairobi" class="cities-links">Eastlands</router-link><br />
          <router-link to="/cities/nairobi" class="cities-links">Thika Road</router-link><br />
        </div>
        <div class="cities-tab center-text">
          <p class="cities-tab-head center-text color-orange">Thika</p>
          <router-link to="/cities/thika" class="cities-links">Section nine</router-link><br />
          <router-link to="/cities/thika" class="cities-links">Juakali</router-link><br />
          <router-link to="/cities/thika" class="cities-links">Madharau Estate</router-link><br />
          <router-link to="/cities/thika" class="cities-links">Makongeni</router-link><br />
          <router-link to="/cities/thika" class="cities-links">Kimathi Estate</router-link><br />
        </div>
        <div class="cities-tab center-text">
          <p class="cities-tab-head center-text color-orange">Kisumu</p>
          <router-link to="/cities/kisumu" class="cities-links">Otonglo</router-link><br />
          <router-link to="/cities/kisumu" class="cities-links">Industrial Area</router-link><br />
          <router-link to="/cities/kisumu" class="cities-links">Manyatta</router-link><br />
          <router-link to="/cities/kisumu" class="cities-links">Nyamasaria</router-link><br />
          <router-link to="/cities/kisumu" class="cities-links">Kondele</router-link><br />
        </div>
        <div class="cities-tab center-text">
          <p class="cities-tab-head center-text color-orange">Mombasa</p>
          <router-link to="/cities/mombasa" class="cities-links">Nyali</router-link><br />
          <router-link to="/cities/mombasa" class="cities-links">Mtwapa</router-link><br />
          <router-link to="/cities/mombasa" class="cities-links">Changamwe</router-link><br />
          <router-link to="/cities/mombasa" class="cities-links">Likoni</router-link><br />
          <router-link to="/cities/mombasa" class="cities-links">Bamburi</router-link><br />
        </div>
      </div>
      <button class="cities-sign-up-button color-white bg-orange bc-orange open-sans block center-block" type="button" onclick="location.href='https://app.sendyit.com/biz/auth/page/location';">
        SIGN UP
      </button>
    </div>
    <Lower />
    <div class="kitenge-divider" @click="scroll"></div>
  </div>
</template>

<script>
import Upper from './Upper';
import Lower from './Lower';
import CityImg from './CityImg';

export default {
  components: {
    Upper,
    Lower,
    CityImg,
  },
  data() {
    return {
      parentName: 'AllCities',
      windowWidth: null,
      newWidth: null,
      newLeft: null,
    };
  },
  computed: {
    nameDisplayer() {
      return this.$store.state.parentName;
    },
  },
  created() {
    this.$store.commit({
      type: 'changeParentName',
      pName: this.parentName,
    });
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    window.scrollTo(0, -40);
    this.$nextTick(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
    });
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      const range = 2560 - this.windowWidth;
      const quotient = (range * 13.5) / 1536;
      this.newWidth = 100 - 2 * (19 - quotient);
      this.newLeft = 19 - quotient;
    },
  },
};
</script>

<style></style>
