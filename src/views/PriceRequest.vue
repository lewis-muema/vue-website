<template>
  <div>
    <div class="estimations-holder-2 bg-blue">
      <div class="form-container open-sans grid" v-if="this.windowWidth > 1200">
        <input
          type="text"
          ref="autocomplete"
          v-model="inputPick"
          onfocus="value = ''"
          class="est-input no-borders sans-pro"
          placeholder="Enter the pick up location"
          id="pickup_name"
          @click="postHeight(230)"
        />
        <input
          type="text"
          ref="autocomplete1"
          v-model="inputDest"
          onfocus="value = ''"
          class="est-input no-borders sans-pro"
          placeholder="Enter the destination"
          id="dest_name"
          @click="postHeight(230)"
        />
        <button
          class="price-submit bg-orange bc-orange sans-pro block relative color-white"
          @click="close"
          v-if="loading == false"
        >{{ btnval }}</button>
        <div
          class="price-loading bg-orange bc-orange open-sans center-block block relative color-white"
          v-if="loading == true"
        >
          <img
            class="glyphicon-refresh-animate"
            src="https://images.sendyit.com/frontend_apps/loading-03-white.png?"
            alt="loading..."
            style="width:25px;"
          />
        </div>
      </div>
      <div class="form-container open-sans grid" v-if="this.windowWidth <= 1200">
        <input
          type="text"
          ref="autocomplete"
          v-model="inputPick"
          onfocus="value = ''"
          class="est-input-2 no-borders open-sans"
          placeholder="Enter the pick up location"
          id="pickup_name"
          @click="postHeight(230)"
        />
        <input
          type="text"
          ref="autocomplete1"
          v-model="inputDest"
          onfocus="value = ''"
          class="est-input-2 no-borders open-sans"
          placeholder="Enter the destination"
          id="dest_name"
          @click="postHeight(230)"
        />
        <button
          class="price-submit-2 bg-orange bc-orange open-sans block relative color-white"
          @click="close"
          v-if="loading == false"
        >{{ btnval }}</button>
        <div
          class="price-loading-2 bg-orange bc-orange open-sans center-block block relative color-white"
          v-if="loading == true"
        >
          <img
            class="glyphicon-refresh-animate"
            src="https://images.sendyit.com/frontend_apps/loading-03-white.png?"
            alt="loading..."
            style="width:25px;"
          />
        </div>
      </div>
      <!--<p class="dist relative color-white" v-if="distance < 0">{{ distance }} Kms</p>-->
      <transition name="fade">
        <div class="display-dist" v-if="Array.isArray(price_request_response) && loading == false">
          <p
            class="vendors-select-par"
            v-if="price_request_response.length > 0"
          >Please select the vehicles you would like a quote for:</p>
          <div class="price-request-row grid">
            <div
              class="price-request-column color-white"
              @click="selectVendor(index)"
              :class="selectedVendor.includes(index) ? 'bg-orange' : ''"
              v-for="(i, index) in price_request_response"
              :key="i.vendor_id"
            >
              <p class="vendor sans-pro">{{ i.vendor_name }}</p>
              <img class="vendor-img img-height" :src="getVendor(i.vendor_id)" />
              <!-- <div class="price-holder grid">
              <p class="kes sans-pro">KES</p>
              <p class="price color-white relative bold sans-pro">
                {{ i.cost }}
              </p>
              </div>-->
            </div>
          </div>
          <div v-if="price_request_response.length > 0">
            <p
              class="quotes-email vendors-select-par"
            >Please enter an email address we can use to forward you the quote</p>
            <input type="text" class="quotes-input" placeholder="Email Address" v-model="email" />
            <input type="text" class="quotes-input" placeholder="Phone No" v-model="phoneNo" />
            <div class="lower-btn">
              <button
                class="get-started-button centerY centerX flex sans-pro color-white"
                :class="sentStatus === 1 ? 'bg-green' : 'bg-orange bc-orange'"
                v-if="selectedVendor.length > 0 && email && phoneNo"
                @click="sendMail()"
              >
                <img
                  v-if="submitLoading"
                  class="glyphicon-refresh-animate"
                  src="https://images.sendyit.com/frontend_apps/loading-03-white.png?"
                  alt="loading..."
                  style="width:25px;"
                />
                <span v-else>
                  <span v-if="sentStatus === 0">SUBMIT</span>
                  <span v-else-if="sentStatus === 1">SENT</span>
                  <span v-else>NOT SENT</span>
                </span>
              </button>
              <button
                class="get-started-button grey centerY centerX flex sans-pro color-white"
                disabled
                v-else
              >SUBMIT</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div id="quote-template" style="display: none;">
      <div style="width: 500px; box-shadow: 5px 10px 18px #88888880; color: black;">
        <img
          src="https://assets.website-files.com/5be92ce6e4a547dcc61b976c/5be9403d1f965bbd0373f29e_sendy%20logo%20hi.png"
          alt="logo"
          style="width: 165px; margin: auto; display: block;"
        />
        <p style="margin-left: 10px; font-size: 14px;">Here is your Sendy quote!</p>
        <div style="margin-left: 10px; font-size: 12px; display: flex;">
          <div style="width: 20%;">Order Pickup:</div>
          <div style="width: 80%;">{{ inputPick }}</div>
        </div>
        <div style="margin-left: 10px; font-size: 12px; display: flex;">
          <div style="width: 20%;">Destination:</div>
          <div style="width: 80%;">{{ inputDest }}</div>
        </div>
        <img
          :src="createStaticMapUrl()"
          class="map"
          v-if="this.pick_points && this.dest_points"
          style="width: 96%; padding: 2%;"
        />
        <div style="padding: 3px;">
          <div
            style="display: flex; margin-bottom: 10px; width: 50%; height: 120px; float: left;"
            v-for="(vendor, x) in selectedVendor"
            :key="x"
          >
            <img
              :src="`https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/vendors/colored/${price_request_response[vendor].vendor_id}.jpeg`"
              style="width: 50px; height: 50px;"
            />
            <div style="width: 100%; margin-left: 10px;">
              <div style="width: 100%; height: 20px;">
                <div
                  style="margin: 0; margin-bottom: 2px; font-size: 12px; width: max-content; float: left;"
                >{{ price_request_response[vendor].vendor_name }}</div>
                <div
                  style="font-size: 13px; text-align: right; padding-right: 10px; text-align: right; width: max-content; float: right;"
                >{{ `${price_request_response[vendor].currency} ${price_request_response[vendor].cost}` }}</div>
              </div>
              <p
                style="margin: 0; font-size: 9px;"
                v-for="(row, index) in parseHTML(price_request_response[vendor].tier_description)"
                :key="index"
              >{{ row }}</p>
            </div>
          </div>
        </div>
        <div style="width: 100%; padding-bottom: 1px;">
          <img
            src="https://assets.website-files.com/5be92ce6e4a547dcc61b976c/5bee5f8167d34c2d19a34353_Kitengestrip_1560by30.png"
            alt="divider"
            style="width: 100%;"
          />
          <p style="text-align: center; font-size: 12px;">Create your free Sendy business account</p>
          <a
            :href="`${baseUrl}/redirect/${email}`"
            style="display: block; margin: auto; padding: 15px; color: white; background: #f57f1e; border: 0; border-radius: 5px; font-size: 14px; font-weight: 600; margin-bottom: 20px; width: 110px; text-align: center;"
          >Create account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixpanel from 'mixpanel-browser';

