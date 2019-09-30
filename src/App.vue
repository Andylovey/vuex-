<template>
  <div id="app">
    <!-- <keep-alive :include="View">
      <router-view />
    </keep-alive>-->
    <!-- <transition name="slide-fade" mode="out-in">
      <router-view v-if="show" />
    </transition>-->
    <!-- 组件缓存以及路由动画 -->
    <transition name="slide-fade" mode="out-in">
      <keep-alive :include="View">
        <router-view v-if="show" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Home组件被缓存之后呢切换路由回来的时候数据被缓存下来了呢
      View: ["Home"],

      show: true
    };
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      alert("你切换了路由");
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
