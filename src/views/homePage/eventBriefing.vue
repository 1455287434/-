<!--  -->
<template>
  <div class="brie-height">
    <div class="brie-img">活动简报</div>
    <div class="brie-hizo"></div>
    <div class="brie-conten">
      <div class="text-size">疫情期间为了加强社区管理，居委</div>

      <div class="font-si">汽车行业解决方案</div>
    </div>
    <div>
      <div class="left-size">
        <svg-icon iconClass="left"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.brie-height {
  box-sizing: border-box;
  padding: 13px 10px;
  background: #ffffff;
  height: 20vw;
  border-radius: 8px;
  display: flex;
  align-items: center;
  //   border: 1px solid black;
  box-shadow: 0px 5px 16px rgba(235, 235, 243, 0.5);
   .left-size {
      width: 3vw;
      height: 3vw;
    //   background: red;
    //   color:red;
    }
  .brie-img {
    width: 42px;
    text-align: center;
    background-image: url("../../assets/snowflake.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 6px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: bold;
    // line-height: 18px;
    color: #4c6ef5;
    opacity: 1;
    margin-right: 3vw;
  }
  .brie-hizo {
    margin-right: 3vw;
    width: 0px;
    height: 39px;
    border: 1px solid #d7dae0;
    opacity: 0.4;
  }
  .brie-conten {
    // width: 180px;
    // border:1px solid black;
    width: 60vw;
    height: 100%;
    // margin-right: 8vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .text-size {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #4a5063;
      opacity: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2vw;
    }
    .font-si {
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 14px;
      color: #9ea5b1;
      opacity: 1;
    }
   
  }
}
</style>