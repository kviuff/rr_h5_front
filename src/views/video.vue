<template>
  <div class="videoWarp">
    <!-- <video width="320" height="240" controls autoplay>
        <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
    </video> -->
    <!-- loading视频 -->
    <div class="loadingVideo" v-show="loading"   >
        <video> <!--autoplay="autoplay" loop="loop" -->
            <source src="static/video/loading.mp4" type="video/mp4" />
           您的浏览器不支持 video 标签。
        </video>
    </div>
    <!-- 真正播放的视频 -->
     <div class="video" v-show="!loading">
        <video src="static/video/video.mp4" controls="controls">
           您的浏览器不支持 video 标签。
        </video>
     </div>

    <!-- 视频播放完 -->
    <div class="endVideo">
       <span @click="goInfinityGate">进入无线力量</span>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: "HelloWorld",
    data() {
        return {
        loading:true,//预加载视频
        }
    },
    created(){
         Toast.clear();
        setTimeout(()=>{
            this.loading = false
        },200)
    },
    mounted() {
    },
    methods:{
        // 进入无线之门
        goInfinityGate(){
            this.$router.push({
                path:"infinityGate"
            })
        },
    },
};
</script>
<style scoped>
.videoWarp{
    position: relative;
}
.loadingVideo{
    width:100%;
}
 .loadingVideo video{
    width: 100%;
}

.video{
     width:100%;
}
.video video{
    width: 100%;
}

.endVideo{
    position: absolute;
    z-index: 2;
    bottom:25%;
    text-align:center;
    width: 100%;
}
</style>
