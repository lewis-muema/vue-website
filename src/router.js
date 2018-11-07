import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import VueHome from './views/VueHome.vue'
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
import Enterprise from './views/Enterprise'
import Merchant from './views/Merchant'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/vue',
      name: 'about',
      component: VueHome
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
      path: '/merchant',
      name: 'merchant',
      component: Merchant
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: Enterprise
    }
  ],
  mode: 'history'
});


