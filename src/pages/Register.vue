<template>
  <div>
    <hm-header>注册</hm-header>
    <div class="mian">
      <span class="back iconfont iconnew"></span>
    </div>
    <hm-input
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="text"
      placeholder="昵称"
      v-model="nickname"
      :rule="/^[\u4e00-\u9fa5]{2,4}$/"
      message="昵称2-4位的中文"
      ref="nickname"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码格式不对"
      ref="password"
    ></hm-input>
    <hm-button @click="click">注册</hm-button>
    <div class="go-login">
      已有账号去
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    click() {
      //表单校验
      const count1 = this.$refs.username.validata(this.username);
      const count2 = this.$refs.nickname.validata(this.nickname);
      const count3 = this.$refs.password.validata(this.password);
      if (!count1 || !count2 || !count3) {
        return;
      }
      this.$axios({
        method: "post",
        url: "/register",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        if (res.data.statusCode) {
          this.$toast.success(res.data.message);
          this.$router.push({
            name: "login",
            params: { username: this.username, password: this.password }
          });
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
.mian {
  text-align: center;
  .back {
    font-size: 126px;
    color: red;
  }
}
.go-login {
  text-align: right;
  font-size: 16px;
  margin-right: 20px;
  a {
    color: rgb(0, 89, 255);
  }
}
</style>