<template>
  <div class="class">
    <header>
      <div class="header_nav1">
        <router-link to="/class/category">分类</router-link>
      </div>
      <div class="header_nav2">
        <router-link to="/class/brand">品牌</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "cart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .class
    width: 100%
    height calc(100% - 46px)
    position relative
    overflow hidden
    background-color #f5f5f5
    *
      box-sizing border-box
    header
      background-color #fff
      padding 0 15px
      border-bottom 1px solid #cdcdcd
      height 40px
      /*position absolute
      top 0
      right 0
      left 0*/
      div
        width 50%
        height 40px
        line-height 40px
        font-size 13px
        float left
      .header_nav1
        padding-right 5%
        text-align right
      .header_nav2
        padding-left 5%
      a
        padding 0 4px
        font-weight bolder
        color black
      .router-link-active
        color red
        padding-bottom 9px
        border-bottom 2px solid red


</style>
