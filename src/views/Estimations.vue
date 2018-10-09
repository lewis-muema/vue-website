<template>
    <div class="estimations-section">
        <div class="estimate-container" id="loc-auto">
            <p class="price-header">Get a price estimate</p>
            <input type="text" ref="autocomplete"  v-model="inputPick" onfocus="value = ''" class="pickup-box" placeholder="Enter the pick up location">
            <input type="text" ref="autocomplete1"  v-model="inputDest" onfocus="value = ''" class="dest-box" placeholder="Enter the destination">
            <button class="price-submit" @click="getDistance">Get Price</button>
            <div class="display-dist">
                <p class="dist" v-if="distance">{{ distance }} Kms</p>
                <p class= "price" v-if="!distance == '0'">{{ getPrice }} Ksh</p>
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
