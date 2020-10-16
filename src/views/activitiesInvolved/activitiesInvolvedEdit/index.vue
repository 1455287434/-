<!--  -->
<template>
  <div>
    <!-- 头部导航 -->
    <div class="mg-l-17 pd-r-16 mg-20">
      <headerBack leftText="活动参与"></headerBack>
    </div>
    <!-- 表单 -->
    <div class="mg-l-10 mg-20">
      <van-form @submit="onSubmit" :required="true">
        <div v-for="(item, index) in fromDate" :key="index">
          <div class="participation">参与人{{ item.index }}</div>

          <van-field
            class="from-sty"
            v-model="item.community"
            name="小区"
            label="小区"
            required
            clickable
            readonly
            @click="selectClick(index)"
            placeholder="请选择小区"
            :rules="[{ required: true, message: '请选择小区' }]"
          >
          </van-field>

          <van-popup v-model="showPicker1" position="right">
            <div
              style="
                width: 60vw;
                height: 100vh;
                padding: 27px;
                overflow: auto;
                box-sizing: border-box;
              "
            >
              <div class="select-title">选择小区</div>
              <div
                class="select-sty"
                v-for="(item, index) in columns"
                :key="index"
                @click="selectFunc1(item.name, item.value)"
              >
                {{ item.name }}
              </div>
            </div>
          </van-popup>
          <van-field
            required
            v-model="item.name"
            class="from-sty"
            name="姓名"
            label="姓名"
            maxlength="20"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
          <van-field
            required
            v-model="item.phone"
            class="from-sty"
            name="手机号"
            label="手机号"
            maxlength="11"
            placeholder="请输入手机号"
            :rules="[
              {
                required: true,
                validator: phoneVerifyF,
                message: '请输入手机号',
              },
              {
                required: true,
                validator: phoneVerify,
                message: '请输入正确的手机号',
              },
            ]"
          />
          <div></div>
        </div>
        <div>
          <van-field label-align="right" name="checkbox">
            <template #input>
              <div class="check-b" style="margin-top: 20px">
                <van-checkbox v-model="checkbox" shape="square"
                  >本人是否参与</van-checkbox
                >
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

    <div class="mg-b-56"></div>
  </div>
</template>

<script>
import headerBack from "@/components/headBack";
export default {
  data() {
    return {
      showPicker1: false,
      columns: [
        {
          name: "北辰",
          value: 1,
        },
        {
          name: "南开",
          value: 2,
        },
        {
          name: "西青",
          value: 3,
        },
        {
          name: "滨海",
          value: 4,
        },
        {
          name: "河西",
          value: 5,
        },
        {
          name: "河东",
          value: 6,
        },
      ],
      username: "",
      password: "",
      phone: "",
      checkbox: "",
      fromDate: [
        {
          community: "",
          name: "",
          phone: "",
          index: "一",
        },
        {
          community: "",
          name: "",
          phone: "",
          index: "二",
        },
        {
          community: "",
          name: "",
          phone: "",
          index: "三",
        },
      ],
      fromDateIndex:"",
    };
  },

  components: {
    headerBack,
  },

  created() {
    this.initFunc();
  },

  methods: {
    initFunc() {
      let index = +this.$route.query.tag + 1;
      this.fromDate = this.fromDate.slice(0, index);
    },
    selectClick(index) {
      this.showPicker1 = true;
      this.fromDateIndex = index
    },
    selectFunc1(key, value) {
      this.fromDate[this.fromDateIndex].community = key;

      this.showPicker1 = false;
    },
    phoneVerify(val) {
      return /^\d{11}$/.test(val);
      //   return false;
    },
    phoneVerifyF(val) {
      return val != "";
    },
    onSubmit(values) {
      console.log("submit", values);
      console.log(this.fromDate);
      this.$router.push("/applySuccess");
    },
  },
};
</script>
<style lang="scss" scoped>
.participation {
  font-size: 16px;
  font-weight: 500;
  color: #4c6ef5;
  opacity: 1;
  margin-bottom: 29px;
  margin-top: 20px;
  margin-left: 13px;
}
.check-b {
  margin-top: 20px;
  color: red;
}
.select-title {
  margin: 20px 0px;
  font-size: 14px;
  color: #a3a9b7;
}
.select-sty {
  font-size: 14px;
  color: #333333;
  opacity: 1;
  padding: 20px 0 10px 0px;
  border-bottom: 1px solid #ececec;
}
</style>
