<template>
  <div id="app" >
<!--    <van-button type="primary">默认按钮</van-button>-->
<!--    <img src="./assets/logo.png">-->
  <!-- <keep-alive>
    <router-view :key="key"/>
  </keep-alive> -->
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
   data () {
    return {
    }
  },
  // computed: {
  //   key() {
  //     return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
  //   }
  // },
  created() {
    window.scroll(0, 0)
//  window.addEventListener('scroll', this.handleScroll);
  },
  destroyed(){
//  	window.removeEventListener('scroll', this.handleScroll);
    },
  methods:{
    	handleScroll(e){
//  		var wrapperScrollTop = this.$refs.wrapper.scrollTop;
//  		console.log(wrapperScrollTop);
			let scrollTop = document.body.scrollTop;
			console.log(scrollTop)
		},
  },
}
</script>

<style>
  @font-face
    {
    font-family: 'Gill Alt One MT';
    src: url('../static/font/GillAltOneMT.woff') format('woff');
    /* src: url('https://www.rolls-roycemotorcars.com.cn/etc/designs/rollsroyce-website/assets/fonts/gill-alt/GillAltOneMT.woff')   format('woff'); */
   /* src:url('https://www.rolls-roycemotorcars.com.cn/etc/designs/rollsroyce-website/assets/fonts/gill-alt/GillSansAlt1-Light.woff'); */
    /* font-weight: normal;
    font-style: normal; */
    }
#app {
	position:relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
  font-family: 'Gill Alt One MT','SimHei','Microsoft YaHei','Hiragino Sans GB',sans-serif;
}
.van-toast{
    width: 2.5rem;
    min-height: 2.5rem;
}
.van-loading__spinner{
    width: 1rem;
    height: 1rem;
}
.van-toast__text {
    margin-top: 0.2rem;
}
</style>
