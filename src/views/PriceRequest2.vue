<template>
    <div class="estimations-holder-2 bg-blue" >
            <div class="form-container open-sans grid" v-if="this.windowWidth > 1200">
                <input type="text" ref="autocomplete"  v-model="inputPick" onfocus="value = ''" class="est-input no-borders sans-pro" placeholder="Enter the pick up location" id="pickup_name">
                        <input type="text" ref="autocomplete1"  v-model="inputDest" onfocus="value = ''" class="est-input no-borders sans-pro" placeholder="Enter the destination" id="dest_name">
                        <button class="price-submit bg-orange bc-orange sans-pro block relative color-white" @click="close" v-if="loading == false">{{ btnval }}</button>
                    <div class="price-loading bg-orange bc-orange open-sans center-block block relative color-white" v-if="loading == true">
                        <img class="glyphicon-refresh-animate"  src="https://images.sendyit.com/frontend_apps/loading-03-white.png?" alt="loading..." style="width:25px;">
                    </div>
            </div>
            <div class="form-container open-sans grid" v-if="this.windowWidth <= 1200">
                <input type="text" ref="autocomplete"  v-model="inputPick" onfocus="value = ''" class="est-input-2 no-borders open-sans" placeholder="Enter the pick up location" id="pickup_name">
                        <input type="text" ref="autocomplete1"  v-model="inputDest" onfocus="value = ''" class="est-input-2 no-borders open-sans" placeholder="Enter the destination" id="dest_name">
                        <button class="price-submit-2 bg-orange bc-orange open-sans block relative color-white" @click="close" v-if="loading == false">{{ btnval }}</button>
                    <div class="price-loading-2 bg-orange bc-orange open-sans center-block block relative color-white" v-if="loading == true">
                        <img class="glyphicon-refresh-animate"  src="https://images.sendyit.com/frontend_apps/loading-03-white.png?" alt="loading..." style="width:25px;">
                    </div>
            </div>
            <!--<p class="dist relative color-white" v-if="distance < 0">{{ distance }} Kms</p>-->
            <transition name="fade">
            <div class="display-dist" v-if="Array.isArray(price_request_response) && loading == false">
            
                <div class="price-request-row grid">
                    <div class="price-request-column color-white"  v-for="i in price_request_response" :key="i.vendor_id"><p class="vendor sans-pro">{{i.vendor_name}}</p>
                        <img class="vendor-img img-height" :src="getVendor(i.vendor_id)">
                        <div class="price-holder grid">
                            <p class="kes sans-pro">KES</p>
                            <p class= "price color-white relative bold sans-pro">{{ i.cost }}</p>
                        </div>
                    </div>

                </div>
                <div class="lower-btn" v-if="price_request_response.length > 1">
                <router-link to="/getstarted"><div class="get-started-button bg-orange bc-orange centerY centerX flex sans-pro color-white" type="button">GET STARTED</div></router-link> 
                </div>
            </div>
            
            </transition>
    </div>
</template>

