<template>
  <div class="partners-page">
    <Upper />
    <Slideshow />
    <div class="sendy-intro bg-orange color-white center-text">
      <p class="sendy-intro-head">What is Sendy?</p>
      <p class="sendy-intro-body">
        Sendy connects Customers with Drivers to help deliver goods simply and transparently. Customers place orders through the Sendy platform, and Sendy dispatches these orders in real time to available Sendy Drivers.<br /><br />
        As a Sendy Partner, we empower you to make more money with your vehicle. Put your vehicle on our platform, and we'll connect you to more delivery opportunities and access to carrier liablity and Driver accident insurance. Partner with Sendy to increase your income. Let's Deliver!
      </p>
    </div>
    <div class="earnings flex centerX centerY">
      <div class="earnings-container">
        <p class="earnings-head center-text">
          How much can you make with sendy?
        </p>
        <div class="selectors grid">
          <select class="selector-1 open-sans">
            <option value="City">City</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Thika">Thika</option>
          </select>
          <select class="selector-2 open-sans">
            <option value="none">Vehicle</option>
            <option value="Bike">Motorcycle</option>
            <option value="Tuktuk">Tuk-tuk</option>
            <option value="Pickup">Pickup</option>
            <option value="Van">Van</option>
            <option value="Threetruck">3T Truck</option>
            <option value="Fivetruck">5T Truck</option>
            <option value="Tentruck">10T Truck</option>
            <option value="Fourteentruck">14T Truck</option>
            <option value="Twoseventruck">27T Truck</option>
          </select>
          <select class="selector-3 open-sans">
            <option value="0">Time</option>
            <option value="1">1 week</option>
            <option value="4">1 month</option>
            <option value="12">3 months</option>
            <option value="72">6 months</option>
            <option value="154">1 year</option>
          </select>
          <div class="selector-4">
            <button class="calculate-earnings color-white bg-orange bc-orange block center-block open-sans" @click="calculate">
              calculate
            </button>
          </div>
        </div>
        <p class="riders-pay-light center-text" v-if="totalAmount !== null">
          KES <span class="riders-pay"> &nbsp;{{ totalAmount }} /-</span> &nbsp; total
        </p>
        <p class="center-text color-orange" v-if="error !== null">
          {{ error }}
        </p>
      </div>
    </div>
    <div class="how-it-works">
      <p class="how-head center-text">
        How does it work
      </p>
      <Slider />
    </div>
    <carousel />
    <div class="FAQ-section">
      <div class="FAQ-content-holder">
        <p class="FAQ-head">FAQS</p>
        <p class="FAQ-body-bold">What are the requirements to join Sendy?</p>
        <ul class="FAQ-body-light" v-if="windowWidth > 430">
          <li>National ID/Passport</li>
          <li>Valid Certificate of Good Conduct</li>
          <li>Valid Driver’s License</li>
          <li>Motor Vehicle Insurance</li>
          <li>Motor Vehicle Log Book/Proof of Ownership</li>
          <li>GPS enabled Android smartphone</li>
        </ul>
        <div class="FAQ-body-light" v-if="windowWidth <= 430">
          <p>
            National ID/Passport<br />
            Valid Certificate of Good Conduct<br />
            Valid Driver’s License<br />
            Motor Vehicle Insurance<br />
            Motor Vehicle Log Book/Proof of Ownership<br />
            GPS enabled Android smartphone
          </p>
        </div>
        <p class="FAQ-body-bold">How much do I pay Sendy?</p>
        <p class="FAQ-body-light">
          Sign up is free. Sendy works on a small service fee and 20% commission per delivery.
        </p>
        <p class="FAQ-body-bold">How will I be paid?</p>
        <p class="FAQ-body-light">
          Partners can withdraw total weekly earnings on Saturday via MPesa. The withdrawal process is initiated from the Partner app, and the money can be delivered to either the Driver, Owner or another number provided during training.
        </p>
        <p class="FAQ-body-bold">
          Can I bring multiple vehicles to the platform?
        </p>
        <p class="FAQ-body-light">
          Yes! There is no limit to the number of vehicles you can bring to the platform.
        </p>
        <p class="FAQ-body-bold">Who brings the Driver on board?</p>
        <p class="FAQ-body-light">
          The Owner of the vehicle is responsible for sourcing the Driver(s).
        </p>
        <p class="FAQ-body-bold">Who covers fuel costs and Driver stipend?</p>
        <p class="FAQ-body-light">
          The Owner covers the fuel costs, Driver stipend, and any other expenses that are Driver or vehicle related.
        </p>
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
import Carousel from './Carousel';
import Slider from './Slider';
import Slideshow from './Slideshow';

