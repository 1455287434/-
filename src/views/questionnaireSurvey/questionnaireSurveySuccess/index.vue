<!--  -->
<template>
  <div class="mg-l-17 pd-r-16 mg-20">
    <!-- 头部导航 -->
    <div >
      <headerBack leftText="问卷调查"></headerBack>
    </div>

    <div class="img-str">
      <img src="../../../assets/succBtn.png" alt="" />
    </div>


      <div class="bottom-sty">
        <van-button
          block
          type="primary"
          style="border-radius: 8px"
          @click="successFunc"
          >返回主页</van-button
        >
      </div>
  </div>
</template>

<script>
import headerBack from "@/components/headBack";
export default {
  data() {
    return {};
  },

  components: {
    headerBack,
  },

  computed: {},

  methods: {
      successFunc(){
          this.$router.push("/questionnaireSurvey")
      }
  },
};
</script>
<style lang='scss' scoped>
.img-str {
  // margin-top: 43px;
  width: 100%;
  img {
    display: block;
    width: 33.5vw;
    margin: 43px auto;
    height: 32vw;
  }
}
.bottom-sty{
    width: 90%;
    position: fixed;
    bottom: 45px;
}
</style>