<script>
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
            btnval: "GET PRICE", 
            price_request_response: [],
            loading: false,
            sourceURL: null,
            windowWidth: null     
        }
    },
    methods: {
    getVendor(id){
        return 'https://images.sendyit.com/website/home2/' + id + '.png';
    },
    transform_response(response){
        let new_array = [];
        response.values.economy_price_tiers.forEach(function(data){
            data.price_tiers.forEach(function(item){
                console.log('item',item);
                new_array.push(item);
            });
        });
        this.price_request_response = new_array;
        this.loading = false;
        this.btnval = "CLOSE";
        if(document.referrer){
            if(this.windowWidth > 1200){
                if(this.price_request_response.length < 7){
                    window.parent.postMessage( "800" ,this.sourceURL);
                }
                else{
                    window.parent.postMessage( "970" ,this.sourceURL);
                }
                
            }
            else{
                if(this.price_request_response.length < 6){
                    window.parent.postMessage( "1410" ,this.sourceURL);
                }
                else if(this.price_request_response.length == 6){
                    window.parent.postMessage( "1630" ,this.sourceURL);
                }
                else {
                    window.parent.postMessage( "1830" ,this.sourceURL);
                }
            }
        }      
    },
    getDistance() {
        if(document.referrer){
        window.parent.postMessage("285" ,this.sourceURL);
        }
        /*global google*/
        let originLat = parseFloat(this.latPick);
        let originLon = parseFloat(this.lonPick);
        let destLat = parseFloat(this.latDest);
        let destLon = parseFloat(this.lonDest);
        let pick_points = originLat + ',' + originLon;
        let dest_points = destLat + ',' + destLon;
        let pickup_name = document.getElementById('pickup_name').value;
        let dest_name = document.getElementById('dest_name').value;
        let test_obj = {
                "path" : [
                {
                    "name" : pickup_name,
                    "coordinates" : pick_points,
                    "waypoint_details_status" : true,
                    "type" : "coordinates",
                    "more" : 
                    {
                        "Estate" : "Not indicated",
                        "FlatName" : "Not indicated",
                        "place_idcustom" : "",
                        "Label" : "Home",
                        "HouseDoor" : "A2",
                        "Otherdescription" : "",
                        "Typed" : "Home",
                        "Vicinity" : "Not Indicated",
                        "Address" : "Not Indicated"
                    }
                },
                {
                    "name" : dest_name,
                    "coordinates" : dest_points,
                    "waypoint_details_status" : true,
                    "type" : "coordinates",
                    "more" :
                    {
                        "Estate" : "Not indicated",
                        "FlatName" : "Not indicated",
                        "place_idcustom" : "",
                        "Label" : "Distribution Centre",
                        "HouseDoor" : "Not indicated",
                        "Otherdescription" : "",
                        "Typed" : "Distribution Centre",
                        "Vicinity" : "Not Indicated",
                        "Address" : "Not Indicated",
                    }
                }
            ]
            
        }
        
let payload = {
  "values": {
    "path": (JSON.stringify(test_obj)),
    "name": "Sendy Finance",
    "email": "finance@sendy.co.ke",
    "phone": "0728343295",
    "type": "coordinates",
    "rider_phone": "0709779779",
    "rider_dist": 0,
    "insurance_status": false,
    "insurance_id": "",
    "is_re_request": false,
    "date_time": "2018-11-12 16:12:15",
    "client_type": "website",
    "group_id": 1,
    "insurance": "",
    "vendor_type": 1,
    "cop_id": 0,
    "promotion_status": false,
    "no_charge_status": false,
    "destination_paid_status": false,
    "is_edit": false
  }
}
const axios = require('axios');
this.loading = true;
let self = this;

axios.post('https://apitest.sendyit.com/parcel/index.php/api/v11/pricing_multiple', (payload))
  .then(function (response) {
    console.log(response);
    self.transform_response(response.data);

  })
  .catch(function (error) {
    console.log(error);
    self.loading = false;
  });
       
    },
    close() {
        if(this.btnval == 'CLOSE'){
            this.btnval = 'GET PRICE';
            this.price_request_response = [];
            if(document.referrer){
                window.parent.postMessage("285" ,this.sourceURL);
            }
        }
        else if(this.btnval == 'GET PRICE'){
            this.getDistance();
            this.btnval = 'CLOSE';
        }
    },
    handleResize() {
        this.windowWidth = window.innerWidth;
    }
    },
    
    created() {
        this.parentName = this.nameDisplayer;
        window.addEventListener('resize', this.handleResize);
        this.handleResize(); 
        this.sourceURL = document.referrer;
    },
    destroyed() {
    window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );
    this.autocomplete.setComponentRestrictions(
            {'country': ['ke']});
    
    this.autocomplete.addListener('place_changed', () => {
    this.place = this.autocomplete.getPlace();
    this.latPick = this.place.geometry.location.lat();
    this.lonPick = this.place.geometry.location.lng();
    let firstword = this.place.name.replace(/ .*/,'');
    let included = this.place.formatted_address.includes(firstword);
    if (included){
        this.inputPick = this.place.formatted_address;
    }
    else{
        this.inputPick = this.place.name + ', ' + this.place.formatted_address;
    }
    });

    this.autocomplete1 = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete1),
      {types: ['geocode']}
    );
    this.autocomplete1.setComponentRestrictions(
            {'country': ['ke']});
    
    this.autocomplete1.addListener('place_changed', () => {
    this.dest = this.autocomplete1.getPlace();
    this.latDest = this.dest.geometry.location.lat();
    this.lonDest = this.dest.geometry.location.lng();
    let firstword1 = this.dest.name.replace(/ .*/,'');
    let include = this.dest.formatted_address.includes(firstword1);
    if(include){
        this.inputDest = this.dest.formatted_address;
    }
    else{
        this.inputDest = this.dest.name + ', ' + this.dest.formatted_address;
    }
    
    this.getDistance();
    });
    if(document.referrer){
        window.parent.postMessage(document.body.scrollHeight ,this.sourceURL);
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
