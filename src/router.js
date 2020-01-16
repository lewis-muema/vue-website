/* eslint-disable no-restricted-globals */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import API from './views/API.vue';
import Cities from './views/AllCities.vue';
import Nairobi from './views/Nairobi.vue';
import Kisumu from './views/Kisumu.vue';
import Mombasa from './views/Mombasa.vue';
import Thika from './views/Thika.vue';
import Partners from './views/Partners.vue';
import Careers from './views/Careers.vue';
import SeniorPortManager from './views/careers/SeniorPortManager.vue';
import KisumuCityManager from './views/careers/KisumuCityManager.vue';
import ClientRelationsManager from './views/careers/ClientRelationsManager.vue';
import AndroidEngineer from './views/careers/AndroidEngineer.vue';
import DataAnalyst from './views/careers/DataAnalyst.vue';
import QualityAssuranceTester from './views/careers/QualityAssuranceTester.vue';
import HeadOfFinance from './views/careers/HeadOfFinance.vue';
import ProductManager from './views/careers/ProductManager.vue';
import OperationsAssociate from './views/careers/OperationsAssociate.vue';
import MarketingAssociateUG from './views/careers/MarketingAssociateUG.vue';
import OperationsAssociateUG from './views/careers/OperationsAssociateUG.vue';
import OperationsLeadUG from './views/careers/OperationsLeadUG.vue';
import CPS from './views/careers/CPS.vue';
import JRsupport from './views/careers/JRsupport.vue';
import GMUG from './views/careers/GMUG.vue';
import Privacy from './views/Privacy.vue';
import DriverPrivacy from './views/DriverPrivacy.vue';
import HeadOfPartnerOperations from './views/careers/HeadOfPartnerOperations.vue';
import JuniorOperationsAssociate from './views/careers/JuniorOperationsAssociate.vue';
import ManagementAccountantUG from './views/careers/ManagementAccountantUG.vue';
import FrontendEngineer from './views/careers/FrontendEngineer.vue';
import Terms from './views/Terms.vue';
import PriceRequest from './views/PriceRequest.vue';
import PartnerEarnings from './views/Earnings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/API',
      name: 'API',
      component: API,
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities,
    },
    {
      path: '/cities/nairobi',
      name: 'nairobi',
      component: Nairobi,
    },
    {
      path: '/cities/kisumu',
      name: 'kisumu',
      component: Kisumu,
    },
    {
      path: '/cities/thika',
      name: 'thika',
      component: Thika,
    },
    {
      path: '/cities/mombasa',
      name: 'mombasa',
      component: Mombasa,
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners,
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers,
    },
    {
      path: '/careers/seniorportmanager',
      name: 'seniorportmanager',
      component: SeniorPortManager,
    },
    {
      path: '/careers/OperationsAssociate',
      name: 'OperationsAssociate',
      component: OperationsAssociate,
    },
    {
      path: '/careers/OperationsAssociateUG',
      name: 'OperationsAssociateUG',
      component: OperationsAssociateUG,
    },
    {
      path: '/careers/ProductManager',
      name: 'ProductManager',
      component: ProductManager,
    },
    {
      path: '/careers/MarketingAssociateUG',
      name: 'MarketingAssociateUG',
      component: MarketingAssociateUG,
    },
    {
      path: '/careers/clientrelationsmanager',
      name: 'clientrelationsmanager',
      component: ClientRelationsManager,
    },
    {
      path: '/careers/androidengineer',
      name: 'androidengineer',
      component: AndroidEngineer,
    },
    {
      path: '/careers/customer&partnersupport',
      name: 'CPS',
      component: CPS,
    },
    {
      path: '/careers/jrsupportmanager',
      name: 'JRsupport',
      component: JRsupport,
    },
    {
      path: '/careers/countrygm',
      name: 'GMUG',
      component: GMUG,
    },
    {
      path: '/careers/dataanalyst',
      name: 'dataanalyst',
      component: DataAnalyst,
    },
    {
      path: '/careers/qualityassurancetester',
      name: 'qualityassurancetester',
      component: QualityAssuranceTester,
    },
    {
      path: '/careers/headoffinance',
      name: 'headoffinance',
      component: HeadOfFinance,
    },
    {
      path: '/careers/kisumucitymanager',
      name: 'kisumucitymanager',
      component: KisumuCityManager,
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/driverprivacy',
      name: 'driverprivacy',
      component: DriverPrivacy,
    },
    {
      path: '/careers/headofpartneroperations',
      name: 'headofpartneroperations',
      component: HeadOfPartnerOperations,
    },
    {
      path: '/careers/junioroperationsassociate',
      name: 'junioroperationsassociate',
      component: JuniorOperationsAssociate,
    },
    {
      path: '/careers/operationsleadug',
      name: 'operationsleadug',
      component: OperationsLeadUG,
    },
    {
      path: '/careers/managementaccountantug',
      name: 'managementaccountantug',
      component: ManagementAccountantUG,
    },
    {
      path: '/careers/frontendengineer',
      name: 'frontendengineer',
      component: FrontendEngineer,
    },
    {
      path: '/pricerequest',
      name: 'pricerequest',
      component: PriceRequest,
    },
    {
      path: '/earnings',
      name: 'earnings',
      component: PartnerEarnings,
    },
    {
      path: '/e-commerce',
      // name: 'merchant',
      // component: Merchant
      beforeEnter() {
        location.href = 'https://growth.sendyit.com/e-commerce';
      },
    },
    {
      path: '/enterprise',
      // name: 'enterprise',
      // component: Enterprise
      beforeEnter() {
        location.href = 'https://growth.sendyit.com/enterprise';
      },
    },
    {
      path: '/login',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/auth/';
      },
    },
    {
      path: '/signup',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/auth/sign_up/';
      },
    },
    {
      path: '/getstarted',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/auth/sign_up';
      },
    },
    {
      path: '/playstore',
      beforeEnter() {
        location.href = 'https://play.google.com/store/apps/details?id=com.sendy.co.ke.sendyy&amp;hl=en';
      },
    },
    {
      path: '/appstore',
      beforeEnter() {
        location.href = 'https://itunes.apple.com/us/app/sendy-delivery-app/id1088688361?ls=1&mt=8';
      },
    },
    {
      path: '/Help&support',
      beforeEnter() {
        location.href = 'https://support.sendyit.com';
      },
    },
    {
      path: '/facebook',
      beforeEnter() {
        location.href = 'https://www.facebook.com/pages/SENDY/843869815628934';
      },
    },
    {
      path: '/twitter',
      beforeEnter() {
        location.href = 'https://twitter.com/SendyMobile';
      },
    },
    {
      path: '/linkedin',
      beforeEnter() {
        location.href = 'https://www.linkedin.com/company/9341771?trk=ppro_cprof';
      },
    },
    {
      path: '/medium',
      beforeEnter() {
        location.href = 'https://sendyit.com/blog';
      },
    },
    {
      path: '/blogpage',
      beforeEnter() {
        location.href = 'https://blog.sendyit.com';
      },
    },
    {
      path: '/driverslogin',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com';
      },
    },
    {
      path: '/follow',
      beforeEnter() {
        location.href = 'https://twitter.com/SendyMobile?ref_src=twsrc%5Etfw';
      },
    },
    {
      path: '/onboarding',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/onboarding_portal/';
      },
    },
    {
      path: '/publicapi',
      beforeEnter() {
        location.href = 'https://sendypublicapi.docs.apiary.io/#';
      },
    },

    // old sites routes************************************************************************************************

    {
      path: '/default_controller',
      name: 'home',
      component: Home,
    },
    {
      path: '/404_override',
      name: 'home',
      component: Home,
    },
    {
      path: '/personal',
      name: 'home',
      component: Home,
    },
    {
      path: '/privacy/driver',
      name: 'driverprivacy',
      component: DriverPrivacy,
    },
    {
      path: '/terms/show',
      name: 'terms',
      component: Terms,
    },
    {
      path: '/policy',
      name: 'terms',
      component: Terms,
    },
    {
      path: '/team',
      name: 'careers',
      component: Careers,
    },
    {
      path: '/career',
      name: 'careers',
      component: Careers,
    },
    {
      path: '/jobs',
      name: 'careers',
      component: Careers,
    },
    {
      path: '/riders',
      name: 'partners',
      component: Partners,
    },
    {
      path: '/insurance',
      name: 'terms',
      component: Terms,
    },
    {
      path: '/track/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/external/tracking/${from.params.any}`;
      },
    },
    {
      path: '/track/',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/external/tracking/';
      },
    },
    {
      path: '/invite/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/biz/invite/u/1/${from.params.any}`;
      },
    },
    {
      path: '/invite/',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/biz/invite/u/1/';
      },
    },
    {
      path: '/fb/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/biz/mcommerce/details/${from.params.any}`;
      },
    },
    {
      path: '/fb/',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/biz/mcommerce/details/';
      },
    },
    {
      path: '/rate/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/external/rating/${from.params.any}`;
      },
    },
    {
      path: '/rate/',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/external/rating/';
      },
    },
    {
      path: '/verify/:any',
      beforeEnter(from) {
        location.href = `https://oldapp.sendyit.com/biz/sendyconnect/receipt/${from.params.any}`;
      },
    },
    {
      path: '/verify/',
      beforeEnter() {
        location.href = 'https://oldapp.sendyit.com/biz/sendyconnect/receipt/';
      },
    },
    {
      path: '/onboard/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/biz/onboard/${from.params.any}`;
      },
    },
    {
      path: '/confirm/:any1/:any2',
      beforeEnter(from) {
        location.href = `https://partner.sendyit.com/external/confirm/action/${from.params.any1}/${from.params.any2}`;
      },
    },
    {
      path: '/confirm/',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/external/confirm/action/';
      },
    },
    {
      path: '/pay/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/biz/external_pay/index/${from.params.any}`;
      },
    },
    {
      path: '/pay/',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/biz/external_pay/index/';
      },
    },
    {
      path: '/apply/:any',
      beforeEnter(from) {
        location.href = `https://partner.sendyit.com/onboarding_portal/${from.params.any}`;
      },
    },
    {
      path: '/riders/apply/:any',
      beforeEnter(from) {
        location.href = `https://partner.sendyit.com/onboarding_portal/${from.params.any}`;
      },
    },
    {
      path: '/apply',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/onboarding_portal/';
      },
    },
    {
      path: '/riders/apply',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/onboarding_portal/';
      },
    },
    {
      path: '/partners/apply',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/onboarding_portal/';
      },
    },
    {
      path: '/approve/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/biz/confirm_order/index/${from.params.any}`;
      },
    },
    {
      path: '/approve/',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/biz/confirm_order/index/';
      },
    },
    {
      path: '/blog/:any',
      beforeEnter(from) {
        location.href = `https://medium.com/sendy-ke/${from.params.any}`;
      },
    },
    {
      path: '/blog',
      beforeEnter() {
        location.href = 'https://medium.com/sendy-ke/';
      },
    },
    {
      path: '/growth_signup_with_phone/:any',
      beforeEnter(from) {
        location.href = `https://app.sendyit.com/biz/growth/${from.params.any}`;
      },
    },
    {
      path: '/growth_signup',
      beforeEnter() {
        location.href = 'https://app.sendyit.com/biz/growth/';
      },
    },
    {
      path: '/growth_signup_test',
      beforeEnter() {
        location.href = 'https://apptest.sendyit.com/biz/growth/';
      },
    },
    {
      path: '/accept/:any',
      beforeEnter(from) {
        location.href = `https://partner.sendyit.com/driverequest/${from.params.any}`;
      },
    },
    {
      path: '/letsgrow/:any',
      beforeEnter() {
        location.href = 'https://share.hsforms.com/12uJ1FBGYRzeuKtjY6MaTeQ2y4yv';
      },
    },
    {
      path: '/ambassador',
      beforeEnter() {
        location.href = 'https://eportal.sendyit.com/ambassador/';
      },
    },
    {
      path: '/ambassadors',
      beforeEnter() {
        location.href = 'https://eportal.sendyit.com/ambassador/';
      },
    },
    {
      path: '/owners',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/';
      },
    },
    {
      path: '/partner',
      beforeEnter() {
        location.href = 'https://partner.sendyit.com/';
      },
    },
    {
      path: '/letsgrow',
      beforeEnter() {
        location.href = 'https://share.hsforms.com/12uJ1FBGYRzeuKtjY6MaTeQ2y4yv';
      },
    },
  ],
  mode: 'history',
});
