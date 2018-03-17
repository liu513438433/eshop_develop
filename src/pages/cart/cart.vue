<template>
  <div>
    <div class="shop-cart-header">
      <div class="left" @click="back"><i class="iconfont icon-jiantou2"></i></div>
      <div class="center"><span class="all-brand">购物车</span></div>
      <div class="right" @click="showNav"><i class="iconfont icon-kuaijiecaidan"></i></div>
    </div>

    <!--头部下方伸展区域  跳转主页面等路由  -->
    <div class="hide-nav" :class="{'show-nav':isShowNav}">
      <ul class="nav-list">
        <li class="nav-item" @click="goPath('/home')">
          <i class="iconfont icon-shouyedianpujishishangcheng"></i>
          <p class="text">首页</p>
        </li>
        <li class="nav-item" @click="goPath('/kind')">
          <i class="iconfont icon-fenlei"></i>
          <p class="text">商品分类</p>
        </li>
        <li class="nav-item" @click="goPath('/shopcart')">
          <i class="iconfont icon-icon22fuzhi"><span class="num">0</span></i>
          <p class="text">购物车</p>
        </li>
        <li class="nav-item" @click="goPath('/my')">
          <i class="iconfont icon-chongwu"></i>
          <p class="text">我的E宠</p>
        </li>
      </ul>
    </div>

    <div class="shop-car-container">
      <div class="not-login-cart">
        <i class="iconfont icon-icon22fuzhi"></i>
        <p class="nothing-in-cart">购物车是空的</p>
        <a href="javascript:" class="go-shop" @click="goHomePage">去逛逛</a>
        <a href="javascript:" class="collection">我的收藏</a>
      </div>
    </div>


  </div>
</template>

<script>
  export default{
    data(){
      return {
        isShowNav:false
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
      }



    },



  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  // 常用字体颜色
  $color = #f3f4f5
  $bg = #e9e9e9

  .shop-cart-header
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
        font-size 25px
        line-height 45px



  .hide-nav
    height 0
    overflow hidden
    width 100%
    transform translate3d(0,0,0)
    background-color white
    transition  0.6s
    border-bottom 1px solid #f3f3f3
    &.show-nav
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







  .shop-car-container
    width 100%
    background-color #fff
    padding-bottom 50px
    .not-login-cart
      width 100%
      text-align center
      .icon-icon22fuzhi
        display inline-block
        margin 50px 0 20px
        font-size 100px
        color #dbdbdb
      .nothing-in-cart
        color #dbdbdb
      .go-shop
        width 80px
        height 20px
        display inline-block
        margin  20px 3px 0 0
        border 1px solid #999
        padding 8px 10px
        font-size 18px
        border-radius 5px
      .collection
        width 80px
        height 20px
        font-size 18px
        display inline-block
        margin-top 20px
        border 1px solid #999
        border-radius 5px
        padding 8px 10px







</style>
