<template>
    <div class = "earnings flex centerX centerY">
        <div class="earnings-container">
        <div class="selectors grid">
        <select class="selector-1 sans-pro">
            <option value="City">City</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Thika">Thika</option>
        </select>
        <select class="selector-2 sans-pro">
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
        <select class="selector-3 sans-pro" >
            <option value= 0>Time</option>
            <option value= 1>1 week</option>
            <option value= 4>1 month</option>
            <option value= 12>3 months</option>
            <option value= 72>6 months</option>
            <option value= 154>1 year</option>
        </select>
        <div class="selector-4">
            <button class="calculate-earnings color-white bg-orange bc-orange block center-block sans-pro" @click="calculate">calculate</button>
        </div>
        </div>
        <p class= "riders-pay-light center-text sans-pro color-white" v-if="totalAmount !== null">KES <span class="riders-pay"> &nbsp;{{ totalAmount }} /-</span> &nbsp; total</p>
        <p class= "center-text color-white sans-pro" v-if="error !== null">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return{
    vendors1: {none: 0, Bike: 12500, Tuktuk: 12500, Pickup: 50000, Van: 50000, Threetruck: 50000, Fivetruck: 63750, Tentruck: 100000, Fourteentruck: 150000, Twoseventruck: 187500},
    vendors2: {none: 0, Bike: 6250, Tuktuk: 6250, Pickup: 50000, Van: 50000, Threetruck: 50000, Fivetruck: 63750, Tentruck: 100000, Fourteentruck: 150000, Twoseventruck: 187500},
    totalAmount: null,
    error: null
    }
},
methods: {
    calculate(){
        var city = document.getElementsByClassName("selector-1")
        var vendor = document.getElementsByClassName("selector-2")
        var period = document.getElementsByClassName("selector-3")
        var namer = vendor[0].value
        if(city[0].value == 'Nairobi' || city[0].value == 'Thika'){
            if(namer !== 'none'){
                if(period[0].value > 0){
                var total = eval('this.vendors1.' + namer)
                var newTotal = period[0].value * total
                this.error = null
                this.totalAmount = newTotal
                }
                else{
                    this.totalAmount = null
                    this.error = 'Please select a time'
                }
            }
            else{
                this.totalAmount = null
                this.error = 'Please select a vendor'
            }
        }
        else if(city[0].value == 'Mombasa' || city[0].value == 'Kisumu'){
            if(namer !== 'none'){
                if(period[0].value > 0){
                    var total2 = eval('this.vendors2.' + namer)
                    var newTotal2 = period[0].value * total2
                    this.error = null
                    this.totalAmount = newTotal2
                }
                else{
                    this.totalAmount = null
                    this.error = 'Please select a time'
                }
            }
            else{
                this.totalAmount = null
                this.error = 'Please select a vendor'
            }
        }
        else{
            this.totalAmount = null
            this.error = 'Please select a city'
        }
    }
}
}
</script>

<style>

</style>
