<template>
<div class="msite">
  <div class="downApp" v-show="isShow">
    <span class="closebtn" @click="closebtn">
      <img class="close_down_bar" src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
    </span>
    <div class="appdownimg">
      <a href="javascript:">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
      </a>
    </div>
  </div>
  <div class="main" id="indebox">
    <div class="indexHeader">
      <div class="header_line1">
        <div class="header_search">
          <div class="location">
            <a href="javascript:">
              <span class="catordog">狗狗</span>
              <span class="fenge">|</span>
              <span class="my_place">哈尔滨</span>
              <span class="more">
                <i class="iconfont icon-sanjiaoxing-down"></i>
              </span>
            </a>
          </div>
          <p class="search_text">
            <a href="javascript:">
              <input type="search" placeholder="搜索商品和品牌" disabled>
              <i class="iconfont icon-icon-test"></i>
            </a>
          </p>
          <a href="javascript:" class="category">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
          </a>
        </div>
      </div>
      <div class="header_line2">
        <div class="find_container">
          <ul class="find_nav">
            <li class="dscroll-li on"><a href="javascript:">首页</a></li>
            <li class="dscroll-li"><a href="javascript:">狗狗主粮</a></li>
            <li class="dscroll-li"><a href="javascript:">服饰城</a></li>
            <li class="dscroll-li"><a href="javascript:">医疗保健</a></li>
            <li class="dscroll-li"><a href="javascript:">零食玩具</a></li>
            <li class="dscroll-li"><a href="javascript:">日用外出</a></li>
            <li class="dscroll-li"><a href="javascript:">美容香波</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main_container">
      <div class="content_wrap" :class="{on_bottom:isShow}" v-if="homepages[0]">
        <slide :imgArr="homepages[0].value"/>
        <img :src="homepages[1].value[0].image" style="width: 100%">
        <advantage :imgArr="homepages[2].menus"/>
        <div class="cuxiao">
          <img :src="homepages[3].value[0].image" style="width: 100%">
          <cuxiao_change :imgArr="homepages[4].goods"/>
          <div class="gif">
          <img :src="homepages[5].value[0].image">
          <img :src="homepages[6].value[0].image">
          <img :src="homepages[7].value[0].image">
          <image_support :imgArr="homepages[8].content_images"/>
          <img :src="homepages[9].value[0].image">
          <slide :imgArr="homepages[10].value"/>
          <img :src="homepages[11].value[0].image">
          <image_support :imgArr="homepages[12].content_images"/>
          <image_support :imgArr="homepages[13].content_images"/>
          <image_support :imgArr="homepages[14].content_images"/>
          <image_support :imgArr="homepages[15].content_images"/>
          <image_support :imgArr="homepages[16].content_images"/>
          <img :src="homepages[17].value[0].image">
          <img :src="homepages[18].value[0].image">
          <img :src="homepages[19].value[0].image">
          <image_support :imgArr="homepages[20].content_images"/>
          <img :src="homepages[21].value[0].image">
          <image_support :imgArr="homepages[22].content_images"/>
          </div>
          <msite_footer/>
        </div>
      </div>
    </div>
  </div>
  <div class="godog1 godog" v-show="dogChange"></div>
  <div class="godog2 godog" v-show="!dogChange"></div>
</div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import slide from '../../components/silde/slide'
  import advantage from '../../components/advantage/advantage'
  import cuxiao_change from '../../components/cuxiao_change/cuxiao_change'
  import image_support from '../../components/image_support/image_support'
  import msite_footer from '../../components/msite_footer/msite_footer'
  export default {
    data(){
      return{
        isShow:true,
        dogChange:true,
      }
    },
    mounted(){
      this.$store.dispatch('getHomepages',()=>{
        this.$nextTick(()=>{
          let navBS = new BScroll('.find_container',{
            scrollX:true,
            click:true
          })

          /*let swiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay:{
              delay:2500,
              disableOnInteraction:false
            },
            pagination: {
              el: '.swiper-pagination'
            }
          })*/

          new BScroll('.main_container',{
            scrollX:true,
            click:true
          })

          setInterval(()=>{
            this.changeDog()
          },1500)
        })
      })
    },
    computed:{
      ...mapState(['homepages'])
    },
    methods:{
      closebtn(){
        this.isShow = false
      },
      changeDog(){
        this.dogChange = !this.dogChange
      }
    },
    components:{
      slide,
      advantage,
      cuxiao_change,
      image_support,
      msite_footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    line-height 0
    width: 100%
    height calc(100% - 46px)
    position relative
    overflow hidden
    img
      display block
    .downApp
      width 100%
      .closebtn
        display inline-block;
        width 5%;
        margin-right 2%;
        vertical-align middle;
        position absolute;
        top 3%
        left 2%
        .close_down_bar
          height 100%
          width 100%
      .appdownimg
        a
          text-decoration none
          -webkit-tap-highlight-color rgba(0,0,0,0)
          img
            width 100%
    #indebox
      background-color #f5f5f5
      line-height 1.6
      width 100%
      height 100%
      position relative
      overflow hidden
      .indexHeader
        width 100%
        position absolute
        top 0
        background-color #fff
        z-index 2
        .header_line1
          padding 5px 10px
          .header_search
            padding 8px 0
            font-size 14px
            clearFix()
            .location
              float left
              margin-right 8px
              .catordog
                color #898989
              .fenge
                color #898989
              .my_place
                color #898989
                font-size 13px
              i
                font-size 11px
                margin-left -2px
            .search_text
              float left
              width 61%
              position relative
              a
                input
                  width 100%
                  border 0
                  outline none
                  color #bcbcbc
                  background-color #e9e9e9
                  height 25px
                  border-radius 4px
                  font-size 13px
                  text-indent 10px
                .icon-icon-test
                  font-size 12px
                  position absolute
                  top 3px
                  right 3px
            .category
              float right
              line-height 0
              img
                width 25px
        .header_line2
          width 100%
          font-size 14px
          color #666
          line-height 36px
          .find_container
            overflow hidden
            .find_nav
              clearFix()
              width 140%
              text-align center
              position relative
              .dscroll-li
                float left
                width 14%
                &.on
                  a
                    color #459d36
                    padding 0 3px 5px
                    border-bottom 2px solid #459d36
      .main_container
        height 100%
        overflow hidden
        .content_wrap
          width 100%
          padding-top 87px
          &.on_bottom
            padding-bottom 46px
          .cuxiao
            font-size 14px
            background-color #fff
            .gif
              background-color black
              img
                width 100%
    .godog
      width 41px
      height 46px
      position absolute
      bottom 8%
      right -1px
      background-image url(../../common/images/godog.png)
      background-size 80px auto
    .godog2
      background-position 40px 0
</style>
