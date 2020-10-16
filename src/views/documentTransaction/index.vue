<!--  -->
<template>
  <div class="mg-l-17 pd-r-16">
    <!-- 头部导航 -->
    <div class="mg-20">
      <headerBack leftText="证件办理"></headerBack>
    </div>
    <div class="content-label">
      <router-link
        tag="div"
        class="conten-label-text"
        v-for="(item, index) in lebalArray"
        :key="index"
        :to="item.url"
      >
        <div class="conten-div">
          <div class="label-img-size">
            <svg-icon :iconClass="item.img"></svg-icon>
          </div>
          <div class="lebal-size">{{ item.name }}</div>
        </div>
      </router-link>
    </div>
    <div class="content-sty">
      <div class="content-title">证件办理流程</div>
      <div class="content-bottom">
        证件办理流程如下图，注意，在平台提交的数据，必须真实有效，否则将会影响证件的办理。
      </div>
      <div class="flow">
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div class="file-sty">证件办理</div>
          <div class="direction R"></div>
          <div class="file-sty">选择办理类型</div>
          <div class="direction R">
            <div class="not-t"></div>
          </div>
          <div class="file-sty">上传相关文件</div>
        </div>
        <div style="text-align: right">
          <div style="display: inline-block">
            <div style="text-align: center">
              <div class="direction B"></div>
            </div>

            <div class="file-sty cor-y">审核</div>
            <div style="text-align: center">
              <div class="direction B">
                <div class="is-T">是</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style="
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div class="file-sty clo-h">存底留档</div>
            <div class="direction L"></div>
            <div class="file-sty">现场打印</div>
            <div class="direction L"></div>
            <div class="file-sty ">开具电子证明</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-sty mg-20">
      <div class="content-title">保密性说明</div>
      <div class="content-bottom">
        提交上传文件，代表您已经同意办理相关证件所需材料的提供，平台将留底备案证明材料。同时您也将授权平台主办单位，在必要时将配合政府执法部门进行相关数据的核查。
        提交上传文件，代表您已经同意办理相关证件所需材料的提供，平台将留底备案证明材料。同时您也将授权平台主办单位，在必要时将配合政府执法部门进行相关数据的核查。
      </div>
    </div>
    <div class="mg-b-56"></div>
  </div>
</template>

<script>
import headerBack from "@/components/headBack";
export default {
  data() {
    return {
      lebalArray: [
        {
          name: "常用证明",
          img: "chang",
          url: "/documentTransactionEdit/99",
        },
        {
          name: "取药证明",
          img: "qu",
          url: "/documentTransactionEdit/99",
        },
        {
          name: "老年证件",
          img: "lao",
          url: "/documentTransactionEdit/99",
        },
        {
          name: "死亡证明",
          img: "si",
          url: "/documentTransactionEdit/99",
        },
        {
          name: "证件",
          img: "zheng",
          url: "/documentTransactionEdit/99",
        },
      ],
    };
  },

  components: {
    headerBack,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.content-label {
  padding-top: 9vw;
  padding-bottom: 1vw;
  background-color: #ffffff;
  border-radius: 8px;
  // border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.conten-label-text {
  width: 17vw;
  height: 18vw;
  margin-bottom: 10px;
}
.conten-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.lebal-size {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #9ea5b1;
  opacity: 1;
}
.label-img-size {
  width: 7vw;
  height: 7.5vw;
  margin-bottom: 3vw;
}
.content-sty {
  padding: 12px;
  background: #ffffff;
  box-shadow: -1px 5px 16px rgba(235, 235, 243, 0.5);
  opacity: 1;
  border-radius: 8px;
  .content-title {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    opacity: 1;
    margin-bottom: 22px;
  }
  .content-bottom {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 28px;
    color: #4a5063;
    opacity: 1;
  }
  .flow {
    margin-top: 29px;
    .file-sty {
      width: 80px;
      height: 46px;
      display: inline-block;
      background: #4c6ef5;
      text-align: center;
      line-height: 46px;
      font-size: 12px;

      font-weight: 400;

      color: #ffffff;

      opacity: 1;
      &.cor-y {
        background: #ffb822;
      }
      &.clo-h {
        background: #c2c7d1;
      }
    }
    .direction {
      width: 12px;
      height: 12px;
      background-size: 100% 100%;
      display: inline-block;

      &.R {
        position: relative;
        background-image: url("../../assets/left.png");
      }
      &.B {
        margin: 10px 0px;
        position: relative;
        background-image: url("../../assets/bottom.png");
      }
      &.L {
        background-image: url("../../assets/right.png");
      }
    }
  }
}
.not-t {
  position: absolute;
  top: 20px;
  left: 5px;
  width: 15px;
  height: 69px;
  border: 1px dashed #e5e5e5;
  border-top-color: transparent;
  border-right-color: transparent;
  &::before {
    position: absolute;
    left: -30px;
    top: 50%;
    margin-top: -10px;
    content: "否";
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: #d56848;
    opacity: 1;
  }
}
.is-T {
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  color: #d56848;
  opacity: 1;
  left: -20px;
}
</style>