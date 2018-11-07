<template>
    <div>
        <div class ='sendy-logo'>
            <img class ='sendy-logo-img' src='https://sendyit.com/include/bits/Sendy_logo_3.png' :style= "{left: newLeft + '%'}">
            <div class="upper-link-holder" :style= "{ width: newWidth + '%' , right : newLeft + '%'}">
            <a v-if="(parentName == 'Home' || parentName == 'AllCities' || parentName == 'Nairobi' || parentName == 'Mombasa' || parentName == 'Kisumu' || parentName == 'Thika' || parentName == 'Merchant' || parentName == 'Enterprise')  && windowWidth > '768'" href="https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565" class='upper-link-partner' >
            BECOME A PARTNER</a>
            <a v-if="(parentName == 'AllCities' || parentName == 'Nairobi' || parentName == 'Mombasa' || parentName == 'Kisumu' || parentName == 'Thika') && windowWidth <= '768'" href="https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565" class='upper-link-partner' >
            BECOME A PARTNER</a>
            <button v-if="parentName == 'API'" href="https://app.sendyit.com/biz/auth/page/location" class='button-link'>
            SIGN UP</button>
            <router-link v-if="parentName == 'API' || parentName == 'Partners' || parentName == 'Careers' || parentName == 'SeniorPortManager' || parentName == 'ClientRelationsManager'  || parentName == 'AndroidEngineer'  ||  parentName == 'DataAnalyst' || parentName == 'QualityAssuranceTester' || parentName == 'HeadOfFinance' || parentName == 'KisumuCityManager'  || parentName == 'Terms' || parentName == 'Privacy' || parentName == 'DriverPrivacy' || parentName == 'HeadOfPartnerOperations' || parentName == 'JuniorOperationsAssociate'" to="/" class='upper-link-partner'>HOME</router-link>
            <a v-if="windowWidth > '768'" href="https://sendyit.com/partners?_ga=2.130357068.293005447.1538032536-678579193.1537173565" class='upper-link-log'>
            LOG IN</a>
            <button v-if="parentName == 'Home' || parentName == 'Partners' || parentName == 'Careers' || parentName == 'SeniorPortManager' || parentName == 'ClientRelationsManager'  || parentName == 'AndroidEngineer' || parentName == 'DataAnalyst'  || parentName == 'QualityAssuranceTester' || parentName == 'HeadOfFinance' || parentName == 'KisumuCityManager'  || parentName == 'Terms' || parentName == 'Privacy' || parentName == 'DriverPrivacy' || parentName == 'HeadOfPartnerOperations' || parentName == 'JuniorOperationsAssociate'  || parentName == 'Merchant' || parentName == 'Enterprise'" href="https://app.sendyit.com/biz/auth/page/location" class='button-link'>
            SIGN UP</button>
            <img v-if="windowWidth <= '768'" @click="toggleMenu" class="dropdown" src="https://www.johnson-travels.com/library/images/menu-blue.png">
            </div>
            <div class="dropdown-container" v-if="showTable == true">
            <table :class="dropName" v-if="showTable == true">
            <tr><td class="dropdown-upper-rows" v-if="parentName == 'API'" >HOME</td><td v-if="parentName !== 'API'" class="dropdown-upper-rows" >BECOME A PARTNER</td></tr>
            <tr><td class="dropdown-upper-rows">LOG IN</td></tr>
            <tr><td class="dropdown-upper-rows">SIGN UP</td></tr>
            </table>    
            </div>         
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            parentName: null,
            pageCheck: null,
            windowWidth: null,
            showTable: false,
            dropName: null,
            newLeft: null,
            newMargin: null,
            newWidth: null,
            newRight: null
        }
    },
    computed: {
        nameDisplayer() {
            return this.$store.state.parentName
            
        }
    },
    created() {
        this.parentName = this.nameDisplayer
        window.addEventListener('resize', this.handleResize)
            this.handleResize();
            this.detectAndroid();
            this.detectIOS();  
    },
    destroyed() {
    window.removeEventListener('resize', this.handleResize)
    },
    methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      var range = 2560 - this.windowWidth
        var quotient = (range * 13.5)/1536
        this.newLeft = 19 - quotient
        var quotient3 = (range * 20)/1120
        this.newRight = 85.5 - quotient3
        var quotient2 = (range * 19)/1120
        this.newWidth = 35 + quotient2

    },
    toggleMenu() {
      if (this.showTable == false){
          this.dropName = "dropdown-down"
          this.showTable = true   
      }
      else{
          this.dropName = "dropdown-up"
          setTimeout(() => {
              this.showTable = false
          }, 1000)
          
      }
    }
    }
}
</script>

<style>

</style>
