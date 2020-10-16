<!--  -->
<template>
  <div class="header-active">
    <div class="header-title">最近活动</div>
    <!-- list -->
    <div>
      <div
        :class="{ flexActive: true, borBott: index == activeList.length - 1 }"
        v-for="(item, index) in activeList"
        :key="index"
      >
        <div class="flex-img">
          <img :src="item.img" alt="" />
        </div>
        <div class="flex-text">
          <div class="color-size">
            {{ item.title }}
          </div>
          <div></div>
          <div class="size-size">
            <span> {{ item.community }}</span>
            <span class="mg-l-20">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import img from "../../assets/img.png";
export default {
  data() {
    return {
      img: img,
      activeList: [
        {
          img: img,
          title: " 疫情期间为了加强社区管理，加强社区管理，加强社区管理，",
          community: "远洋社区",
          date: "2020/06/04",
        },
        {
          img: img,
          title: " 疫情期间为了加强社区管理，加强社区管理，加强社区管理，",
          community: "远洋社区",
          date: "2020/06/04",
        },
        {
          img: img,
          title: " 疫情期间为了加强社区管理，加强社区管理，加强社区管理，",
          community: "远洋社区",
          date: "2020/06/04",
        },
        {
          img: img,
          title: " 疫情期间为了加强社区管理，加强社区管理，加强社区管理，",
          community: "远洋社区",
          date: "2020/06/04",
        },
        {
          img: img,
          title: " 疫情期间为了加强社区管理，加强社区管理，加强社区管理，",
          community: "远洋社区",
          date: "2020/06/04",
        },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {

  },
};
</script>
<style lang='scss' scoped>
.header-active {
  box-shadow: 0px 5px 16px rgba(235, 235, 243, 0.5);
  border-radius: 8px;
  background-color: #ffffff;
  padding: 0 12px;
  overflow: hidden;
  .header-title {
    margin-top: 20px;
    font-weight: 600;
    color: #333333;
  }
  .flexActive {
    display: flex;
    height: 28vw;
    margin-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #d7dae0;
    &.borBott {
      border-bottom: none;
    }
    .flex-img {
      img {
        width: 28vw;
        height: 22vw;
        border-radius: 8px;
      }
    }
    .flex-text {
      margin-left: 10px;
      // height: 100px;
      height: 22vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .color-size {
        width: 50vw;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: #4a5063;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .size-size {
        font-size: 10px;
        font-weight: 400;
        line-height: 14px;
        color: #9ea5b1;
      }
    }
  }
}
</style>