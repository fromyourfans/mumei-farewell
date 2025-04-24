import Vue from 'vue';
import { VueMasonryPlugin } from 'vue-masonry';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
