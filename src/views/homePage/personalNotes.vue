<!--  -->
<template>
  <div class="proper-content">
    <div class="content-wid" v-for="(item, index) in arrayList" :key="index">
      <div class="img-icon">
        <svg-icon :iconClass="item.img"></svg-icon>
      </div>
      <div class="conten-text">
        <div>
          <div class="top-sty">
            {{ item.name }}
            <div class="red-top" v-if="index==2">6</div>
          </div>

          <div class="botm-sty">{{ item.number }}</div>
        </div>
      </div>
      <div class="xian" v-if="index != 2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["arrayList"],
  model: {
    prop: "arrayList",
    event: "sunccessFun",
  },
  data() {
    return {
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

  components: {},
  created() {

  },
  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.xian {
  width: 0px;
  height: 20px;
  border: 1px solid #a3a3a3;
  opacity: 0.21;
  margin-left: 15px;
}
.proper-content {
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 5px 16px rgba(235, 235, 243, 0.5);
  box-sizing: border-box;
  height: 13vh;
  display: flex;
}
.content-wid {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-icon {
    width: 7vw;
    height: 7vw;
    margin-left: 0.5vw;
    margin-right: 3vw;
  }
  .conten-text {
    display: flex;
    align-items: center;
    .botm-sty {
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      color: #c2c7d1;
      opacity: 1;
    }
    .top-sty {
      position: relative;
      font-size: 12px;
      margin-bottom: 4px;
      .red-top {
        position: absolute;
        font-size: 8px;
        top: -7px;
        left: 26px;
        color: #ffffff;
        border-radius: 50%;
        background: #fb3a2f;
        width: 16px;
        height: 16px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}
</style>