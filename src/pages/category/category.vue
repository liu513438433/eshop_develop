<template>
  <div id="category">
    <div class="category_left">
      <ul>
        <li v-for="(list,index) in category[0]" :key="index"
            @click="change(index)" :class="{on:index===active_index}">
          {{list.name}}
        </li>
      </ul>
    </div>
    <div class="category_right">
      <div class="category_container" v-if="category[1]">
        <div class="category_goods">
          <a href="javascript:">
            <div class="goods_header">
              <span>{{category[0][active_index].name}}</span>
              <img src="../../common/images/allGoods.png" alt="">
            </div>
          </a>
          <ul>
            <li v-for="(item,index) in category[1][active_index][0].list" :key="index">
              <a href="javascript:">
                <div class="goods_item">
                  <img :src="item.photo" alt="">
                  <p>{{item.name}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="category_brand" v-if="category[1][active_index][1]">
          <a href="javascript:">
            <div class="brand_header">
              <span>热门品牌</span>
            </div>
          </a>
          <ul>
            <li v-for="(item,index) in category[1][active_index][1].list" :key="index">
              <a href="javascript:">
                <div class="brand_item">
                  <img :src="item.logo" alt="">
                </div>
                <p>{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        active_index:'5'*1
      }
    },
    mounted(){
      this.$store.dispatch('getCategory',()=>{
        this.$nextTick(()=>{
          new BScroll('.category_left',{
            click:true,
            bounce:false
          })
          new BScroll('.category_right',{
            click:true,
            bounce:false
          })
        })
      })
    },
    computed:{
      ...mapState(['category']),
    },
    methods:{
      change(index){
        this.active_index = index
      }
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
      flex-shrink 0
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
      border-top 5px solid #f3f4f5
      padding-left 5px
      .category_container
        .category_goods
          background-color #fff
          padding 5px 5px 20px
          border-top 1px solid #f3f4f5
          .goods_header
            margin-top 10px
            padding-left 5px
            span
              font-size 12px
            img
              height 10px
              float right
              margin-top 5px
              padding-right 5px
          ul
            clearFix()
            li
              width 33.33%
              padding 0 5px
              margin-top 10px
              float left
              img
                width 100%
              p
                font-size 13px
                text-align center
                color black
                height 20px
                margin-top 10px
        .category_brand
          background-color #fff
          padding 5px 5px 20px
          border-top 1px solid #f3f4f5
          .brand_header
            margin-top 10px
            padding-left 5px
            span
              font-size 12px
          ul
            clearFix()
            li
              width 50%
              padding 0 5px
              margin-top 10px
              float left
              &:last-of-type
                .brand_item
                  background-color: rgba(0,0,0,0)
                  img
                    height 65px
                    margin-top -6px
              .brand_item
                border 1px solid #f3f4f5
                text-align center
                height 55px
                position relative
                overflow hidden
                img
                  height 45px
                  max-width 100%
                  /*margin-top 4px*/
                  margin 4px auto 0
                  position absolute
                  left 0
                  right 0
              p
                font-size 12px
                text-align center
                color black
                height 20px
                margin-top 8px
                white-space nowrap
                text-overflow ellipsis
</style>
