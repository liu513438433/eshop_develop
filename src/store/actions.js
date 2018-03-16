import {RECEIVE_BRAND,RECEIVE_CATEGORY,RECEIVE_HOMEPAGES} from './mutation-types'
import {reqBrand,reqCategory,reqHomepages} from '../api'

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
      console.log(result.data)
    }
    callback && callback()
  },
  async getHomepages ({commit},callback){
    const result = await reqHomepages()
    if (result.code === 0){
      commit(RECEIVE_HOMEPAGES,{homepages:result.data})
      console.log(result.data)
    }
    callback && callback()
  },
}
