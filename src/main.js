import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/index.scss"
import 'vant/lib/index.css'
import "vant/lib/index.less"
import './icons'
import Vant,{Lazyload} from "vant"
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
