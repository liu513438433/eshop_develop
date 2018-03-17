<template>
  <div id="my_pet">

    <div class="login-herder">
      <div class="top">
       <div class="login-back" @click="back"><i class="iconfont icon-jiantou2"></i></div>
       <div class="login-register">
         <a href="javascript:" class="login-register-link">注册</a>
       </div>
     </div>
      <div class="bg">
        <img src="./d6aa601c1a4b5789b776f18261a960f6.png" class="bg-img">
      </div>

      <div class="tabs">
        <div class="tab-username" @click="changeLoginWay(true)">普通登录</div>
        <div class="tab-phone" @click="changeLoginWay(false)">手机动态密码登录</div>
      </div>





    </div>

    <div class="content">
      <!--密码登录-->
      <div class="login-by-name" v-show="loginWay">
        <div class="name">
          <i class="iconfont icon-yonghu"></i>
          <input type="text" placeholder="手机号/用户名/密码" class="input-name">
        </div>
        <div class="pwd">
          <i class="iconfont icon-suo"></i>
          <input type="password" placeholder="输入密码" class="input-pwd">
        </div>
      </div>
      <!--手机号登录-->
      <div class="login-by-phone" v-show="!loginWay">
        <div class="number">
          <i class="iconfont icon-yonghu"></i>
          <input type="text" placeholder="已注册的手机号" class="input-phone">
        </div>
        <div class="code">
          <i class="iconfont icon-suo"></i>
          <input type="password" placeholder="输入图片内容" class="input-code">
        </div>
        <div class="phone-code">
          <i class="iconfont icon-suo"></i>
          <input type="password" placeholder="动态密码" class="input-phonecode">
          <span class="get-pwd">获取动态密码</span>
        </div>
      </div>

    </div>



    <div class="login-btn">
      <p class="forget-password"><a href="javascript:" class="link">忘记密码？</a></p>
      <mt-button class="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        loginWay:true
      }
    },

    methods:{
      changeLoginWay(way){
        this.loginWay = way
      },

      // 回退
      back(){
        this.$router.back()
      }
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  #my_pet
    background-color #fff
    padding-bottom 30px
    .login-herder
      position relative
      .top
        position absolute
        width 100%
        box-sizing border-box
        padding 10px
        display flex
        justify-content space-between
        align-items center
        .icon-jiantou2
          font-size 30px
          color white
        .login-register
          .login-register-link
            font-size 16px
            color white
      .bg
        width 100%
        .bg-img
          width 100%
          height 174px
          display block



      .tabs
        position absolute
        bottom 0
        /*display flex*/
        width 100%
        background-color rgba(255,255,255,0.3)
        /*justify-content space-around*/
        /*padding 14px 0*/
        text-align center
        .tab-username
          float left
          width 50%
          font-size 15px
          color white
          line-height 44px
          text-align center
        .tab-phone
          float left
          width 50%
          color white
          font-size 15px
          line-height 44px
          text-align center




    .content
      box-sizing border-box
      padding 0 6px
      margin 0 15px
      .login-by-name
        width 100%
        // 用户名
        .name
          width 350px
          height 30px
          padding 8px 0
          border-bottom #e2e2e2 solid 1px
          display flex
          align-items center
          .input-name
            display block
            height 21px
            font-size 15px
            outline none
            flex-grow 1
            padding-left 10px
            &::placeholder
              color #e2e2e2
          .icon-yonghu
            font-size 20px
            color gray
        // 密码
        .pwd
          width 350px
          height 30px
          padding 8px 0
          border-bottom #e2e2e2 solid 1px
          display flex
          align-items center
          .input-pwd
            display block
            height 21px
            font-size 15px
            outline none
            flex-grow 1
            padding-left 10px
            &::placeholder
              color #e2e2e2
          .icon-suo
            font-size 20px
            color gray




      .login-by-phone
        width 100%
        // 手机号
        .number
          width 350px
          height 30px
          padding 5px 0
          bottom-border-1px(#e2e2e2)
          .input-phone
            width 300 px
            height 30px
            font-size 14px
            color #666
            outline none
          .icon-phone
            font-size 20px
            color #666
        // 随机图片验证码
        .code
          width 350px
          height 30px
          padding 5px 0
          bottom-border-1px(#e2e2e2)
          .input-code
            width 300 px
            height 30px
            font-size 14px
            color #666
            outline none
        // 手机验证码
        .phone-code
          position relative
          width 350px
          height 30px
          padding 5px 0
          bottom-border-1px(#e2e2e2)
          .input-phonecode
            width 300 px
            height 30px
            font-size 14px
            color #666
            outline none
          .get-pwd
            position absolute
            top 7px
            right 0
            width 90px
            height 25px
            line-height 25px
            font-size 14px
            border-radius 3px
            text-align center
            border(#ff4259)
            color #ff4259








  // 登录按钮
  .login-btn
    width 100%
    box-sizing border-box
    padding 0 15px
    display flex
    flex-wrap wrap
    justify-content flex-end
    .forget-password
      font-size 14px
      color #898989
      line-height 40px
      .link
        display block
        width 100%
        height 100%
    .login
      background-color #2ec975
      width 100%
      height 38px
      color white
      font-size 15px




</style>
