// JS
import './js/'
// SCSS
import './assets/scss/main.scss'

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './js/Pages/MainPage.vue'
import ExperiencePage from './js/Pages/ExperiencePage.vue';
import VueScrollTo from 'vue-scrollto';
import AnimationScroll from './js/directives/scrollAnimation.js'
import Projects from './js/Pages/Projects.vue'
import Contacts from './js/Pages/Contacts.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/experience', component: ExperiencePage },
  { path: '/projects', component: Projects },
  { path: '/contacts', component: Contacts }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.directive("scrollanimation", AnimationScroll);

Vue.use(VueRouter);
Vue.use(VueScrollTo);
// Vue init
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data() {
    return {
      closeMenu: false
    }
  },
  mounted() {
    document.dispatchEvent(new Event('custom-render-trigger'))
  }
});
