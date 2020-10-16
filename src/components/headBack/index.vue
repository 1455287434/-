<!--  -->
<template>
  <div>
    <div >
      <div class="closeBtn">
        <img src="../../assets/close.png" alt="" @click="closeFunc" />
        <span>{{ leftText }}</span>
      </div>

     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftText: {
      default: "右边",
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
      closeFunc(){
          this.$router.go(-1)
      }
  },
};
</script>
<style lang='scss' scoped>
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
    color: #363636;
    margin-left: 13px;
  }
}
.rightBtn {
  display: inline-block;
  float: right;
}
</style>