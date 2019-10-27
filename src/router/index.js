import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld'
import video from '@/views/video'
import infinityGate from '@/views/infinityGate'
import regist from '@/views/regist'
import myExclusive from '@/views/myExclusive'
Vue.use(Router)


export default new Router({
  routes: [{
    path: '/',
    component: App,
    children:[
        {
          path: '',//
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/video',//
          name: 'video',
          component: video
        },
        {
          path: '/infinityGate',//
          name: 'infinityGate',
          component: infinityGate
        },
        {
          path: '/regist',//
          name: 'regist',
          component: regist
        },
        {
          path: '/myExclusive',//
          name: 'myExclusive',
          component: myExclusive
        },
      ]
    }
  ]
})
