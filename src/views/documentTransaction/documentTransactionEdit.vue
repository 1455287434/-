<!--  -->
<template>
  <div class="mg-l-17 pd-r-16">
    <!-- 头部导航 -->
    <div class="mg-20">
      <headerBack leftText="常用证件办理"></headerBack>
    </div>

    <div class="mg-20">
      <van-form @submit="onSubmit" :required="true">
        <van-field
          required
          v-model="fromDate.hostNumber"
          class="from-sty"
          name="身份证号"
          label="身份证号"
          maxlength="20"
          placeholder="请输入身份证号"
          :rules="[
            { required: true, message: '请输入身份证号' },

            {
              required: true,
              validator: accountCard,
              message: '请输入正确的身份证号',
            },
          ]"
        />
        <van-field
          class="from-sty"
          v-model="fromDate.houseNumber"
          name="房屋不动产证"
          label="房屋不动产证"
          required
          placeholder="请输入门牌号"
          :rules="[{ required: true, message: '房屋不动产证' }]"
        >
        </van-field>
        <van-field
          required
          v-model="fromDate.name"
          class="from-sty"
          name="房屋租赁合同"
          label="房屋租赁合同"
          maxlength="20"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '房屋租赁合同' }]"
        />

        <van-field
          v-model="fromDate.phone"
          class="from-sty"
          name="等等证明材料"
          label="等等证明材料"
          maxlength="11"
          placeholder="请输入证明材料"
        />

        <div>
          <van-field label-align="right" name="checkbox">
            <template #input>
              <div class="check-audit">
                <van-checkbox v-model="checkbox" shape="square">
                      您确定你上传的材料真实有效，存在欺诈隐瞒情况，一切责任自负，平台将有权上报到相关执法部门。
                </van-checkbox>
              </div>
            </template>
          </van-field>
        </div>
        <div style="margin: 16px">
          <van-button
            style="border-radius: 8px"
            block
            type="primary"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { idNoFormatCheck } from "@/staticFunc/index.js";
import headerBack from "@/components/headBack";
export default {
  data() {
    return {
      checkbox: "",
      fromDate: {
        name: "",
        community: "",
        phone: "",
        authentication: "",
        houseNumber: "",
        hostNumberr: "",
        headImg: "",
      },
    };
  },

  components: {
    headerBack,
  },

  computed: {},

  methods: {
    accountCard(val) {
      let flag = idNoFormatCheck(val);

      return flag;
    },
    phoneVerify(val) {
      return /^\d{11}$/.test(val);
      //   return false;
    },
    onSubmit(values) {
      console.log(121212);
      this.$router.push("/successTransaction")
      //   if (this.$route.query.tag == "questionnaireSurvey") {
      //     this.$router.push("/questionnaireSurveyEdit/99");
      //   } else {
      //     this.$router.push("/activitiesInvolvedDetail/88");
      //   }
    },
  },
};
</script>
<style lang='scss' scoped>

</style>