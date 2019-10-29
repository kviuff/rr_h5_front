<template>
  <div class="infinityGate">
        <img class="topImg" src="static/img/bg1.jpg" alt="">
         <div class="wordWarp">
               <div class=" topWord1">
                    <p>黑暗觉醒 无限远征 </p>
                    <p>2019 劳斯莱斯BLACK BADGE品牌展 </p>
                    <p>你准备好了么</p>
                </div>

                <div class=" topWord2">
                <p>深圳华侨城OCT当代艺术中心（恩平街F2栋)</p>
                <p>11月16日-11月18日</p>
                <p>10:00-17:00</p>
                </div>

                <div class="topWord3">
                    <img @click="goRegist" src="static/img/goImmediate.png" alt="">
                </div>
         </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "HelloWorld",
  data() {
    return {
    }
  },
    created(){
      Toast.clear();
    },
    mounted() {
    },
    methods:{
        // 进入无线之门
        goRegist(){
            this.$router.push({
                path:"regist"
            })
        },
    },
};
</script>
<style scoped>
/* (895/(1080/750))/75 */
.infinityGate{
    width: 100%;
    height: 100%;;
    background-color:#000000; 
    color: #ffffff;
     position: relative;
    overflow: hidden;
}
.infinityGate,.topImg{
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
 /* height: 9.89815rem; */
}
.infinityGate .wordWarp{
    position: absolute;
    bottom:2rem;
    width: 100%;
    text-align: center;
    font-size: 0.3704rem;
    /* height: 2.466rem; */
    /* line-height:  2.466rem;  */
}
.infinityGate .topWord1{
    height: 2.466rem;
    line-height: 0.822rem;
}
.infinityGate .topWord2{
    height: 1.667rem;
    line-height: 0.822rem;
     margin-top: 1.55rem;
}
.infinityGate .topWord3{
   margin-top:2.62rem;
}
.infinityGate .topWord3 img{
    width:2.4630rem;
    height: 0.5463rem;
}

</style>
