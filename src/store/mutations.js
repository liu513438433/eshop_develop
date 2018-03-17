import {RECEIVE_BRAND,RECEIVE_CATEGORY,RECEIVE_HOMEPAGES,RECEIVE_ALLBRAND} from './mutation-types'
export default {
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category = category
  },
  [RECEIVE_HOMEPAGES](state,{homepages}){
    state.homepages = homepages
  },
  [RECEIVE_ALLBRAND](state,{allbrand}){
    state.allbrand = allbrand
  },
}
