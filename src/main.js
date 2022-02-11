import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

