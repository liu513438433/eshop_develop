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
                <img class="jian" src="http://static.epetbar.com/static_web/wap/src/images/background/jian.png" v-show="item.recommend">
                <span class="tagongyi" v-show="item.tagongyi">TA公益</span>
                <img class="logo" :src="item.logo" alt="">
              </div>
              <p class="brand_name">{{item.name}}</p>
              <p class="brand_place">{{item.address}}</p>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <div class="all_brand">
      <router-link to="/allbrand">全部</router-link>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
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
              .jian
                position absolute
                top -1px
                left -1px
                width 13px
                height 13px
                z-index 1
                transform scale(0.9)
              .tagongyi
                color #fff
                background-color #e44b46
                font-size 8px
                position absolute
                top -1px
                right -3px
                padding 0 2px
                transform scale(0.85)
                z-index 2
              .logo
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
    .all_brand
      width 40px
      height 40px
      right 6px
      bottom 20px
      position absolute
      z-index 10
      background rgba(0,0,0,.4)
      line-height 40px
      border-radius 50%
      text-align center
      a
        font-size 12px
        color #fff
</style>
