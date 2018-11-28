<template>
    <div>
        <div class ='section section__upper flex centerY'>
            <img class ='section__upper_img relative' src='https://sendyit.com/include/bits/Sendy_logo_3.png' :style= "{left: newLeft + '%'}">
            <div class="section__upper_container flex rightX absolute centerY" :style= "{ width: newWidth + '%' , right : newLeft + '%'}">
            <router-link v-if="(parentName == 'Home' || parentName == 'AllCities' || parentName == 'Nairobi' || parentName == 'Mombasa' || parentName == 'Kisumu' || parentName == 'Thika' || parentName == 'Merchant' || parentName == 'Enterprise')  && windowWidth > '768'" to="/partners" class='link' >
            BECOME A PARTNER</router-link>
            <router-link v-if="(parentName == 'AllCities' || parentName == 'Nairobi' || parentName == 'Mombasa' || parentName == 'Kisumu' || parentName == 'Thika') && windowWidth <= '768'" to="/partners" class='link' >
            BECOME A PARTNER</router-link>
            <!--<router-link to="/signup" class="link-margin" v-if="parentName == 'API'"><div class='button button__link bg-blue bc-blue orange-white flex centerX centerY' type ="button">
            SIGN UP</div></router-link>-->
            <router-link v-if="parentName == 'API' || parentName == 'Partners' || parentName == 'Careers' || parentName == 'SeniorPortManager' || parentName == 'ClientRelationsManager'  || parentName == 'AndroidEngineer'  ||  parentName == 'DataAnalyst' || parentName == 'QualityAssuranceTester' || parentName == 'HeadOfFinance' || parentName == 'KisumuCityManager'  || parentName == 'Terms' || parentName == 'Privacy' || parentName == 'DriverPrivacy' || parentName == 'HeadOfPartnerOperations' || parentName == 'JuniorOperationsAssociate'" to="/" class='link'>HOME</router-link>
            <router-link v-if="windowWidth > '768'" to="/signup" class='link upper__link'>
            LOG IN</router-link>
            <router-link to="/signup" class="link-margin" v-if="parentName == 'API' || parentName == 'Home' || parentName == 'Partners' || parentName == 'Careers' || parentName == 'SeniorPortManager' || parentName == 'ClientRelationsManager'  || parentName == 'AndroidEngineer' || parentName == 'DataAnalyst'  || parentName == 'QualityAssuranceTester' || parentName == 'HeadOfFinance' || parentName == 'KisumuCityManager'  || parentName == 'Terms' || parentName == 'Privacy' || parentName == 'DriverPrivacy' || parentName == 'HeadOfPartnerOperations' || parentName == 'JuniorOperationsAssociate'  || parentName == 'Merchant' || parentName == 'Enterprise'"><div class='button button__link bg-blue bc-blue orange-white flex centerX centerY' type="button">
            SIGN UP</div></router-link>
            <img v-if="windowWidth <= '768'" @click="toggleMenu" class="section__upper_dropdown" src="https://s3-eu-west-1.amazonaws.com/images.sendyit.com/website/home2/menu-blue.png">
            </div>
            <div class="section dropdown-container absolute overflow" v-if="showTable == true">
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
