<template>
  <div>
    <h6 class="child_style">曾以为子组件是下一层路由的组件~~~~~</h6>
    <h1>data中的值：{{val}}</h1>
    <h1>newTitle --- {{newTitle}}</h1>
    <button @click="handleChangeVal">改变值之后切换路由再瞧瞧</button>
    <button @click="sendDataToP">将值传给父亲</button>
    <br>
    <router-link to="/home/detail">点击</router-link>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
      title: String
  },
  data() {
      return{
          val: 8,
          newTitle: this.title
      }
  },
  methods: {
      handleChangeVal() {
          this.val = 888;
      },
      sendDataToP() {
          this.$emit('get-data','love')
      }
  }
};
</script>

<style scoped>
.child_style {
  color: red;
}
</style>