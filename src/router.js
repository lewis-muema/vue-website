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
      path: '/home',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/home_abtesting'}
    }, 
    {
      path: '/grow',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/fbmerchant'}
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
      path: '/you',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/sales_presentation'}
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
      path: '/contact',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Contact'}
    }, 
    {
      path: '/contact/send',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Contact/send'}
    }, 
    {
      path: '/contact/driver_application',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Contact/driver_application'}
    }, 
    {
      path: '/contact/rider_send',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Contact/rider_send'}
    },  
    {
      path: '/apple-app-site-association',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/apple_app_site_association'}
    },
    {
      path: '/get_quote',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/get_quote'}
    }, 
    {
      path: '/apibutton',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/apibutton'}
    }, 
    {
      path: '/button',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/apibutton'}
    }, 
    {
      path: '/safety',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/safety'}
    }, 
    {
      path: '/intercity',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/intercity'}
    }, 
    {
      path: '/insurance',
      name: 'terms',
      component: Terms
    }, 
    {
      path: '/cities/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/cities/$1'}
    }, 
    {
      path: '/m/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/M'}
    }, 
    {
      path: '/invite/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Invite/promocode/$1'}
    },  
    {
      path: '/invite/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Invite/promocode/$1'}
    },
    {
      path: '/track/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/track/$1'}
    }, 
    {
      path: '/track/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/track/$1'}
    }, 
    {
      path: '/fb/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/mcommerce/$1'}
    }, 
    {
      path: '/fb/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/mcommerce/$1'}
    }, 
    {
      path: '/rate/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/rate/$1'}
    }, 
    {
      path: '/rate/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/rate/$1'}
    }, 
    {
      path: '/verify/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/verify/$1'}
    }, 
    {
      path: '/verify/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/verify/$1'}
    }, 
    {
      path: '/onboard/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/onboard/$1'}
    },  
    {
      path: '/confirm/(:any)/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/confirm1/$1/$2'}
    },
    {
      path: '/confirm/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/confirm1/$1'}
    }, 
    {
      path: '/pay/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/pay/(:any)'}
    }, 
    {
      path: '/pay/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/pay/$1'}
    }, 
    {
      path: '/apply',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/apply'}
    }, 
    {
      path: '/riders/apply',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/apply'}
    }, 
    {
      path: '/partners/apply',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/apply'}
    }, 
    {
      path: '/apply/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/apply/$1'}
    }, 
    {
      path: '/riders/apply/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/apply/$1'}
    }, 
    {
      path: '/approve/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/approve/$1'}
    },  
    {
      path: '/approve/',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/approve/$1'}
    },
    {
      path: '/blog/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/blog/$1'}
    }, 
    {
      path: '/blog',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/blog'}
    }, 
    {
      path: '/growth_signup',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/growth_signup'}
    }, 
    {
      path: '/growth_signup_with_phone/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/growth_signup_with_phone/$1'}
    }, 
    {
      path: '/growth_signup_test',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/growth_signup/test'}
    }, 
    {
      path: '/ambassador',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/ambassador'}
    }, 
    {
      path: '/ambassadors',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/ambassador'}
    }, 
    {
      path: '/owners',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/owners'}
    }, 
    {
      path: '/partner',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/owners'}
    },  
    {
      path: '/chat',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Home/chat'}
    },
    {
      path: '/accept/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/accept/$1'}
    }, 
    {
      path: '/letsgrow',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/letsgrow'}
    }, 
    {
      path: '/letsgrow/(:any)',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Link/letsgrow/$1'}
    }, 
    {
      path: '/loaderio-d5e09ad52ac052d2ad229edb1b2f43cb',
      beforeEnter() {location.href = 'https://www.sendy.co.ke/Loaderio'}
    }
  ],
  mode: 'history'
});


