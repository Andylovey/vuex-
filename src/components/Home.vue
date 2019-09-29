<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{student}}</h1>
    <button @click="handleClickMutation">Mutation</button>

    <button @click="handleClickAction">Action</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("HomeModules", {
      count: state => state.count,
      student: state => state.student
    })
  },

  methods: {
    ...mapMutations("HomeModules", {
      changeStudent: "changeStudent"
    }),
    ...mapActions('HomeModules',{
      asyncChangeCount: 'asyncChangeCount'
    }),

    handleClickMutation() {
      this.changeStudent({
        value: 1
      });
    },

    handleClickAction() {
      // Promise接收第一种
      // this.asyncChangeCount().then((res) => {
      //   console.log(res)   // 执行结束
      // })

      // Promise接收第二种
      Promise.all([this.asyncChangeCount()]).then((res) => {
        console.log(res)   // ["执行结束"]
      })
    }
  }
};
</script>