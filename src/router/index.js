import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/msite/msite'
import Class from '../pages/class/class'
import Cart from '../pages/cart/cart'
import My_pet from '../pages/my_pet/my_pet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/class',
      component:Class,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/Cart',
      component:Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/my_pet',
      component:My_pet,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'msite'
    }
  ]
})