export default {
  data() {
    return {
      inputPick: null,
      inputDest: null,
      place: null,
      dest: null,
      latPick: null,
      lonPick: null,
      latDest: null,
      lonDest: null,
      distance: null,
      sectionHeight: 280,
      btnval: 'GET PRICE',
      price_request_response: [],
      loading: false,
      sourceURL: null,
      windowWidth: null,
      selectedVendor: [],
      email: '',
      pick_points: '',
      dest_points: '',
      submitLoading: false,
      sentStatus: 0,
      baseUrl: '',
      phoneNo: '',
    };
  },
  computed: {},

  created() {
    this.parentName = this.nameDisplayer;
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.sourceURL = document.referrer;
    this.baseUrl = window.location.origin;
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    /* global google */
    this.autocomplete = new google.maps.places.Autocomplete(this.$refs.autocomplete, { types: ['establishment', 'geocode'] });
    this.autocomplete.setComponentRestrictions({ country: ['ke', 'ug'] });

    this.autocomplete.addListener('place_changed', () => {
      this.postHeight(document.body.scrollHeight);
      this.place = this.autocomplete.getPlace();
      this.latPick = this.place.geometry.location.lat();
      this.lonPick = this.place.geometry.location.lng();
      const firstword = this.place.name.replace(/ .*/, '');
      const included = this.place.formatted_address.includes(firstword);
      if (included) {
        this.inputPick = this.place.formatted_address;
      } else {
        this.inputPick = `${this.place.name}, ${this.place.formatted_address}`;
      }
    });

    this.autocomplete1 = new google.maps.places.Autocomplete(this.$refs.autocomplete1, { types: ['establishment', 'geocode'] });
    this.autocomplete1.setComponentRestrictions({ country: ['ke', 'ug'] });

    this.autocomplete1.addListener('place_changed', () => {
      this.postHeight(document.body.scrollHeight);
      this.dest = this.autocomplete1.getPlace();
      this.latDest = this.dest.geometry.location.lat();
      this.lonDest = this.dest.geometry.location.lng();
      const firstword1 = this.dest.name.replace(/ .*/, '');
      const include = this.dest.formatted_address.includes(firstword1);
      if (include) {
        this.inputDest = this.dest.formatted_address;
      } else {
        this.inputDest = `${this.dest.name}, ${this.dest.formatted_address}`;
      }

      this.getDistance();
    });
    if (document.referrer) {
      window.parent.postMessage(document.body.scrollHeight, this.sourceURL);
    }
  },
  methods: {
    getVendor(id) {
      return `https://images.sendyit.com/website/home2/${id}.png`;
    },
    postHeight(height) {
      window.parent.postMessage(height, this.sourceURL);
    },
    transform_response(response) {
      const new_array = [];
      response.values.economy_price_tiers.forEach(data => {
        data.price_tiers.forEach(item => {
          new_array.push(item);
        });
      });
      this.price_request_response = new_array;
      this.loading = false;
      this.btnval = 'CLOSE';
      if (document.referrer) {
        if (this.windowWidth > 1200) {
          if (this.price_request_response.length < 7) {
            window.parent.postMessage('600', this.sourceURL);
          } else {
            window.parent.postMessage('800', this.sourceURL);
          }
        } else {
          if (this.price_request_response.length < 6) {
            window.parent.postMessage('1200', this.sourceURL);
          } else if (this.price_request_response.length === 6) {
            window.parent.postMessage('1300', this.sourceURL);
          } else {
            window.parent.postMessage('11400', this.sourceURL);
          }
        }
      }
    },
    getDistance() {
      if (document.referrer) {
        window.parent.postMessage('200', this.sourceURL);
      }
      /* global google */
      const originLat = parseFloat(this.latPick);
      const originLon = parseFloat(this.lonPick);
      const destLat = parseFloat(this.latDest);
      const destLon = parseFloat(this.lonDest);
      this.pick_points = `${originLat},${originLon}`;
      this.dest_points = `${destLat},${destLon}`;
      const pickup_name = document.getElementById('pickup_name').value;
      const dest_name = document.getElementById('dest_name').value;
      const test_obj = {
        path: [
          {
            name: pickup_name,
            coordinates: this.pick_points,
            waypoint_details_status: true,
            type: 'coordinates',
            more: {
              Estate: 'Not indicated',
              FlatName: 'Not indicated',
              place_idcustom: '',
              Label: 'Home',
              HouseDoor: 'A2',
              Otherdescription: '',
              Typed: 'Home',
              Vicinity: 'Not Indicated',
              Address: 'Not Indicated',
            },
          },
          {
            name: dest_name,
            coordinates: this.dest_points,
            waypoint_details_status: true,
            type: 'coordinates',
            more: {
              Estate: 'Not indicated',
              FlatName: 'Not indicated',
              place_idcustom: '',
              Label: 'Distribution Centre',
              HouseDoor: 'Not indicated',
              Otherdescription: '',
              Typed: 'Distribution Centre',
              Vicinity: 'Not Indicated',
              Address: 'Not Indicated',
            },
          },
        ],
      };

      const payload = {
        values: {
          path: JSON.stringify(test_obj),
          name: 'Sendy Finance',
          email: 'finance@sendy.co.ke',
          phone: '0728343295',
          type: 'coordinates',
          rider_phone: '0709779779',
          rider_dist: 0,
          insurance_status: false,
          insurance_id: '',
          is_re_request: false,
          date_time: '2018-11-12 16:12:15',
          client_type: 'website',
          group_id: 1,
          insurance: '',
          vendor_type: 1,
          cop_id: 0,
          promotion_status: false,
          no_charge_status: false,
          destination_paid_status: false,
          is_edit: false,
        },
      };
      // eslint-disable-next-line global-require
      const axios = require('axios');
      this.loading = true;
      const self = this;

      axios
        .post('https://api.sendyit.com/parcel/index.php/api/v11/pricing_multiple', payload)
        .then(response => {
          self.transform_response(response.data);
        })
        .catch(error => {
          console.log(error);
          self.loading = false;
        });
    },
    close() {
      if (this.btnval === 'CLOSE') {
        this.btnval = 'GET PRICE';
        this.price_request_response = [];
        if (document.referrer) {
          window.parent.postMessage('200', this.sourceURL);
        }
      } else if (this.btnval === 'GET PRICE') {
        this.getDistance();
        this.btnval = 'CLOSE';
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    selectVendor(i) {
      if (!this.selectedVendor.includes(i)) {
        this.selectedVendor.push(i);
      } else {
        this.selectedVendor = this.selectedVendor.filter(item => item !== i);
      }
    },
    vendorNames() {
      let vendorNames = 'Vendors: ';
      this.selectedVendor.forEach((row, i) => {
        vendorNames = `${vendorNames} ${this.price_request_response[row].vendor_name},`;
      });

      return vendorNames;
    },
    createStaticMapUrl() {
      const google_key = 'AIzaSyAB963lJdUXP05F3DtURdwAZpuwpjOoS6w';
      return `https://maps.googleapis.com/maps/api/staticmap?path=color:0x2c82c5|weight:5|${this.pick_points}|${this.dest_points}&size=500x200&markers=color:0xF17F3A%7Clabel:P%7C
                ${this.pick_points}&markers=color:0x2c82c5%7Clabel:D%7C${this.dest_points}&key=${google_key}`;
    },
    parseHTML(html) {
      const el = document.createElement('html');
      el.innerHTML = html;
      const parArray = [];
      el.querySelectorAll('p, li, br').forEach(element => {
        if (!element.innerHTML.includes('Loader') && !element.innerHTML.includes('Insurance')) {
          parArray.push(element.innerHTML);
        }
      });
      return parArray;
    },
    sendMail() {
      this.submitLoading = !this.submitLoading;
      // eslint-disable-next-line global-require
      const mandrill = require('node-mandrill')('41Mt3sU3hMibiUmKc_uj1A');
      mandrill(
        '/messages/send',
        {
          message: {
            to: [{ email: this.email, name: '' }],
            from_email: 'noreply@sendy.co.ke',
            subject: 'Sendy Quote',
            html: `${document.getElementById('quote-template').innerHTML}`,
          },
        },
        (error, response) => {
          if (error) {
            this.submitLoading = !this.submitLoading;
            this.sentStatus = 2;
            setTimeout(() => {
              this.sentStatus = 0;
            }, 3000);
          } else {
            this.sentStatus = 1;
            this.submitMail();
            this.submitMixpanel();
            setTimeout(() => {
              this.sentStatus = 0;
            }, 3000);
            this.submitLoading = !this.submitLoading;
          }
          // eslint-disable-next-line comma-dangle
        }
      );
    },
    submitMail() {
      // eslint-disable-next-line global-require
      const Hubspot = require('hubspot');
      const hubspot = new Hubspot({
        apiKey: '25da8b1c-96c1-414c-bb74-ce8ffb5a5c07',
        checkLimit: false, // (Optional) Specify whether to check the API limit on each call. Default: true
      });
      const email = {
        fields: [
          {
            name: 'email',
            value: this.email,
          },
          {
            name: 'phone',
            value: this.phoneNo,
          },
          {
            name: 'pickup',
            value: this.inputPick,
          },
          {
            name: 'destination',
            value: this.inputDest,
          },
          {
            name: 'vendors',
            value: this.vendorNames(),
          },
        ],
      };
      hubspot.forms.submit('4951975', 'c92dfacc-63e7-4995-8da7-396e574cea64', email);
    },
    submitMixpanel() {
      mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
      mixpanel.track('Get a Quote', {
        'landing page version': 'website',
        'Client Email': this.email,
      });
    },
  },
};
</script>

<style></style>
