import Vue from 'vue';
import App from './App.vue';
import { Octicon } from 'octicons-vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft, faInfoCircle);

Vue.component('fa-icon', FontAwesomeIcon)


Vue.component('octicon', Octicon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
