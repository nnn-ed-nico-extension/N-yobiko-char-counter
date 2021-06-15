import Vue from 'vue';
import App from './App.vue';
import { Octicon } from 'octicons-vue';
import router from './router';


Vue.component('octicon', Octicon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
