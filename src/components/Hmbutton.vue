<template>
  <div class="button" @click="login">
    <slot></slot>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="less" scoped>
.button {
  margin: 20px;
  background-color: red;
  text-align: center;
  border-radius: 999px;
  height: 46px;
  line-height: 46px;
  color: white;
}
</style>

