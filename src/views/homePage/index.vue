<!--  -->
<template>
  <div class="pd-16 b-color">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">智慧社区</div>
      <div class="header-right">
        <svg-icon icon-class="information"></svg-icon>
      </div>
    </div>

    <!-- content部 -->
    <div class="content-top">
      <!-- 轮播图 -->
      <div>
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="size-img" v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 个人详情菜单 -->
      <div class="mg-20">
        <personalNotes v-model="arr"></personalNotes>
      </div>
      <!-- 功能菜单 -->
      <div class="mg-20">
        <menuLabel></menuLabel>
      </div>

      <!-- 活动简报 -->
      <div class="mg-20">
        <eventBriefing></eventBriefing>
      </div>
    <!-- 最近活动 -->
      <div class="mg-20">
          <recentActivities></recentActivities>
      </div>
    </div>
    <div class="bottom-line">
    我已经是底线了
    </div>
  </div>
  
</template>

<script>
import personalNotes from "./personalNotes";
import img from "@/assets/img.png";
import menuLabel from "./menuLabel";
import eventBriefing from "./eventBriefing";

import recentActivities from "./recentActivities"
export default {
  data() {
    return {
      images: [
        img,
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601197896549&di=7f43bec4f30197f9df3e9e8f8dc6fa03&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg",
      ],
      arr: [
        {
          name: "孙嘉辉",
          number: "2332032",
          img: "proper",
        },
        {
          name: "范启迪",
          number: "2332032",
          img: "pig",
        },
        {
          name: "消息",
          number: "2332032",
          img: "smallbell",
        },
      ],
    };
  },

  components: {
    personalNotes,
    menuLabel,
    eventBriefing,
    recentActivities
  },

  computed: {},

  methods: {
    onClickLeft() {
      this.$toast("返回");
      //   Toast("返回");
    },
    onClickRight() {
      this.$toast("按住孙嘉辉");
    },
  },
};
</script>
<style lang='scss' scoped>

.header-left {
  vertical-align: top;
  width: 110px;
  height: 25px;
  color: #333333;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
}
.header-right {
  display: inline-block;
  width: 18px;
  height: 17px;
  float: right;
}

.content-top {
  margin-top: 18px;
  .my-swipe {
    border-radius: 4px;
    height: 166px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    .size-img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}

</style>