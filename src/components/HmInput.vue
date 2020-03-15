<template>
  <div class="username">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="inputFn"
      :class="{success:status=='success',error:status=='error'}"
    >
    <div class="tips" v-show="status=='error'">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: String,
    rule: RegExp,
    message: String
  },
  data() {
    return {
      status: ""
    };
  },
  methods: {
    inputFn(e) {
      // console.log(e.target.value);

      let value = e.target.value;
      this.$emit("input", e.target.value);
      //表单校验
      this.validata(value);
    },
    validata(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          //表单记录状态
          this.status = "success";
          return true;
        } else {
          this.status = "error";
          return false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.username {
  margin: 20px;
  input {
    height: 35px;
    width: 100%;
    line-height: 35px;
    outline: 0;
    border: none;
    border-bottom: 1px solid #ccc;
    &.success {
      border-bottom: 1px solid lime;
    }
    &.error {
      border-bottom: 1px solid red;
    }
  }
  .tips {
    color: red;
  }
}
</style>


