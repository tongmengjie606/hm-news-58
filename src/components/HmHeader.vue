<template>
   <div class="hm-header">
   <span class="iconfont iconjiantou2" @click="$router.go(-1)"></span>
   <div class="login">我的<slot></slot></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
 .hm-header{
   height: 50px;
   line-height: 50px;
   display: flex;
   border: 1px solid #ccc;
   padding: 0 10px;
   .login{
     text-align: center;
     flex: 1;
     font-size: 16px;
     font-weight: 700;
   }
   div{
     width: 26px;
   }

}
</style>

