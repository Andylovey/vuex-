<template>
  <div :style="videoStyle" class="play-video">
    <video
      ref="video"
      :src="SUrl"
      :width="w"
      :height="h"
      @timeupdate="handleTimeUpDate"
      class="video"
    >您的浏览器不支持视频播放功能</video>
    <img v-if="pause" src="@/assets/play.png" class="play-icon" @click="hanlePlayIcon" />
    <img v-else src="@/assets/stop.png" class="play-icon" @click="hanlePauseIcon" />

    <div class="control">
        <span class="duration">{{parseInt(duration)}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayVideo",
  props: {
    src: String,
    width: Number,
    height: Number
  },
  data() {
    return {
      SUrl: this.src,
      w: this.width || 400,
      h: this.height || 320,
      videoStyle: {
        width: (this.width || 400) + "px",
        height: (this.height || 320) + "px"
      },
      pause: true, // 默认暂停
      duration: 0
    };
  },
  methods: {
    hanlePlayIcon() {
      let video = this.$refs.video;
      video.play();
      this.pause = false;
    },
    hanlePauseIcon() {
      let video = this.$refs.video;
      video.pause();
      this.pause = true;
    },
    handleTimeUpDate() {
      let video = this.$refs.video;
      this.duration = video.currentTime;
    }
  },
  mounted() {
    let video = this.$refs.video;
  }
};
</script>

<style scoped>
.play-video {
  position: relative;
}
.play-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -20px;
  margin-top: -20px;
}
.control {
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  bottom: 0;
}
.duration {
    color: #fff;
}
</style>