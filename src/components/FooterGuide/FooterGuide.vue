<template>
  <footer class="footer_guide">
    <router-link tag="div" class="guide_item" to="/msite">
      <span class="item_icon">
        <i class="iconfont icon-shouyedianpujishishangcheng"></i>
      </span>
      <span>首页</span>
    </router-link>
    <router-link tag="div" class="guide_item" to="/class">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </router-link>
    <router-link tag="div" class="guide_item" to="/cart">
      <span class="item_icon">
        <i class="iconfont icon-icon22fuzhi"></i>
      </span>
      <span>购物车</span>
    </router-link>
    <router-link tag="div" class="guide_item" to="/my_pet">
      <span class="item_icon">
        <i class="iconfont icon-chongwu"></i>
      </span>
      <span>我的E宠</span>
    </router-link>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide  //footer
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 45px
    display flex
    border-top 1px solid #e7e7e7
    div
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      justify-content center
      margin 4px
      color #999999
      &.router-link-active
        color #02a774
      span
        font-size 10px
        margin-top 3px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

