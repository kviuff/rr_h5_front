<template>
  <div class="videoWarp">
    <!-- loading视频 -->
    <div class="loadingVideo" v-show="loading">
      <video
        id="firstervideo"
        controls
        muted
        preload="none"
        mediagroup="myVideoGroup"
        poster="http://media.w3.org/2010/05/sintel/poster.png"
      >
        <source id="mp4" src="https://rrmc.kviuff.com/images/video/loading.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- <div class="mask"></div> -->
    <!-- 视频播放完 -->
    <div class="endVideo" v-if="endVideo">
      <div class="bt" @click="goInfinityGate">进入无线力量</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

//一般情况下，这样就可以自动播放了，但是一些奇葩iPhone机不可以
//  document.getElementById('car_audio').play();
//必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
// document.addEventListener("WeixinJSBridgeReady", function () {
//     document.getElementById('car_audio').play();
//     document.getElementById('video').play();
// }, false);

export default {
  name: "video",
  data() {
    return {
      loading: true, //预加载视频
      endVideo: false,
      isAndroid: false
    };
  },
  created() {
    let that = this;
    Toast.clear();
  },

  mounted() {
    document.addEventListener(
      "WeixinJSBridgeReady",
      function() {
        document.getElementById("firstervideo").play();
      },
      false
    );
  },

  methods: {
    // 进入无线之门
    goInfinityGate() {
      this.$router.push({
        path: "infinityGate"
      });
    },
    pauseVideo() {
      this.loading = false;
      var videoEl = document.getElementById("firstervideo");
      videoEl.addEventListener(
        "canplaythrough",
        function() {
          alert("视频加载完成，即将播放视频"); //  //ios手机不生效
          if (videoEl.paused) {
            videoEl.play().catch(res => {
              alert("视频播放出错,请切换个浏览器播放");
            });
          } else {
            // videoEl.play();
          }
        },
        false
      );
    }
  }
};
</script>
<style scoped>
.videoWarp {
  position: relative;
  width: 100%;
  height: 100%;
}
.loadingVideo {
  width: 100%;
}
.loadingVideo img {
  width: 100%;
}

.video {
  width: 100%;
}
.video video {
  width: 100%;
}

.endVideo {
  position: absolute;
  z-index: 20;
  bottom: 25%;
  text-align: center;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
}
.bt {
  width: 40%;
  height: 1rem;
  line-height: 1rem;
}

.mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  /* background:black; */
  z-index: 10;
}
</style>
