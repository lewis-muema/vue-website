<template>
    <div class="estimations-section bg-blue">
        <div class="estimate-container center-block block center-text bg-blue">
            <p class="price-header relative open-sans color-white text-center">Get a price estimate</p>
            <div class="form-container relative open-sans grid">
            <input type="text" ref="autocomplete"  v-model="inputPick" onfocus="value = ''" class="est-input no-borders open-sans" placeholder="Enter the pick up location">
            <input type="text" ref="autocomplete1"  v-model="inputDest" onfocus="value = ''" class="est-input no-borders open-sans" placeholder="Enter the destination">
            <button class="price-submit bg-orange bc-orange open-sans center-block block relative color-white" @click="close">{{ btnval }}</button>
            </div>
            </div>
            <p class="dist relative color-white" v-if="distance < 0">{{ distance }} Kms</p>
            <transition name="fade">
            <div class="display-dist" v-if="distance > 0">
                <div class="price-request-row grid">
                    <div class="price-request-column color-white"><p class="vendor open-sans">BIKE</p>
                    <img class="vendor-img img-height" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/bike.png">
                    <div class="price-holder grid">
                    <p class="kes">KES</p>
                    <p class= "price color-white relative bold">{{ getPriceBike }}</p>
                    </div>
                    </div>
                    <div class="price-request-column color-white"><p class="vendor open-sans">PICK-UP</p>
                    <img class="vendor-img img-height" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/pickup.png">
                    <div class="price-holder grid">
                    <p class="kes">KES</p>
                    <p class= "price color-white relative bold">{{ getPricePickup }}</p>
                    </div>
                    </div>
                    <div class="price-request-column color-white"><p class="vendor open-sans">VAN</p>
                    <img class="vendor-img img-height" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/van.png">
                    <div class="price-holder grid">
                    <p class="kes">KES</p>
                    <p class= "price color-white relative bold">{{ getPriceVan }}</p>
                    </div>
                    </div>
                    <div class="price-request-column color-white"><p class="vendor open-sans">3T TRUCK</p>
                    <img class="vendor-img img-height" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/3t.png">
                    <div class="price-holder grid">
                    <p class="kes">KES</p>
                    <p class= "price color-white relative bold">{{ getPrice3t }}</p>
                    </div>
                    </div>
                    <div class="price-request-column color-white"><p class="vendor open-sans">5T TRUCK</p>
                    <img class="vendor-img img-height" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/5t.png">
                    <div class="price-holder grid">
                    <p class="kes">KES</p>
                    <p class= "price color-white relative bold">{{ getPrice5t }}</p>
                    </div>
                    </div>
                    <div class="price-request-column color-white"><p class="vendor open-sans">10T TRUCK</p>
                    <img class="vendor-img img-height" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/10t.png">
                    <div class="price-holder grid">
                    <p class="kes">KES</p>
                    <p class= "price color-white relative bold">{{ getPrice10t }}</p>
                    </div>
                    </div>
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
            btnval: "GET PRICE"            
        }
    },
    methods: {
    getDistance() {
        /*global google*/
        var originLat = parseFloat(this.latPick)
        var originLon = parseFloat(this.lonPick)
        var destLat = parseFloat(this.latDest)
        var destLon = parseFloat(this.lonDest)
        var p1 = new google.maps.LatLng(originLat, originLon);
        var p2 = new google.maps.LatLng(destLat, destLon);
        var length = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2)
        this.distance = length
        this.btnval = 'CLOSE'
    },
    close() {
        if(this.btnval == 'CLOSE'){
            this.distance = 0
            this.btnval = 'GET PRICE'
        }
        else if(this.btnval == 'GET PRICE'){
            this.getDistance()
            this.btnval = 'CLOSE'
        }
    },
    handleResize() {
        //this.windowWidth = window.innerWidth;
        //var range = 2560 - this.windowWidth
        //var quotient = (range * 13.5)/1536
        //this.newLeft = 19 - quotient
        //var quotient3 = (range * 20)/1120
        //this.newRight = 85.5 - quotient3
        //var quotient2 = (range * 19)/1120
        //this.newWidth = 35 + quotient2
    }
    },
    created() {
        this.parentName = this.nameDisplayer
        window.addEventListener('resize', this.handleResize)
            this.handleResize(); 
    },
    destroyed() {
    window.removeEventListener('resize', this.handleResize)
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
    this.place = this.autocomplete.getPlace()
    this.latPick = this.place.geometry.location.lat()
    this.lonPick = this.place.geometry.location.lng()
    this.inputPick =this.place.formatted_address
    this.getDistance();
    });

    this.autocomplete1 = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete1),
      {types: ['geocode']}
    );
    this.autocomplete1.setComponentRestrictions(
            {'country': ['ke']});
    
    this.autocomplete1.addListener('place_changed', () => {
    this.dest = this.autocomplete1.getPlace()
    this.latDest = this.dest.geometry.location.lat()
    this.lonDest = this.dest.geometry.location.lng()
    this.inputDest = this.dest.formatted_address
    this.getDistance()
    });
    
  },
  computed: {
      getPriceBike() {
          pricebike1 = '0'
          pricebike2 = '0'
          var pricebike1 = (parseFloat(this.distance) * 27) + 297
          if(pricebike1){
              var pricebike2 = Math.ceil(pricebike1 / 5) * 5
          }
          else{
             pricebike2 = '0'
          }
          
          return pricebike2
      },
      getPricePickup() {
          pricePickup1 = '0'
          pricePickup2 = '0'
          var pricePickup1 = (parseFloat(this.distance) * 45) + 1495
          if(pricePickup1){
              var pricePickup2 = Math.ceil(pricePickup1 / 5) * 5
          }
          else{
             pricePickup2 = '0'
          }
          
          return pricePickup2
      },
      getPriceVan() {
          priceVan1 = '0'
          priceVan2 = '0'
          var priceVan1 = (parseFloat(this.distance) * 45) + 1495
          if(priceVan1){
              var priceVan2 = Math.ceil(priceVan1 / 5) * 5
          }
          else{
             priceVan2 = '0'
          }
          
          return priceVan2
      },
      getPrice3t() {
          price3t1 = '0'
          price3t2 = '0'
          var price3t1 = (parseFloat(this.distance) * 45) + 5145
          if(price3t1){
              var price3t2 = Math.ceil(price3t1 / 5) * 5
          }
          else{
             price3t2 = '0'
          }
          
          return price3t2
      },
      getPrice5t() {
          price5t1 = '0'
          price5t2 = '0'
          var price5t1 = (parseFloat(this.distance) * 54) + 5633
          if(price5t1){
              var price5t2 = Math.ceil(price5t1 / 5) * 5
          }
          else{
             price5t2 = '0'
          }
          
          return price5t2
      },
      getPrice10t() {
          price10t1 = '0'
          price10t2 = '0'
          var price10t1 = (parseFloat(this.distance) * 63) + 6422
          if(price10t1){
              var price10t2 = Math.ceil(price10t1 / 5) * 5 
          }
          else{
             price10t2 = '0'
          }
          
          return price10t2
      }
  }
}
</script>

<style>

</style>
