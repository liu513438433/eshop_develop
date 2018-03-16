<template>
  <div id="brand">
    <div class="brand_wrap">
      <div class="brand_list" v-for="(items,index) in brand" :key="index">
        <a href="javascript:">
          <div class="brand_header">
            <span>—— {{items.title}} ——</span>
          </div>
        </a>
        <ul>
          <li v-for="(item,index) in items.list" :key="index">
            <a href="javascript:">
              <div class="brand_item">
                <img :src="item.logo" alt="">
              </div>
              <p class="brand_name">{{item.name}}</p>
              <p class="brand_place">{{item.address}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      console.log(this.$store)
      this.$store.dispatch('getBrand',()=>{
        this.$nextTick(()=>{
          new BScroll('#brand',{
            click:true,
            bounce:false
          })
        })
      })
    },
    computed:{
      ...mapState(['brand'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #brand
    width 100%
    height calc(100% - 40px)
    position relative
    overflow hidden
    background-color #f5f5f5
    line-height 1.6
    .brand_wrap
      margin-top 4px
      .brand_list
        background-color #fff
        padding-bottom 15px
        margin-bottom 10px
        border-top 1px solid #f3f4f5
        .brand_header
          padding-top 20px
          text-align center
          font-size 12px
          span
            font-size 12px
        ul
          clearFix()
          padding 0 5px
          li
            width 33.33%
            padding 0 5px
            margin-top 20px
            float left
            position relative
            .brand_item
              border 1px solid #e2e2e2
              text-align center
              height 50px
              position relative
              padding 50px 10px 10px
              img
                height 40px
                max-width 90%
                /*margin-top 4px*/
                margin 10px auto 0
                position absolute
                left 0
                right 0
                top 0
            p
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              text-align center
            .brand_name
              font-size 13px
              margin-top 5px
              color #333
            .brand_place
              font-size 12px
              color #999
</style>
