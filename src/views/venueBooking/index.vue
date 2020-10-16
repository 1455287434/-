<!--  -->
<template>
  <div class="mg-l-17 pd-r-16">
    <!-- 头部导航 -->
    <div class="mg-20">
      <headerBack leftText="场地预约"></headerBack>
    </div>

    <div class="mg-20">
      <van-form @submit="onSubmit" :required="true" label-width="7em">
        <van-field
          required
          v-model="fromDate.hostNumber"
          class="from-sty"
          name="场地名称"
          label="场地名称"
          maxlength="20"
          placeholder="请输入场地名称"
          :rules="[
            { required: true, message: '请输入场地名称' },
          ]"
        />
        <van-field
          class="from-sty"
          v-model="fromDate.houseNumber"
          name="使用日期"
          label="使用日期"
          required
          placeholder="请输入使用日期"
          :rules="[{ required: true, message: '请输入使用日期' }]"
        >
        </van-field>
        <van-field
          required
          v-model="fromDate.extensive"
          class="from-sty"
          name="申请用途"
          label="申请用途"
          maxlength="20"
          placeholder="请输入申请用途"
          :rules="[{ required: true, message: '请输入申请用途' }]"
        />

      <van-field
          required
          v-model="fromDate.name"
          class="from-sty"
          name="申请集体/个人"
          label="申请集体/个人"
          maxlength="20"
          placeholder="请输入申请集体/个人"
          :rules="[{ required: true, message: '请输入申请集体/个人' }]"
        />


        <div>
          <van-field label-align="right" name="checkbox">
            <template #input>
              <div class="check-audit">
                <van-checkbox v-model="checkbox" shape="square">
                    疫情期间，请按照防疫中心要求，严格按照要求进行组织活动。
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
        extensive:""
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