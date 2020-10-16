<!--  -->
<template>
  <div class="mg-b-56">
    <!-- 头部导航 -->
    <div class="mg-l-17 pd-r-16 mg-20">
      <headerBack leftText="通知详情"></headerBack>
    </div>
    <!-- content -->
    <div class="mg-38 mg-l-28 mg-r-15">
      <div class="content">
        国务院办公厅关于印发生态环境领域中央与地方财政事权和支出责任
        划分改革方案的通知
      </div>

      <div class="titleTime">
        2020-07-12 <span style="margin-left: 30px"></span>天花地府社区居委会
      </div>
    </div>
    <!-- contentText -->
    <div class="contentText">
      <div class="contentText1">
        关于抗击新型肺炎疫情，您有哪些感受和建议？希望政府部门进一步做好哪些工作？哪些问题不足亟待解决？欢迎积极参与，您的意见和建议对我们非常重要。关于抗击新型肺炎疫情，您有哪些感受和建议？希望政府部门进一步做好哪些工作？哪些问题不足亟待解决？欢迎积极参与，您的意见和建议对我们非常重要。
        关于抗击新型肺炎疫情，您有哪些感受和建议希望政府部门进一步做好哪些工作？哪些问题不足亟待解决？欢迎积极参与，您的意见和建议对我们非常重要。
        关于抗击新型肺炎疫情，您有哪些感受和建议希望政府部门进一步做好哪些工作？哪些问题不足亟待解决？欢迎积极参与，您的意见和建议对我们非常重要。
      </div>
      <div class="execute">本通知将在2020年7月10日开始实施执行</div>
      <div class="content-provenance">美丽社区综合管理办理办公室</div>
      <div class="content-provenance">2020年6月10日</div>
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

  methods: {},
};
</script>
<style lang='scss' scoped>
.content {
  //   border: 1px solid black;

  font-size: 18px;
  font-weight: 600;
  color: #333333;
  opacity: 1;
}
.titleTime {
  white-space: pre;
  font-size: 10px;
  font-weight: 400;
  color: #9ea5b1;
  margin-top: 10px;
}
.contentText {
  margin-left: 29px;
  margin-right: 17px;
  margin-top: 20px;
}
.contentText1 {
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: #4a5063;
}
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
