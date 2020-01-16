<template>
  <div class="API-page">
    <Upper />
    <div class="center-api centerX centerY flex">
      <div class="desc-api center-text color-white">
        <p class="api-head">Delivery for Platforms and E-commerce</p>
        <p class="api-par">A set of unified APIs and tools to instantly enable you to request and manage package delivery for your <br />platforms with integrated code samples, debugging and automated testing.</p>
        <span class="">
          <router-link to="/publicapi" class=""
            ><div class="get-started-api" type="button">
              GET STARTED
            </div></router-link
          >
        </span>
      </div>
    </div>
    <Lower />
    <div class="kitenge-divider"></div>
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';
import Upper from './Upper';
import Lower from './Lower';

export default {
  components: {
    Upper,
    Lower,
  },
  data() {
    return {
      parentName: 'API',
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
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
      this.mixTrackPage();
    });
  },
  methods: {
    mixTrackPage() {
      mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
      mixpanel.track('API Page', {
        'landing page version': 'website',
      });
    },
  },
};
</script>

<style></style>
