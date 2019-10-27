// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import store from '@/store'
import http from '@/utils/request'
import 'vant/lib/index.css'
import '@/assets/styles/reset.css'
import moment from 'moment'   //时间转换
import 'lib-flexible/flexible'
//图片放大功能
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options = {
	fullscreenEl: false
};
Vue.use(preview, options)
Vue.use(Vant)
// 过滤器
import vueFilter from '@/utils/filter'
for (let key in vueFilter){
  Vue.filter(key,vueFilter[key])
}

Vue.config.productionTip = false

// console.log(http,'-----------------')

// 挂载全局
Vue.prototype.$moment = moment;
Vue.prototype.$imgDomain = window.SITE_CONFIG['imgURL'] ;
Vue.prototype.$http = http
// Vue.prototype.$hasPermission = hasPermission
// 保存整站vuex本地储存初始状态
// window.SITE_CONFIG['storeState'] = cloneDeep(store.state)
//
Array.prototype.indexOf = function(val) {   //数组的下标
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function(val) {   //删除指定值的一项
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
