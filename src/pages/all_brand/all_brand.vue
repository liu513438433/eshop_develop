<template>
  <div id="all_brand">
    <!--全部品牌的头部-->
    <div class="all_brand_header">
      <div class="left" @click="back"><i class="iconfont icon-jiantou2"></i></div>
      <div class="center"><span class="all-brand">全部品牌</span></div>
      <div class="right" @click="showNav"><i class="iconfont icon-kuaijiecaidan"></i></div>
    </div>

    <!--全部品牌的内容容器-->
    <div class="all_brand_content_container">
      <!--头部下方伸展区域  跳转主页面等路由  -->
      <div class="hideArea">
        <div class="hide-nav" :class="{show_nav:isShowNav}">
          <ul class="nav-list">
            <li class="nav-item" @click="goPath('/msite')">
              <i class="iconfont icon-shouyedianpujishishangcheng"></i>
              <p class="text">首页</p>
            </li>
            <li class="nav-item" @click="goPath('/class')">
              <i class="iconfont icon-fenlei"></i>
              <p class="text">商品分类</p>
            </li>
            <li class="nav-item" @click="goPath('/cart')">
              <i class="iconfont icon-icon22fuzhi"><span class="num">0</span></i>
              <p class="text">购物车</p>
            </li>
            <li class="nav-item" @click="goPath('/my_pet')">
              <i class="iconfont icon-chongwu"></i>
              <p class="text">我的E宠</p>
            </li>
          </ul>
        </div>
      </div>

      <!--全部内容容器-->
      <div class="all_brand_content">
        <!--全部品牌列表的容器-->
        <div class="all_brand_content_wrap" ref="brand_container">
          <!--品牌字母索引-->
          <div class="contentkind" v-for="(items,index) in allbrand" :key="index">
            <!--字母-->
            <div class="character">{{items.order}}</div>
            <!--商品列表-->
            <ul class="letter_brandList">
              <li v-for="(item,count) in items.list" :key="count">
                <a href="javascript:">
                  <div class="brand_item_left">
                    <img class="jian" src="http://static.epetbar.com/static_web/wap/src/images/background/jian.png" v-show="item.recommend">
                    <span class="tagongyi" v-show="item.tagongyi">TA公益</span>
                    <img class="logo" :src="item.logo" alt="">
                  </div>
                  <div class="brand_item_right">
                    <p class="brand_name">{{item.name}}</p>
                    <p class="brand_place">{{item.address}}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--字母索引导航-->
    <div class="letter_nav_container">
      <div class="letter_nav_wrap">
        <span v-for="(items,index) in allbrand" :key="index" @click="step(index)" :class="{on:index===currentIndex}">{{items.order}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        isShowNav:false,
        scrollY:0,
        tops:[],
      }
    },

    methods:{
      back(){
        this.$router.back()
      },
      // 去逛逛，去到主界面
      goHomePage(){
        this.$router.replace('/home')
      },

      // 去到指定路由
      goPath(path){
        this.$router.replace(path)
      },

      // 显示导航列表
      showNav(){
        this.isShowNav = !this.isShowNav
      },

      //获取整个品牌列表的高度数组(初始化tops)
      _initTops(){
        let tops = []
        let top = 0
        tops.push(top)
        let lis = this.$refs.brand_container.getElementsByClassName('contentkind')
        Array.prototype.slice.call(lis).forEach((div,index)=>{
          top += div.clientHeight
          tops.push(top)
        })
        this.tops = tops
      },

      //初始化滚动条高度
        _initScroll(){
          this.brandScroll = new BScroll('.all_brand_content',{
            scrollY:true,
            click:true,
            probeType:3,
          })
          this.brandScroll.on('scroll',(pos)=>{
            this.scrollY = Math.abs(pos.y)
          })
        },

      //导航条跳转
      step(index){
        this.scrollY = this.tops[index]
        this.brandScroll.scrollTo(0,-this.scrollY,400)
      }
    },

    mounted(){
        this.$store.dispatch('getAllbrand',()=>{
          this.$nextTick(()=>{
            this._initScroll()
            this._initTops()
          })
        })
    },

    computed:{
      ...mapState(['allbrand']),
      currentIndex(){
        let {tops,scrollY} = this
        let topIndex = 0
        tops.forEach((top,index)=>{
          if (Math.floor(scrollY/top) === 1){
            topIndex = index
          }
        })
        return topIndex
      },
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  // 常用字体颜色
  $color = #f3f4f5
  $bg = #e9e9e9
  #all_brand
    width 100%
    height 100%
    position relative
    .all_brand_header
      position relative
      z-index 5
      width 100%
      background-color white
      display flex
      justify-content space-between
      box-sizing border-box
      padding 2px  7px
      align-items center
      border-bottom 1px solid #f3f3f3
      .left
        .icon-jiantou2
          font-size 25px
          line-height 45px
      .center
        .all-brand
          font-size 18px
          line-height 45px
      .right
        .icon-kuaijiecaidan
          font-size 20px
          line-height 45px



    .all_brand_content_container
      height calc(100% - 50px)
      display flex
      flex-direction column
      .hideArea
        .hide-nav
          height 0
          overflow hidden
          width 100%
          background-color white
          transition  0.6s
          border-bottom 1px solid #f3f3f3
          &.show_nav
            height 69px
          .nav-list
            box-sizing border-box
            padding 10px 0 5px 0
            width 100%
            display flex
            justify-content space-around
            align-items center
            .nav-item
              width 25%
              text-align center
              .iconfont
                font-size 20px
                color #999
                position relative
                .num
                  width 18px
                  height 18px
                  background-color red
                  border-radius 50%
                  font-size 12px
                  color #fff
                  text-align center
                  line-height 18px
                  position absolute
                  top -11px
                  left 13px
                  border #fff solid 2px
              .text
                font-size 14px
                line-height 25px
                color black




      .all_brand_content
        flex-grow 1
        width 100%
        overflow hidden
        .all_brand_content_wrap
          .contentkind
            .character
              width 100%
              font-size 12px
              font-weight 400
              color #999
              line-height 24px
              text-indent 15px
            .letter_brandList
              background-color #fff
              padding-right 20px
              width 100%
              li
                padding 10px
                border-bottom 1px solid #f3f4f5
                clearFix()
                .brand_item_left
                  text-align center
                  width 28%
                  height 50px
                  max-width 150px
                  border 1px solid #f3f4f5
                  position relative
                  float left
                  .jian
                    position absolute
                    top -1px
                    left -1px
                    width 13px
                    height 13px
                    z-index 1
                  .tagongyi
                    display block
                    color #fff
                    background-color #e44b46
                    font-size 8px
                    position absolute
                    top 0
                    right 0
                    padding 1px 1px
                    z-index 2
                  .logo
                    max-width 90%
                    height 40px
                    margin 5px auto

                .brand_item_right
                  float left
                  margin 5px 0 5px 20px
                  .brand_name
                    font-size 14px
                    color #333
                    line-height 1.6
                  .brand_place
                    font-size 12px
                    color #999
                    line-height 1.6

    .letter_nav_container
      position absolute
      top 0
      height 100%
      right 4px
      width 10px
      z-index 3
      display table
      .letter_nav_wrap
        display table-cell
        vertical-align middle
        span
          display block
          font-size 12px
          height 12px
          margin-top 4px
          color #666
        .on
          color red
          font-weight bolder
</style>
