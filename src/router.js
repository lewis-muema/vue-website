import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import API from './views/API.vue'
import Cities from './views/AllCities.vue'
import Nairobi from './views/Nairobi.vue'
import Kisumu from './views/Kisumu.vue'
import Mombasa from './views/Mombasa.vue'
import Thika from './views/Thika.vue'
import Partners from './views/Partners.vue'
import Careers from './views/Careers.vue'
import SeniorPortManager from './views/SeniorPortManager'
import ClientRelationsManager from './views/ClientRelationsManager'
import AndroidEngineer from './views/AndroidEngineer'
import DataAnalyst from './views/DataAnalyst'
import QualityAssuranceTester from './views/QualityAssuranceTester'
import HeadOfFinance from './views/HeadOfFinance'
import KisumuCityManager from './views/KisumuCityManager'
import Terms from './views/Terms'
import Privacy from './views/Privacy'
import DriverPrivacy from './views/DriverPrivacy'
import HeadOfPartnerOperations from './views/HeadOfPartnerOperations'
import JuniorOperationsAssociate from './views/JuniorOperationsAssociate'
//import Enterprise from './views/Enterprise'
//import Merchant from './views/Merchant'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/API',
      name: 'API',
      component: API
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities
    },
    {
      path: '/cities/nairobi',
      name: 'nairobi',
      component: Nairobi
    },
    {
      path: '/cities/kisumu',
      name: 'kisumu',
      component: Kisumu
    },
    {
      path: '/cities/thika',
      name: 'thika',
      component: Thika
    },
    {
      path: '/cities/mombasa',
      name: 'mombasa',
      component: Mombasa
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    },
    {
      path: '/careers/seniorportmanager',
      name: 'seniorportmanager',
      component: SeniorPortManager
    },
    {
      path: '/careers/clientrelationsmanager',
      name: 'clientrelationsmanager',
      component: ClientRelationsManager
    },
    {
      path: '/careers/androidengineer',
      name: 'androidengineer',
      component: AndroidEngineer
    },
    {
      path: '/careers/dataanalyst',
      name: 'dataanalyst',
      component: DataAnalyst
    },
    {
      path: '/careers/qualityassurancetester',
      name: 'qualityassurancetester',
      component: QualityAssuranceTester
    },
    {
      path: '/careers/headoffinance',
      name: 'headoffinance',
      component: HeadOfFinance
    },
    {
      path: '/careers/kisumucitymanager',
      name: 'kisumucitymanager',
      component: KisumuCityManager
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/driverprivacy',
      name: 'driverprivacy',
      component: DriverPrivacy
    },
    {
      path: '/careers/headofpartneroperations',
      name: 'headofpartneroperations',
      component: HeadOfPartnerOperations
    },
    {
      path: '/careers/junioroperationsassociate',
      name: 'junioroperationsassociate',
      component: JuniorOperationsAssociate
    },
    {
      path: '/e-commerce',
      //name: 'merchant',
      //component: Merchant
      beforeEnter() {location.href = 'https://growth.sendyit.com/e-commerce'}
    },
    {
      path: '/enterprise',
      //name: 'enterprise',
      //component: Enterprise
      beforeEnter() {location.href = 'https://growth.sendyit.com'}
    },
    {
      path: '/signup',
      beforeEnter() {location.href = 'https://app.sendyit.com/biz/sendy'}
    },
    {
      path: '/getstarted',
      beforeEnter() {location.href = 'https://apptest.sendyit.com/get_started'}
    },
    {
      path: '/playstore',
      beforeEnter() {location.href = 'https://play.google.com/store/apps/details?id=com.sendy.co.ke.sendyy&amp;hl=en'}
    },
    {
      path: '/appstore',
      beforeEnter() {location.href = 'https://itunes.apple.com/us/app/sendy-delivery-app/id1088688361?ls=1&mt=8'}
    },
    {
      path: '/Help&support',
      beforeEnter() {location.href = 'https://support.sendyit.com'}
    },
    {
      path: '/facebook',
      beforeEnter() {location.href = 'https://www.facebook.com/pages/SENDY/843869815628934'}
    },
    {
      path: '/twitter',
      beforeEnter() {location.href = 'https://twitter.com/SendyMobile'}
    },
    {
      path: '/linkedin',
      beforeEnter() {location.href = 'https://www.linkedin.com/company/9341771?trk=ppro_cprof'}
    },
    {
      path: '/medium',
      beforeEnter() {location.href = 'https://sendyit.com/blog'}
    },
    {
      path: '/blog',
      beforeEnter() {location.href = 'https://sendyit.com/blog'}
    },
    {
      path: '/driverslogin',
      beforeEnter() {location.href = 'https://sendyit.com/partner'}
    },
    {
      path: '/follow',
      beforeEnter() {location.href = 'https://twitter.com/SendyMobile?ref_src=twsrc%5Etfw'}
    },
    {
      path: '/onboarding',
      beforeEnter() {location.href = 'https://partner.sendyit.com/onboarding_portal/'}
    },
    {
      path: '/publicapi',
      beforeEnter() {location.href = 'https://sendypublicapi.docs.apiary.io/#'}
    },




//old sites routes************************************************************************************************

    {
      path: '/default_controller',
      name: 'home',
      component: Home
    },
    {
      path: '/404_override',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'home',
      component: Home
    },
    {
      path: '/privacy/driver',
      name: 'driverprivacy',
      component: DriverPrivacy
    },
    {
      path: '/terms/show',
      name: 'terms',
      component: Terms
    },
    {
      path: '/policy',
      name: 'terms',
      component: Terms
    },
    {
      path: '/team',
      name: 'careers',
      component: Careers
    },
    {
      path: '/career',
      name: 'careers',
      component: Careers
    },
    {
      path: '/jobs',
      name: 'careers',
      component: Careers
    },
    {
      path: '/riders',
      name: 'partners',
      component: Partners
    },
    {
      path: '/insurance',
      name: 'terms',
      component: Terms
    }
  ],
  mode: 'history'
});
