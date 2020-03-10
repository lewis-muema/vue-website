import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueGtm from 'vue-gtm';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: 'UA-50235468-1',
  linkers: ['sendyit.com', 'sendy.co.ke', 'growth.sendyit.com', 'app.sendyit.com'],
  router,
  debug: {
    enable: !isProd,
    sendHitTask: isProd,
  },
});

Vue.use(VueGtm, {
  id: 'GTM-56KF6PL', // Your GTM ID
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  router,
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
