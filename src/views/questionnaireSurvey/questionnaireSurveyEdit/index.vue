import img from '@/assets/img.png';
<!--  -->
<template>
  <div style="position: relative">
    <div class="bg">
      <div class="mg-l-17 pd-r-16 mg-20 col">
        <div>
          <div class="closeBtn">
            <img src="../../../assets/closebg.png" alt="" @click="closeFunc" />
            <span>问卷调查</span>
          </div>

        </div>

        <div class="header-img">
          <div class="text-img pa-1"></div>
          <div class="text-img pa-2"></div>
          <div class="text-img pa-3"></div>
          <div class="text-img pa-4"></div>
          <div class="open"></div>
          <div class="book-t"></div>
          <div class="book-b"></div>
          <div class="book-r"></div>
          <div class="people"></div>
        </div>
      </div>
    </div>

    <div class="mg-l-17 pd-r-16 b-color pr-sketch">
      <div class="sketch-sty">
        <div class="sketch-sty1">问卷简述</div>
        <div class="sketch-sty2">
          关于抗击新型肺炎疫情，您有哪些感受和建议？希望政府部门进一步做好哪些工作？哪些问题不足亟待解决？欢迎积极参与，您的意见和建议对我们非常重要。
        </div>
      </div>
      <!-- 图片 -->
      <div class="img-show">
        <img src="../../../assets/img.png" alt="" />
      </div>
      <!-- 选择题 -->
      <div class="select-sty" v-for="item in 2" :key="item">
        <div class="select-title">
          {{ item }}. 关于抗击新型肺炎疫情，您的关注程度如何？
        </div>
        <div>
          <van-radio-group v-model="radio">
            <van-radio class="radio-sty" name="1"
              >非常关注

              <template #icon="props">
                <div v-if="props.checked" class="radio-btn"></div>
              </template>
            </van-radio>
            <van-radio class="radio-sty" name="2"
              >不太关注
              <template #icon="props">
                <div v-if="props.checked" class="radio-btn"></div>
              </template>
            </van-radio>
            <van-radio class="radio-sty" name="3"
              >不太关注
              <template #icon="props">
                <div v-if="props.checked" class="radio-btn"></div>
              </template>
            </van-radio>
            <van-radio class="radio-sty" name="4"
              >不太关注
              <template #icon="props">
                <div v-if="props.checked" class="radio-btn"></div>
              </template>
            </van-radio>
          </van-radio-group>
        </div>
      </div>

      <!-- 确认提交 -->
      <div style="margin-top: 20px">
        <van-button
          block
          type="primary"
          style="border-radius: 8px"
          @click="successFunc"
          >确认提交</van-button
        >
      </div>
      <div class="mg-b-56"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
    };
  },

  components: {},

  methods: {
    closeFunc() {
      this.$router.go(-1);
    },
    successFunc() {
      console.log(this.radio);
      this.$router.push("/questionnaireSurveySuccess")
    },
  },
};
</script>
<style lang='scss' scoped>
.col {
}
.bg {
  height: 50vw;
  width: 100%;
  display: inline-block;
  //   overflow: hidden;
  background: url("../../../assets/background.png");
}
.closeBtn {
  display: inline-block;
  img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
  span {
    // border: 1px solid black;
    vertical-align: middle;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-left: 13px;
  }
}
.rightBtn {
  display: inline-block;
  float: right;
}
.header-img {
  position: relative;
  .book-t {
    position: absolute;
    top: 8vw;
    left: 15.1vw;
    background-image: url("../../../assets/bookT.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 3.8vw;
    height: 4vw;
  }
  .book-b {
    position: absolute;
    top: 21.24vw;
    left: 23vw;
    background-image: url("../../../assets/bookB.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 3.2vw;
    height: 3.2vw;
  }
  .book-r {
    position: absolute;
    top: 18.8vw;
    left: 37.2vw;
    background-image: url("../../../assets/bookR.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 2.5vw;
    height: 2.7vw;
  }
  .open {
    position: absolute;
    top: 3vw;
    left: 42.5vw;
    width: 5.9vw;
    height: 5.2vw;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("../../../assets/open.png");
  }
  .people {
    position: absolute;
    z-index: 99;
    top: 2px;
    left: 47vw;
    width: 37.5vw;
    height:37.5vw;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("../../../assets/people.png");
  }
  .text-img {
    width: 12vw;
    height: 12vw;
    &.pa-1 {
      background-image: url("../../../assets/wen.png");
      box-sizing: border-box;
      padding: 15px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 12.5vw;
      left: 10.5vw;
    }
    &.pa-2 {
      background-image: url("../../../assets/juan.png");
      box-sizing: border-box;
      padding: 15px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 7.5vw;
      left: 17vw;
    }
    &.pa-3 {
      background-image: url("../../../assets/diao.png");
      box-sizing: border-box;
      padding: 15px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 11.5vw;
      left: 23.5vw;
    }
    &.pa-4 {
      background-image: url("../../../assets/cha.png");
      box-sizing: border-box;
      padding: 15px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 7.28vw;
      left: 32vw;
    }
  }
}
.pr-sketch {
  border-radius: 8px;
  position: absolute;
  top: 41vw;
  .sketch-sty {
    height: 38vw;
    padding: 20px 16px 20px 20px;
    box-shadow: 0px 5px 20px rgba(235, 235, 243, 0.5);
    opacity: 1;
    border-radius: 8px;
    box-sizing: border-box;
    .sketch-sty1 {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: #4a5063;
      opacity: 1;
    }
    .sketch-sty2 {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      color: #4a5063;
      opacity: 1;
    }
  }
}
.img-show {
  margin-top: 20px;
  border-radius: 8px;
  width: 100%;
  height: 45.5vw;

  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
}
.select-sty {
  margin-top: 20px;
  width: 100%;
  height: 58vw;
  padding: 20px 0 20px 20px;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(235, 235, 243, 0.5);
  opacity: 1;
  border-radius: 8px;
  .select-title {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #323232;
    opacity: 1;
  }
  .radio-sty {
    // background: red;
    margin-top: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #363636;
    opacity: 1;
    .radio-btn {
      width: 14px;
      height: 14px;
      box-sizing: border-box;
      border-radius: 50%;
      background: url("../../../assets/radio.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>