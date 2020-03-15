<template>
  <div>
    <hm-header>登录</hm-header>
    <div class="mian">
      <span class="back iconfont iconnew"></span>
    </div>
    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="密码格式不对"
      ref="password"
    ></hm-input>
    <hm-button @click="click">登录</hm-button>
    <div class="go-register">
      没有账号去
      <router-link to="/register">注册</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    this.username = this.$route.params.username;
    this.password = this.$route.params.password;
  },
  methods: {
    click() {
      const count1 = this.$refs.username.validata(this.username);
      const count2 = this.$refs.password.validata(this.password);
      if (!count1 || !count2) {
        return;
      }
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data.statusCode == 200) {
          this.$toast.success("登录成功");
          this.$router.push("/user");
        } else {
          this.$toast.success(res.data.message);
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
.go-register {
  text-align: right;
  font-size: 16px;
  margin-right: 20px;
  a {
    color: rgb(0, 89, 255);
  }
}
</style>