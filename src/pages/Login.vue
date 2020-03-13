<template>
  <div>
    <hm-header>登录</hm-header>
    <div class="mian">
      <span class="back iconfont iconnew"></span>
    </div>
    <div>
      <input type="text" placeholder="请输入用户名">
      <input type="password" placeholder="请输入密码">
    </div>
    <hm-button>登录</hm-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang='less' scoped>
 .mian{
   text-align: center;
   .back{
   font-size: 126px;
   color: red;
   }
 }
</style>