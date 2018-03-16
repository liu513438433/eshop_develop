<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../common/images/0.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../common/images/1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../common/images/2.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../common/images/3.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../common/images/4.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../common/images/5.jpg" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  export default {
    name: "slide"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    .swiper-pagination-bullet
      width 5px
      height 5px
      background-color #fff
      opacity 0.8
      &.swiper-pagination-bullet-active
        width 15px
        border-radius 18%
        transition all .5s
    .swiper-wrapper
      width 100%
      .swiper-slide
        img
          width 100%
          display block
</style>
