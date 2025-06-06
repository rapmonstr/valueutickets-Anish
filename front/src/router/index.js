import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Resultoneway from '../views/SearchResultViewOneway.vue'
import Resultroundtrip from '../views/SearchResultViewRoundtrip.vue'
import PayView from '../views/PaymentView.vue'
import LoginForBooking from '../views/BookingLoginView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import TermsViewPage from '../views/TermsViewPage.vue'
import HotelPageView from '../views/HotelPageView.vue'
import OfferView from '../views/OfferView.vue'
import maintenance from '../views/maintenance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/result-oneway',
      name: 'searchresultoneway',
      component: Resultoneway,
      //props: route => ({ data: JSON.parse(route.query.data) })
    },
    {
      path: '/result-roundtrip',
      name: 'searchresultroundtrip',
      component: Resultroundtrip,
      //props: route => ({ data: JSON.parse(route.query.data) })
    },
    {
      path: '/pay',
      name: 'payment',
      component: PayView,
    },
    {
      path: '/booking',
      name: 'LoginForBooking',
      component: LoginForBooking,
    },
    {
      path: '/contact-us',
      name: 'ContactUsView',
      component: ContactUsView,
    },
    {
      path: '/terms-and-conditions',
      name: 'TermsViewPage',
      component: TermsViewPage,
    },
    {
      path: '/hotel-booking',
      name: 'HotelPageView',
      component: HotelPageView,
    },
    {
      path: '/offer',
      name: 'OfferView',
      component: OfferView,
    },
    {
      path: '/this-page-is-under-maintenamce-content-will-be-available-soon',
      name: 'MaintenanceMessage',
      component: maintenance,
    }
  ],
})

export default router
