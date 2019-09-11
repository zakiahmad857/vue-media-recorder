import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './components';
// import '@fortawesome/fontawesome-free/css/all.css';
import './assets/scss/main.scss'


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app');
