<template>
  <div id="category">
    <div class="category_left">
      <ul>
        <li>为您推荐</li>
        <li>狗狗主粮</li>
        <li class="on">狗狗零食</li>
        <li>狗狗服饰</li>
        <li>狗狗窝垫</li>
        <li>狗狗生活</li>
        <li>狗狗玩具</li>
        <li>狗狗保健</li>
        <li>狗狗医疗</li>
        <li>狗狗牵引</li>
        <li>狗狗美容</li>
        <li>狗狗周边</li>
        <li>狗狗清洁</li>
      </ul>
    </div>
    <div class="category_right">
      <div class="category_container">
        <div class="category_goods">
          <a href="javascript:">
            <div class="goods_header">
              <span>狗狗生活</span>
              <img src="../../common/images/allGoods.png" alt="">
            </div>
          </a>
          <ul>
            <li>
              <a href="javascript:">
                <div class="goods_item">
                  <img src="../../common/images/category1.jpg" alt="">
                  <p>狗狗餐具</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="category_brand"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.category_left',{
          click:true,
          bounce:false
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #category
    width 100%
    height calc(100% - 40px)
    position relative
    overflow hidden
    background-color #f5f5f5
    display flex
    .category_left
      height 100%
      overflow hidden
      width 70px
      ul
        background-color #fff
        li
          height 50px
          display flex
          align-items center
          justify-content center
          border-bottom 1px solid #f3f4f5
          font-size 13px
        .on
          background-color #f5f5f5
          color red
    .category_right
      height 100%
      overflow hidden
      flex-grow 1
    .category_goods
      background-color #fff
</style>
