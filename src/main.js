import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {
  routes
} from './routes';
import './directives/Transform';
import VeeValidate, {Validator} from 'vee-validate';
import msg from './pt_BR';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

Validator.addLocale(msg);
Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})