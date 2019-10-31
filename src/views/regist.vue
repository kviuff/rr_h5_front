<template>
  <div class="registWarp">
    <img class="topImg" src="static/img/bg2.jpg" alt />
    <div class="registInfo" style="background-image:url('static/img/bg2_bg1.jpg');">
      <div style="width:1rem;height:0.8333rem;"></div>
      <div class="registItem">
        <p>称谓</p>
        <select class="select" v-model="mtitle" :class="mtitle==''?'grayColor':''">
          <option value disabled selected style="display:none;">请选择您的称谓</option>
          <option value="男">男士</option>
          <option value="女">女士</option>
        </select>
      </div>
      <div class="registItem">
        <p>姓名</p>
        <input type="text" v-model="mname" placeholder="请填写您的姓名" />
      </div>
      <div class="registItem">
        <p>手机号码</p>
        <input type="text" v-model="mmobile" maxlength="11" placeholder="请填写您的手机号码" />
      </div>
      <div class="registItem">
        <p>预约观展日期</p>
        <select class="select" v-model="mdate" :class="mdate==''?'grayColor':''">
          <option value disabled selected style="display:none;">请选择您的预约观展日期</option>
          <option value="2019-11-16 00:00:00">2019年11月16日</option>
          <option value="2019-11-17 00:00:00">2019年11月17日</option>
          <option value="2019-11-18 00:00:00">2019年11月18日</option>
        </select>
      </div>
      <div class="bottomWarp">
        <ul class="ulWarp" style="list-style-type:disc">
          <li>2019 劳斯莱斯BLACK BADGE品牌展参观券可在活 动期间内的任何时段使用，过期无效。</li>
          <li>本券为2019 劳斯莱斯BLACK BADGE品牌展唯一入场凭证，仅限本人使用，不可擅自转让或租借他人。</li>
          <li>
            个人信息仅作为本次活动入场确认使用。
            <br />劳斯莱斯汽车保留在法律范围内对本活动的解释权。
          </li>
        </ul>

        <div class="checkboxWarp">
          <!-- <van-checkbox v-model="checked">
                        <img
                            style="width:0.463rem;height:0.463rem"
                            slot="icon"
                            slot-scope="props"
                            :src="props.checked ? activeIcon : inactiveIcon"
                        >

          </van-checkbox>-->
          <van-checkbox v-model="checked" shape="square" checked-color="#ffa70e">
            <label style="color:#808080;margin-left:0.278rem;">我已阅读并同意以上内容</label>
          </van-checkbox>
        </div>
        <div class="submitWarp">
          <!-- <van-button type="default" class="submmitbt" @click="goMyExclusive">
                        <span>提</span>
                        <span>交</span>
          </van-button>-->
          <img class="submmitbt" @click="goMyExclusive" src="static/img/submit.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveVip } from "@/api/api";
import { Toast } from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "",
      checked: false,
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      mtitle: "",
      mname: "",
      mmobile: "",
      mdate: ""
    };
  },
  created() {
    Toast.clear();
  },
  mounted() {},
  methods: {
    // 去注册
    goMyExclusive() {
      if (!this.mtitle) {
        Toast.fail("请您补充完整信息");
        return;
      }
      if (!this.mname) {
        Toast.fail("请您补充完整信息");
        return;
      }
      if (!/^1\d{10}$/.test(this.mmobile)) {
        Toast.fail("请您补充完整信息");
        return;
      }
      if (!this.mdate) {
        Toast.fail("请您补充完整信息");
        return;
      }
      if (!this.checked) {
        Toast.fail("请您补充完整信息");
        return;
      }
      // this.mtitle = "男"
      // this.mname = "bai4"
      // this.mmobile = "13244169064"
      // this.mdate = "2019-11-16 00:00:00"
      var obj = {
        mtitle: this.mtitle,
        mname: this.mname,
        mmobile: this.mmobile,
        mdate: this.mdate
      };
      saveVip(obj).then(res => {
        if (res.result == "true" && res.data && res.data.id) {
          this.$router.push({
            path: "myExclusive",
            query: { id: res.data.id }
          });
          Toast.success(res.message);
        } else {
          Toast.fail(res.message);
        }
      });
    }
  }
};
</script>
<style scoped>
/* (895/(1080/750))/75 */
.registWarp {
  width: 100%;
  height: 100%;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  /*
    position: absolute;
    bottom: 0;
    left:0;
    background-color:#000000;
    background-color:red; */
}
.registWarp,
.topImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 9.89815rem; */
}
.registWarp .registInfo {
  position: absolute;
  bottom: 1rem;
  left: 0.55rem;
  /* padding-top: 0.8333rem; */
  text-align: center;
  /* font-size: 0.3704rem; */
  background: #000000;
  width: 8.803703703rem;
  margin: auto;
  background-size: 100%;
  background-repeat: no-repeat;
}
.registItem {
  width: 7.46296rem;
  height: 1.2037rem;
  margin: auto;
  margin-top: 0.31481rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 0.00926rem solid #808080;
}
.registItem p {
  width: 7.1388rem;
  text-align: left;
  height: 0.46296rem;
}
.bottomWarp {
  /* background: black;
    width: 98%;
    margin-left: 1%; */
}
input,
select {
  background-color: black;
}
input,
select,
.ulWarp {
  width: 7.1388rem;
  margin: auto;

  /* padding-left: 0.5rem;
  padding-top: 0.5rem; */
  color: white;
}
.van-cell {
  background-color: black;
}
.checkboxWarp {
  width: 7.1388rem;
  margin: auto;
}
/deep/ .van-checkbox__icon {
  height: auto !important;
  box-shadow: 0px 0px 5px red;
}
/deep/ .van-checkbox__icon .van-icon {
  border-color: #ffa70e !important;
}
/deep/ .van-checkbox__label {
  height: 0.34rem;
  line-height: 0.34rem;
}

.grayColor {
  color: #808080;
}

.ulWarp {
  height: 1.94444rem;
  text-align: left;
  margin-top: 0.462962rem;
}
.ulWarp li {
  font-size: 0.277777rem;
  height: 0.69rem;
  line-height: 0.34rem;
  letter-spacing: 0.00925rem;
}
.checkboxWarp {
  margin-top: 0.5555566rem;
}
.submitWarp {
  margin-top: 0.8334rem;
}
.submmitbt {
  width: 3.407rem;
  /* width: 1.7724rem; */
  /* height: 0.5rem;
    line-height: 0.4rem; */
  height: auto;
  border-radius: 0.0926rem;
}
.submmitbt .van-button__text {
  width: 1.148148rem;
  display: inline-flex;
  justify-content: space-between;
}

select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  background: url("../../static/img/downarrow.png") no-repeat scroll right
    center transparent;
  /* border: 10px solid #ccc; */
  padding-left: 0.186667rem;
  background-size: 0.3rem;
}
</style>
