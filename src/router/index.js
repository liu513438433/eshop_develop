import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/msite/msite'
import Class from '../pages/class/class'
import Cart from '../pages/cart/cart'
import My_pet from '../pages/my_pet/my_pet'
import Category from '../pages/category/category'
import Brand from '../pages/brand/brand'

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
      },
      children:[
        {
          path:'/class/category',
          component:Category,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/class/brand',
          component:Brand,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/class/',
          redirect:'/class/category',
          meta:{
            showFooter:true
          }
        },
      ]
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
