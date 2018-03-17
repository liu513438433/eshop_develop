<template>
  <div class="cuxiao_change">
    <div class="cuxiao_top">
      <div class="cuxiao_logo">
        <img src="../../common/images/fengqiang.png">
      </div>
      <div class="cuxiao_more">
        <img src="../../common/images/more.png" alt="">
      </div>
      <div class="cuxiao_time">
        <span>本场结束</span>
        <span class="cuxiao_border">21</span>
        <span>:</span>
        <span class="cuxiao_border">00</span>
      </div>
    </div>
    <div class="cuxiao_container_slide">
      <div class="cuxiao_slide">
        <div class="cuxiao_slide_wraper" v-for="(item,index) in imgArr" :key="index">
          <img :src="item.image.image" alt="">
          <div class="cuxiao_price">{{item.sale_price}}</div>
          <div class="cuxiao_cheaper">{{item.little_price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      imgArr:Array
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.cuxiao_container_slide',{
          scrollX:true,
          click:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cuxiao_change
    .cuxiao_top
      clearFix()
      margin 8px 10px
      .cuxiao_logo
        float left
        margin-top 3px
        img
          width 85px
          height 19px
      .cuxiao_time
        float right
        span
          font-size 13px
        .cuxiao_border
          border 1px solid #ddd
          padding 0 1px
      .cuxiao_more
        float right
        margin -10px -18px 0 -7px
        text-align right
        padding-top 2px
        img
          height 34px
    .cuxiao_container_slide
      margin-bottom 10px
      overflow hidden
      width 100%
      .cuxiao_slide
        display flex
        width 225%
        .cuxiao_slide_wraper
          display flex
          flex-wrap nowrap
          flex-direction column
          align-items center
          text-align center
          margin 0 11px
          img
            width 85px
          .cuxiao_price
            font-size 14px
            margin-top 5px
            color red
          .cuxiao_cheaper
            font-size 12px

</style>
