<template>
  <div class="videoWarp">
    <!-- <video width="320" height="240" controls autoplay>
        <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
    </video> -->
    
    <!-- <audio id="audio" loop src="http://morefun.image.alimmdn.com/leiming/o_1djor5b2kt9m1p3i12ro6lj86i1n.mp3" autoplay  preload></audio> -->
    <!-- loading视频 -->
    <div class="loadingVideo" v-show="loading" @click="paly"   >
        <!-- <video  autoplay="autoplay" >
            <source src="static/video/loading.mp4" type="video/mp4" />
           您的浏览器不支持 video 标签。
        </video> -->
        <img src="static/img/loading.gif" alt="">
    </div>

    <!-- 真正播放的视频 controls="controls" loop="loop"-->
     <div class="video" v-show="!loading" v-if="!endVideo">

        <video  id="videoAndroid"  v-if="isAndroid"  preload="true">
           <source  src="static/video/video.mov" type="video/mov">
           <source id="mp4_src"  src="static/video/video.mp4" type="video/mp4">
             您的浏览器不支持 video 标签。
        </video>

        <video  id="videoIos" v-if="!isAndroid"  style="width:100%" controls="controls"   autoplay="autoplay">
            <source  src="static/video/video.mov" type="video/mov">
            <source  src="static/video/video.mp4" type="video/mp4">
                您的浏览器不支持 video 标签。
        </video>
     </div>


    <!-- <div class="mask"></div> -->
    <!-- 视频播放完 -->
    <div class="endVideo"  v-if="endVideo">
       <div  class="bt" @click="goInfinityGate">进入无线力量</div>
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
            endVideo:false,
            isAndroid:false,
        }
    },
    created(){
        let that = this;
         Toast.clear();
        // setTimeout(()=>{
        //     this.loading = false
        // },2000)
       
        if (navigator.userAgent.match(/(android|Android);?/i)) {  // 安卓手机
            this.isAndroid = true;
           this.playVideoAndroid();
        }else if(navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){ // 安卓手机
            //  alert("苹果手机");
             setTimeout(()=>{
                this.isAndroid = false;
                this.playVideoIos();
             },300)
        }

    },
    mounted() {
        
        // let that = this
    //   document.getElementById("audio").play();
        
    },
    methods:{
        // 进入无线之门
        goInfinityGate(){
            this.$router.push({
                path:"infinityGate"
            })
        },
        // preloadFn(){
        //     let that = this
        //     alert("视频加载完成，即将播放视频");
        //     that.playVideo();
        // },
         // android手机设置
        playVideoAndroid(){
            let that = this
            this.$nextTick(()=>{
                 this.loading = false
                 var videoEl = document.getElementById('videoAndroid');
                videoEl.addEventListener("canplaythrough",function(){
                    // alert("视频加载完成，即将播放视频"); //  //ios手机不生效
                    if(videoEl.paused){
                        videoEl.play().catch((res)=>{
                            alert("视频播放出错,请切换个浏览器播放")
                        });
                    }else{
                        // videoEl.play();
                    }
                },false);

              
                videoEl.addEventListener('ended', function(e){
                    that.endVideo = true;
                });
            })
          
        },
        // ios设置
        playVideoIos(){
            let that = this
            this.loading = false
            this.$nextTick(()=>{
                var videoEl = document.getElementById('videoIos')
               
                videoEl.addEventListener('ended', function(e){
                    that.endVideo = true;
                });
               
                // .catch((res)=>{
                //     alert("视频播放出错,请切换个浏览器播放")
                // });
                this.paly();
             })
        },
        paly(){
             this.loading = false
             var videoEl = document.getElementById('videoIos')
                // videoEl.play()
               setTimeout(()=>{
                    $(function(){
                        $("#videoIos")[0].play().catch((res)=>{
                            alert("由于苹果系统限制，请点击下方自动播放")
                        });; 
                    })
               },3000)
        },

    },
};
</script>
<style scoped>
.videoWarp{
    position: relative;
    width:100%;
    height: 100%;
}
.loadingVideo{
    width:100%;
}
 .loadingVideo img{
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
    z-index: 20;
    bottom:25%;
    text-align:center;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
}
.bt{
    width: 40%;
    height: 1rem;
    line-height: 1rem;
}

.mask{
    position: absolute;
    left: 0;
    top:0;
    height: 100%;
    width: 100%;
    /* background:black; */
    z-index: 10;
}
</style>
