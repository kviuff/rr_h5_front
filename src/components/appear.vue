<template>
  <div class="appear">
      <div @appear="onAppear" @disappear="onDisappear"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {},
    // activated() {
    //   console.log('我这个页面显示就会执行');
    // },
    // deactivated: function () {
    //   console.log('我这个页面退出的会执行');
    // },
    mounted() {
    },
    methods:{
        onAppear() { 
            // console.log('onAppear') 
            this.$emit("appear");
        },
        onDisappear() { 
            // console.log('onDisappear')
            this.$emit("disappear");
        }
    },
    created(){
        extend(EventTarget.prototype, 'addEventListener', function(eventName) {
            let node = this;
            let ioContext = node.__IO__;

            if (eventName === 'appear' || eventName === 'disappear') {
                // 一个节点需要一个 io 即可
                if (node.__IO__) {
                ioContext.listenerNum++;
                return;
                }

                let io = new IntersectionObserver(entries => {
                const ioContext = node.__IO__;
                const { visible: lastVisible } = ioContext;
                const entry = entries[entries.length - 1];
                const ratio = entry.intersectionRatio;
                const visible = entry.isIntersecting && ratio >= 0;

                if (lastVisible === undefined) {
                    ioContext.visible = visible;
                } else if (visible !== lastVisible) {
                    ioContext.visible = visible;

                    node.dispatchEvent(
                    new CustomEvent(visible ? 'appear' : 'disappear', {
                        bubbles: false // appear/disappear是节点相关的事件不能冒泡
                    })
                    );
                }
                });

                node.__IO__ = {
                instance: io,
                listenerNum: 1
                };
                io.observe(node);
            }
            });

            extend(EventTarget.prototype, 'removeEventListener', function(eventName) {
            let node = this;
            let ioContext = node.__IO__;

            if (eventName === 'appear' || eventName === 'disappear') {
                // 当事件为没有监听器的时候就可以把 io 注销, 释放内存
                if (--ioContext.listenerNum === 0) {
                ioContext.instance.disconnect();
                ioContext.instance = null;
                node.__IO__ = null;
                }
            }
            });

            function extend(obj, fnName, cb) {
            const oldFn = obj[fnName];
            obj[fnName] = function wrap() {
                let ret;
                oldFn && (ret = oldFn.apply(this, arguments));
                cb && cb.apply(this, arguments);
                return ret;
            };
            }
    }
  }
</script>
<style lang="scss">

</style>