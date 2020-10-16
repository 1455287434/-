<!--  -->
<template>
  <div class="mg-l-17 pd-r-16">
    <!-- 头部导航 -->
    <div class="mg-20">
      <headerBack leftText="规则说明"></headerBack>
    </div>
    <div>
      <div
        style="
          color: #333333;
          margin: 38px 0px 10px 0px;
          font-size: 18px;
          font-weight: 600;
        "
      >
        社区活动积分规则说明
      </div>
      <div style="color: #9ea5b1; font-size: 10px">
        2020-07-12 <span style="margin-left: 15px"></span> 天花地府社区居委会
      </div>
    </div>

    <div style="margin-top:20px">
      <table>
        <thead>
          <tr>
            <td>活动类型</td>
            <td>积分分值</td>
            <td>积分简述</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>宣传类</td>
            <td>8</td>
            <td>参加一次活动即可获得积分</td>
          </tr>
          <tr>
            <td>服装类</td>
            <td>8</td>
            <td>参加一次活动即可获得积分</td>
          </tr>
          <tr>
            <td>体育类</td>
            <td>4</td>
            <td>参加一次活动即可获得积分</td>
          </tr>
          <tr>
            <td>帮扶类</td>
            <td>9</td>
            <td>参加一次活动即可获得积分</td>
          </tr>
          <tr>
            <td>爱心类</td>
            <td>6</td>
            <td>参加一次活动即可获得积分</td>
          </tr>
        </tbody>
      </table>
    </div>
       <div class="execute">本通知将在2020年7月10日开始实施执行</div>
      <div class="content-provenance">美丽社区综合管理办理办公室</div>
      <div class="content-provenance">2020年6月10日</div>
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

  methods: {},
};
</script>
<style lang='scss' scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  font-weight: 400;
  color: #232641;
  box-shadow: 2px 2px 2px 2px #f9f9fc;
  box-shadow: -2px -2px 2px 2px #f9f9fc;
  border-radius: 10px;
  thead {
    text-indent: 1em;
    background: #ffffff;
    color: #9c9cac;
    tr {
      height: 50px;
    }
  }
  tbody {
    text-indent: 1em;
    background: #ffffff;
    tr {
      height: 50px;
    }
  }
}
table thead tr:first-child td:first-child {
  border-top-left-radius: 8px;
}

// table thead tr:first-child td:last-child {
//   border-top-right-radius: 8px;
// }
table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 8px;
}

table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 8px;
}
table tbody tr:nth-of-type(2n-1) {
  background: #f9f9fc;
}

//   thead {
//     background: rgb(77, 55, 55);
//     tr {
//       height: 50px;

//       td {
//         &::nth-of-type(1) {
//           border-radius: 8px;
//         }
//         // background: red;
//         // border: 1px solid #f3f3f8;

//         text-align: center;
//       }
//     }
//   }
//   tbody {
//     tr {
//       td {
//         text-align: center;
//       }
//     }
//   }
// }
.execute {
  font-size: 10px;
  font-weight: 400;
  color: #9ea5b1;
  margin-top: 20px;
}
.content-provenance {
  text-align: right;
  margin-top: 20px;
  font-size: 10px;
  font-weight: 400;
  line-height: 2px;
  color: #9ea5b1;
}
</style>