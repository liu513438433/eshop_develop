<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/msite')" :class="{on:isCurrent('/msite')}">
      <span class="item_icon">
        <i class="iconfont icon-shouyedianpujishishangcheng"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/class')" :class="{on:isCurrent('/class')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/cart')" :class="{on:isCurrent('/cart')}">
      <span class="item_icon">
        <i class="iconfont icon-icon22fuzhi"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/my_pet')" :class="{on:isCurrent('/my_pet')}">
      <span class="item_icon">
        <i class="iconfont icon-chongwu"></i>
      </span>
      <span>我的E宠</span>
    </div>
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
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      justify-content center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

