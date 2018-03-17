<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
          <img :src="item.image" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!--<mt-swipe>
    <mt-swipe-item><img src="../../common/images/0.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../common/images/1.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../common/images/2.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../common/images/3.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../common/images/4.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../common/images/5.jpg" alt=""></mt-swipe-item>
  </mt-swipe>-->
</template>

<script>
  import Swiper from 'swiper'

  export default {
    props:{
      imgArr:Array
    },
    mounted(){
      this.$nextTick(()=>{
            let swiper = new Swiper('.swiper-container',{
              loop: true,
              observe:true,
              autoplay:{
                delay:2500,
                disableOnInteraction:false
              },
              pagination: {
                el: '.swiper-pagination'
              }
            })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    .swiper-pagination-bullets
      .swiper-pagination-bullet
        width 6px
        height 6px
        background-color #fff
        opacity 0.8
        margin 0 5px
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
    /*.mint-swipe
      width 100%
      height 160px
      img
        width 100%*/
</style>
