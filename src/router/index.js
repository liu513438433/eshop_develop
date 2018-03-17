import Vue from 'vue'
import Router from 'vue-router'
const Msite = ()=> import('../pages/msite/msite')
const Class = ()=> import('../pages/class/class')
const Cart = ()=> import('../pages/cart/cart')
const My_pet = ()=> import('../pages/my_pet/my_pet')
const Category = ()=> import('../pages/category/category')
const Brand = ()=> import('../pages/brand/brand')
const All_brand = ()=> import('../pages/all_brand/all_brand')


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
      path:'/allbrand',
      component:All_brand,
    },
    {
      path:'/',
      redirect:'msite'
    }
  ]
})
