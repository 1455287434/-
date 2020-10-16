<!--  -->
<template>
  <div>
    <span>登21112录1</span>
  </div>
</template>

<script>

import {sun} from "@/api/index.js"
import { getUrlParams } from "@/instrument";
export default {
  data() {
    return {};
  },
  created() {
    // this.getCode();
    this.jiahui()
  },
  components: {},

  computed: {},

  methods: {
      jiahui(){
          sun().then(res=>{
              console.log(res,"res")
          })
      },
    getCode() {
      // 非静默授权，第一次有弹框
      const code = getUrlParams("code"); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      console.log(code);
      if (code == null || code === "") {
        location.href ="https://open.weixin.qq.com/connect/qrconnect?appid=wx925aee5e54851977&redirect_uri="+ encodeURIComponent("http://192.168.23.17:9999/ceshi")+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
      
      } else {
        this.getOpenId(code); //把code传给后台获取用户信息
      }
    },
    getOpenId(code) {
      //   通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
      //   let _this = this;
      console.log(code, 1231);
      //   this.$http
      //     .post("/api/user/wechat/login", { code: code })
      //     .then((res) => {
      //       let datas = res.data;
      //       if (datas.code === 0) {
      //         console.log("成功");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    },
  },
};
</script>
<style lang='scss' scoped>
</style>