export default {
  components: {
    Upper,
    Lower,
    Carousel,
    Slider,
    Slideshow,
  },
  data() {
    return {
      parentName: 'Partners',
      imgs1: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image1scroll.jpg',
      imgs2: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image2scroll.jpg',
      imgs3: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image3scroll.jpg',
      imgs4: 'https://s3-eu-west-1.amazonaws.com/sendy-web-apps-assets/website/driver/Image4scroll.jpg',
      state: true,
      direction: 'slide-fade-left-car',
      pos: 1,
      windowWidth: null,
      newLeft: null,
      vendors1: {
        none: 0,
        Bike: 12500,
        Tuktuk: 12500,
        Pickup: 50000,
        Van: 50000,
        Threetruck: 50000,
        Fivetruck: 63750,
        Tentruck: 100000,
        Fourteentruck: 150000,
        Twoseventruck: 187500,
      },
      vendors2: {
        none: 0,
        Bike: 6250,
        Tuktuk: 6250,
        Pickup: 50000,
        Van: 50000,
        Threetruck: 50000,
        Fivetruck: 63750,
        Tentruck: 100000,
        Fourteentruck: 150000,
        Twoseventruck: 187500,
      },
      totalAmount: null,
      error: null,
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
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
      this.mixTrackPage();
    });
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth - 20;
      const range = 2560 - window.innerWidth;
      const quotient = (range * 35) / 1120;
      const newWidth = 45 + quotient;
      if (window.innerWidth > 1440) {
        this.newLeft = 80;
      } else {
        this.newLeft = newWidth;
      }
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
    calculate() {
      const city = document.getElementsByClassName('selector-1');
      const vendor = document.getElementsByClassName('selector-2');
      const period = document.getElementsByClassName('selector-3');
      const namer = vendor[0].value;
      if (city[0].value === 'Nairobi' || city[0].value === 'Thika') {
        if (namer !== 'none') {
          if (period[0].value > 0) {
            // eslint-disable-next-line no-eval
            const total = eval(`this.vendors1.${namer}`);
            const newTotal = period[0].value * total;
            this.error = null;
            this.totalAmount = newTotal;
          } else {
            this.totalAmount = null;
            this.error = 'Please select a time';
          }
        } else {
          this.totalAmount = null;
          this.error = 'Please select a vendor';
        }
      } else if (city[0].value === 'Mombasa' || city[0].value === 'Kisumu') {
        if (namer !== 'none') {
          if (period[0].value > 0) {
            // eslint-disable-next-line no-eval
            const total2 = eval(`this.vendors2.${namer}`);
            const newTotal2 = period[0].value * total2;
            this.error = null;
            this.totalAmount = newTotal2;
          } else {
            this.totalAmount = null;
            this.error = 'Please select a time';
          }
        } else {
          this.totalAmount = null;
          this.error = 'Please select a vendor';
        }
      } else {
        this.totalAmount = null;
        this.error = 'Please select a city';
      }
    },
    mixTrackPage() {
      mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
      mixpanel.track('Partners Page', {
        'landing page version': 'website',
      });
    },
  },
};
</script>

<style></style>
