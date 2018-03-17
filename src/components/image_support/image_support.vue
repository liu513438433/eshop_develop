<template>
  <div class="image_support">
    <div class="item" v-for="(items,index) in imgArr" :key="index">
      <a href="javascript:" v-for="(item,count) in items" :key="count">
        <img :src="item.image">
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      imgArr:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .image_support
    margin-bottom 10px
    display flex
    .item_left
      width 50%
</style>
