<template>
  <div class="footer">
    <div class="footer_line1">
            <span class="bt">
              <a href="javascript:">触屏版</a>
            </span>
      <span>
              <a href="javascript:">手机客户端</a>
            </span>
      <span>
              <a href="javascript:">关于我们</a>
            </span>
      <span>
              <a href="javascript:">联系我们</a>
            </span>
    </div>
    <div class="footer_line2">
      © wap.epet.com 版权：重庆易宠科技有限公司
    </div>
  </div>
</template>

<script>
  export default {
    name: "msite_footer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    margin-top 14px
    .footer_line1
      font-size 14px
      padding 15px 0 5px
      text-align center
      span
        padding-right 10px
        a
          color #333
      .bt
        a
          color red
    .footer_line2
      padding-bottom 25px
      margin 0 10px
      font-size 12px
      text-align center
</style>
