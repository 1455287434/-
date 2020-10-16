<!--  -->
<template>
  <div class="b-color">
    <!-- 头部导航 -->
    <div class="mg-l-17 pd-r-16 mg-20">
      <headerBack leftText="投票选举"></headerBack>
    </div>
    <!-- 搜索 -->
    <div class="mg-18 mg-l-26 mg-r-16">
      <div class="search-s-con">
        <div class="search-s">
          <input
            class="searchSty"
            type="text"
            @keydown="searchFunc($event)"
            placeholder="请输入搜索的内容"
          />
        </div>
        <div class="filter-s">
          <img src="../../assets/filter.png" alt="" />
        </div>
      </div>
    </div>

    <!-- caedList -->
    <div class="mg-l-26 mg-r-16">
      <cardList></cardList>
    </div>

    <!-- flooter -->
    <div class="bottom-line">我已经是底线了</div>
  </div>
</template>

<script>
import headerBack from "@/components/headBack";
import cardList from "./cardList";

export default {
  data() {
    return {
      value: "",
    };
  },

  components: {
    headerBack,
    cardList,
  },

  computed: {},

  methods: {
    searchFunc(e) {
      if (e.keyCode == 13) {
        this.$toast("搜索去吧");
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.search-s-con {
  display: flex;
  justify-content: space-between;
  .search-s {
    height: 46px;
    flex: 1;
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url("../../assets/search.png");
      background-size: 100% 100%;
      position: absolute;
      top: 12px;
      left: 15px;
    }
    .searchSty {
      width: 100%;
      height: 100%;
      border: 1px solid #ffffff;
      border-radius: 8px;
      padding-left: 43px;
      background: #ffffff;
      box-shadow: 0px 8px 20px rgba(10, 14, 25, 0.06);
      box-sizing: border-box;
      color: #333333;
      &::-webkit-input-placeholder {
        color: #c2c7d1;
      }
      &::-moz-placeholder {
        //不知道为何火狐的placeholder的颜色是粉红色，怎么改都不行，希望有大牛路过帮忙指点
        color: #c2c7d1;
      }
      &:-ms-input-placeholder {
        //由于我的IE刚好是IE9，支持不了placeholder，所以也测试不了(⊙﹏⊙)，有IE10以上的娃可以帮我试试
        color: #c2c7d1;
      }
    }
  }
  .filter-s {
    height: 46px;
    width: 46px;
    box-shadow: 0px 8px 20px rgba(10, 14, 25, 0.06);
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    margin-left: 13px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>