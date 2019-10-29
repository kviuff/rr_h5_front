<template>
  <div class="myExclusive">
         <!-- <img class="bgimg topImg" id="bgimg" src="static/img/bg3.jpg" alt=""> -->
          <!--<div class="wordWarp">
            <div class=" topWord1">
                <p>您已经接受劳斯莱斯 BLACK BADGE</p>
                <p>黑暗觉醒 无限远征的召集，</p>
                <p>请您携带好入场凭证， </p>
                    <p>与我们一同感受BLACK BAD</p>
            </div>
            <div class="canvasWarp">
                <img  src="static/img/canvasWarp.png" alt="">
            </div>
        </div>  -->
         <!-- <img  src="static/img/canvasWarp.png" alt=""> -->
        <canvas id="myCanvas" width="750" height="1334"></canvas>
        <div id="qrCode" ref="qrCodeDiv"></div>
        <img id="endimg" v-if="endimg" class="saveEndimg"  :src="endimg"   alt="">

  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import {saveImage} from "@/api/api"
import { Toast } from 'vant';
export default {
    name: "HelloWorld",
    data() {
        return {
            endimg:"",
        }
    },
    created(){
       Toast.clear();
    },
    mounted() {
        
         if(this.$route.query.id){
             this.drawCanvas();
         }else{
            this.$router.replace({
                path:"regist",
            })
        }
    },
    methods:{
         // 生成二维码
        makeQrcode() {
            // var url = "http://xxxxx.com/f/member/api/code/777777777"
            new QRCode(this.$refs.qrCodeDiv, {
                text: this.$route.query.id,
                width: 200,
                height: 200,
                colorDark: "#333333", //二维码颜色
                colorLight: "#ffffff", //二维码背景色
                correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
            })
        },
        // canvas画图
        drawCanvas(){
            let that = this;
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            // 画背景图
            // let bgImg=document.getElementById("bgimg");
            let bgImg = new Image ()
            bgImg.crossOrigin = 'Anonymous'
            bgImg.src = "static/img/bg3.jpg"
            bgImg.onload = ()=>{
                ctx.drawImage(bgImg,0,0,1080,1920,0,0,750,1334)
                  // 写字
                // ctx.font="30px  'Gill Alt One MT'";
                ctx.font="30px Gill Alt One MT";
                ctx.fillStyle="white";
                ctx.fillText("您已经接受劳斯莱斯 BLACK BADGE",137.5,913.27);
                ctx.fillText("黑暗觉醒 无限远征的召集，",195.8333,951.394);
                ctx.fillText("请您携带好入场凭证， ",229.16667,993.05556);
                ctx.fillText("与我们一同感受BLACK BADGE的神秘力量",93.75,1037.5);
            
                // 二维码外边框
                let qrcodeOut = new Image ()
                qrcodeOut.crossOrigin = 'Anonymous'
                qrcodeOut.src =  "static/img/canvasWarp.png";
                qrcodeOut.onload = ()=>{
                    ctx.drawImage(qrcodeOut,0,0,234,234,300.72,1126.5,164,164)
                   // 画二维码
                    this.$nextTick ( () => {
                        this.makeQrcode();
                        setTimeout(()=>{
                            let qrcode = new Image ()
                            qrcode.crossOrigin = 'Anonymous'
                            var qrcodesrc  = document.querySelector('#qrCode>img').src;
                            qrcode.src = qrcodesrc;
                            qrcode.onload = ()=>{
                                ctx.drawImage(qrcode,0,0,200,200,309.72,1137.5,138.89,138.89)
                                // ctx.drawImage(img,0,0,100,100,100,100);
                                var strDataURI=c.toDataURL("image/png");    
                                // console.log();
                                that.uploadImg(strDataURI);
                                // that.uploadImg(qrcodesrc);
                                
                            }
                        },10)
                    })

                }
            }
        },
        // base64上传图片
        uploadImg(base64){
            var obj = {
                pictureBase64:base64,
                memberId:this.$route.query.id
            }
            // 自定义加载图标
            Toast.loading({
                duration: 0, // 持续展示 toast
                message: '生成专属图中...',
                forbidClick: true,
                loadingType: 'spinner'
            });
            saveImage(obj).then((res)=>{
                Toast.clear();
                if(res.result=="true"){
                    this.endimg = res.data.imagePath
                    // Toast.success(res.message);
                }else{
                    TToast.success(res.message);
                }
            })
        },
        
    },
   
};
</script>
<style scoped>
#qrCode{
    display: none;
}
/* (895/(1080/750))/75 */
.myExclusive{
    width: 100%;
    height: 100%;;
    /* background-color:#000000;  */
    color: #ffffff;
    overflow: hidden;
}
.myExclusive .bgimg{
    /* position: absolute;
    top: 0;
    left: 0;
    width:100%; */
 /* height: 9.89815rem; */
   /* opacity: 0; */
   display: none;
}
.myExclusive .wordWarp{
    position: relative;
    top:12.056rem;
    text-align: center;
    font-size: 0.3704rem;
}
.myExclusive .topWord1{
    height: 2.037rem;
    line-height: 0.50925rem;
}
.myExclusive .canvasWarp{
    position: relative;
    top: 0.20833rem;
    width: 100%;
    text-align: center;
}
.myExclusive .canvasWarp img{
    width:2.5rem;
    height:2.5rem;
}

#myCanvas{
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
}
.saveEndimg{
    z-index:1000;
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    opacity: 0;
}
</style>
