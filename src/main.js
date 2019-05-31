import VConsole from 'vconsole';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new VConsole();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
