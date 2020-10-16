<!--  -->
<template>
  <div class="mg-l-17 pd-r-16 mg-20">
    <!-- 头部导航 -->
    <div>
      <headerBack leftText="活动参与"></headerBack>
    </div>
    <div class="mg-50 img-suc">
      <img class="img-sty" src="../../../assets/applySuccess.png" alt="" />
      <div class="apply-suc">报名成功</div>
    </div>
  </div>
</template>

<script>
import headerBack from "@/components/headBack";
export default {
  data() {
    return {
      timer: null,
    };
  },

  components: {
    headerBack,
  },
  created() {
    this.initFunc();
  },
  computed: {},
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    initFunc() {
      this.timer = setTimeout(() => {
        this.$router.push("/");
      }, 3000);
    },
  },
};
</script>
<style lang='scss' scoped>
.img-suc {
  text-align: center;
  img {
    width: 25vw;
    height: 18vw;
  }
  .apply-suc {
    margin-top: 51px;
    font-size: 14px;
    font-weight: 400;
    color: #4a5063;
    opacity: 1;
  }
}
</style>