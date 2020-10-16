<!--  -->
<template>
  <div class="mg-l-17 pd-r-16 mg-20">
    <!-- 头部导航 -->
    <div>
      <headerBack leftText="活动参与"></headerBack>
    </div>
    <!-- title -->
    <div class="title-sty">精彩城市生活,尽在活动行</div>
    <div class="proportion-sty">
      <span>当前剩余</span>
      <span class="surplus">20</span>
      <span>已报名</span>
      <span class="apply">90</span>
    </div>

    <div class="img1 mg-10">
      <img :src="img" alt="" />
    </div>
    <div class="mg-20 content-text">
      活动只限制100报名，活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
    </div>
    <div class="img1 mg-20">
      <img :src="img" alt="" />
    </div>
    <div class="mg-20 content-text">
      活动只限制100报名，活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介
    </div>
    <div class="btn-sty">
      <van-button type="info" class="info-btn" @click="applyFunc"
        >代报名</van-button
      >
      <van-button type="primary" class="primary-btn" @click="successFunc">我要参与</van-button>
    </div>
    <van-popup v-model="show" round>
      <div class="popup-wid">
        <div style="border-radius: 8px">
          <div class="popup-text color-s">请选择代报名人数</div>
          <div
            class="popup-text"
            v-for="item in 3"
            :key="item"
            @click="colorFunc(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </van-popup>
    <div class="mg-b-56"></div>
  </div>
</template>

<script>
import img from "@/assets/img.png";
import headerBack from "@/components/headBack";
export default {
  data() {
    return {
      img: img,
      show: false,
    };
  },

  components: {
    headerBack,
  },

  computed: {},

  methods: {
    applyFunc() {
      this.show = true;
    },
    successFunc(){
        this.$router.push("/applySuccess")
    },
    colorFunc(e) {
      let index = e - 1;
      let divo = document.getElementsByClassName("popup-text");
      let divN = Array.from(divo).splice(1, divo.length);
      for (let i = 0; i < divN.length; i++) {
        if (i == index) {
          divN[i].classList.add("active");

          this.$router.push("/activitiesInvolvedEdit?tag=" + i)
        } else {
          divN[i].classList.remove("active");
        }
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.title-sty {
  margin-top: 18px;
  font-size: 22px;
  font-weight: 600;
  color: #323232;
}
.proportion-sty {
  margin-top: 10px;
  color: #9ea5b1;
  span {
    margin-right: 10px;
  }
  .surplus {
    margin-right: 18px;
    font-size: 14px;
    font-weight: 500;
    color: #fa5252;
    opacity: 1;
  }
  .apply {
    font-size: 14px;
    font-weight: 500;
    color: #82c91e;
    opacity: 1;
  }
}
.img1 {
  width: 100%;
  height: 50vw;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
.content-text {
  font-size: 12px;
  line-height: 30px;
  color: #202020;
  opacity: 1;
}
.btn-sty {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  .info-btn {
    width: 35vw;
    margin-right: 10px;
    border-radius: 8px;
  }
  .primary-btn {
    width: 55vw;
    border-radius: 8px;
  }
}
.popup-wid {
  border-radius: 8px;
  width: 59vw;
  margin: 0px auto;
  padding: 30px 0 10px 0px;
  display: flex;
  justify-content: center;
  .popup-text {
    &.color-s {
      font-weight: 400;
      color: #232641;
      background: #ffffff;
    }
    width: 48vw;
    text-align: center;
    margin-bottom: 20px;
    line-height: 38px;
    height: 38px;
    border-radius: 8px;
    font-size: 14px;
    color: #4a5063;
    opacity: 1;
    background: #f2f3f5;
  }
}
.popup-text.active {
  background: #4c6ef5;
  color: #ffffff;
}
</style>