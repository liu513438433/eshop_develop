// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import  './common/css/reset.css'
import './mock/MockServer'
import './common/css/swiper.css'
import {Button,Swipe, SwipeItem} from 'mint-ui'
/*Vue.config.productionTip = false*/
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  store,
  router
})
