<template>
  <div>
    <h1>{{test}}</h1>
    <h1>{{student}}</h1>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState('HomeModules',{
      test: state => state.test,
      student: state => state.student
    })
  },

  methods: {
    ...mapMutations('HomeModules',{
      changeTest: 'changeTest',
      changeStudent: 'changeStudent'
    }),

    handleClick() {
      this.changeStudent({
        value: 1
      })
    }
  }
};
</script>