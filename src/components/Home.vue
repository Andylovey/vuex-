<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{student}}</h1>
    <button @click="handleClickMutation">Mutation</button>
    <button @click="handleClickAction">Action</button>
    <hr />

    <Child title="测试标题" @get-data="showData" />
    <hr />

    <!-- <play-video src="https://www.w3school.com.cn/i/movie.ogg"/> -->

    <div>
      <textarea cols="30" rows="10" @input="handleInput" v-model="inputVal"></textarea>
      <div>{{inputNum}}/200</div>
    </div>
  </div>
</template>

<script>
import Child from "./Child";
// 引入视频组件
import PlayVideo from "./Video/index";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      inputVal: "",
      inputNum: 0
    };
  },
  components: {
    Child,
    PlayVideo
  },
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
    ...mapActions("HomeModules", {
      asyncChangeCount: "asyncChangeCount"
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
      Promise.all([this.asyncChangeCount()]).then(res => {
        console.log(res); // ["执行结束"]
      });
    },

    showData(v) {
      alert(`儿子传来的值${v}`);
    },

    handleInput(e) {
      if(e.target.value.length > 200) {
        return;
      }
      this.inputNum = e.target.value.length;
    }
  },
  watch: {
    inputVal() {
      if (this.inputVal.length > 200) {
        this.inputVal = this.inputVal.slice(0, 200);
      }
    }
  }
};
</script>