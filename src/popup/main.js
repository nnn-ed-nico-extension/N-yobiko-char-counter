import Vue from 'vue';
import App from './App.vue';
import { Octicon } from 'octicons-vue';

Vue.component('octicon', Octicon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
