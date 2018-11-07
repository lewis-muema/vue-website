<template>
    <div class="cities-head">
            <p v-if="parentName == 'AllCities'" class="cities-title">Sendy Cities</p>
            <p v-if="parentName == 'Nairobi'" class="cities-title">Nairobi</p>
            <p v-if="parentName == 'Kisumu'" class="cities-title">Kisumu</p>
            <p v-if="parentName == 'Mombasa'" class="cities-title">Mombasa</p>
            <p v-if="parentName == 'Thika'" class="cities-title">Thika</p>
        <div :class="cityName">
            <div class="marquee">
                <div class="lineage-9">
                    <img class="vehicles" src="https://apptest.sendyit.com/image/white_tton.png" alt="3 ton">
                </div>
                <div class="lineage-2">
                    <img class="vehicles" src="https://apptest.sendyit.com/image/white_tuk.png" alt="tuk" >
                </div>
                <div class="lineage-3">
                    <img class="vehicles" src="https://apptest.sendyit.com/image/white_rider.png" alt="rider" >
                </div>
                <div class="lineage-4">
                    <img class="vehicles" src="https://apptest.sendyit.com/image/white_pickup.png" alt="pickup">
                </div>
                <div class="lineage-3">
                    <img class="vehicles" src="https://apptest.sendyit.com/image/white_rider.png" alt="bike" >
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    data() {
    return {
    parentName: null,
    cityName: null
    }
},
computed: {
        nameDisplayer() {
            return this.$store.state.parentName;
        }
},
created() {
    this.parentName = this.nameDisplayer
    if(this.parentName == 'AllCities') {
        this.cityName = "cities-head-img"
    }
    else if(this.parentName == 'Nairobi') {
        this.cityName = "cities-head-img-nairobi"
    }
    else if(this.parentName == 'Kisumu') {
        this.cityName = "cities-head-img-kisumu"
    }
    else if(this.parentName == 'Mombasa') {
        this.cityName = "cities-head-img-mombasa"
    }
    else if(this.parentName == 'Thika') {
        this.cityName = "cities-head-img-thika"
    }
    }
}
</script>

<style>

</style>
