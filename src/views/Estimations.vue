<template>
    <div class="estimations-section bg-blue">
        <div class="estimate-container center-block block center-text bg-blue">
            <p class="price-header relative open-sans color-white text-center">Get a price estimate</p>
            <div class="form-container relative open-sans grid">
            <input type="text" ref="autocomplete"  v-model="inputPick" onfocus="value = ''" class="est-input" placeholder="Enter the pick up location">
            <input type="text" ref="autocomplete1"  v-model="inputDest" onfocus="value = ''" class="est-input" placeholder="Enter the destination">
            <button class="price-submit bg-orange bc-orange open-sans center-block block relative color-white" @click="getDistance">Get Price</button>
            </div>
            <div class="display-dist">
                <p class="dist relative color-white" v-if="distance">{{ distance }} Kms</p>
                <p class= "price color-white relative" v-if="!distance == '0'">{{ getPrice }} Ksh</p>
            </div>
        </div>
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
            distance: null
            
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
    }
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
    
    });
    
  },
  computed: {
      getPrice() {
          price1 = '0'
          price2 = '0'
          var price1 = parseFloat(this.distance) * 5
          if(price1){
              var price2 = price1 + 50
          }
          else{
             price2 = '0'
          }
          
          return price2
      }
  }
}
</script>

<style>

</style>
