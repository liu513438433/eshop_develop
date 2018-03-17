import {RECEIVE_BRAND,RECEIVE_CATEGORY,RECEIVE_HOMEPAGES,RECEIVE_ALLBRAND} from './mutation-types'
import {reqBrand,reqCategory,reqHomepages,reqAllbrand} from '../api'

export default {
  async getBrand ({commit},callback){
    const result = await reqBrand()
    if (result.code === 0){
      commit(RECEIVE_BRAND,{brand:result.data})
    }
    callback && callback()
  },
  async getCategory ({commit},callback){
    const result = await reqCategory()
    if (result.code === 0){
      commit(RECEIVE_CATEGORY,{category:result.data})
    }
    callback && callback()
  },
  async getHomepages ({commit},callback){
    const result = await reqHomepages()
    if (result.code === 0){
      commit(RECEIVE_HOMEPAGES,{homepages:result.data})
    }
    callback && callback()
  },
  async getAllbrand ({commit},callback){
    const result = await reqAllbrand()
    if (result.code === 0){
      commit(RECEIVE_ALLBRAND,{allbrand:result.data})
    }
    callback && callback()
  },
}
