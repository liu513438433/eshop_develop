<template>
  <div class="advantage">
    <ul class="advantage_container">
      <li v-for="(item,index) in imgArr" :key="index"><img :src="item.image"></li>
    </ul>
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
  .advantage
    width 100%
    .advantage_container
      display flex
      flex-wrap wrap
      li
        width 20%
        img
          width 100%
</style>
