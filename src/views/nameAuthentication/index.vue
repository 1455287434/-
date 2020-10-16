<!--  -->
<template>
  <div class="mg-l-17 pd-r-16 mg-20">
    <!-- 头部导航 -->
    <div>
      <headerBack leftText="实名认证"></headerBack>
    </div>
    <div class="title">认证数据仅居委会实名调查的统计认证使用。</div>

    <div class="mg-20">
      <van-form @submit="onSubmit" :required="true">
        <van-field
          class="from-sty"
          right-icon="arrow"
          clickable
          readonly
          :value="fromDate.authentication"
          name="认证类型"
          label="认证类型"
          @click="showPicker = true"
          required
          placeholder="请选择认证类型"
          :rules="[{ required: true, message: '请选择认证类型' }]"
        >
        </van-field>

        <van-popup v-model="showPicker" position="right">
          <div
            style="
              width: 60vw;
              height: 100vh;
              padding: 27px;
              overflow: auto;
              box-sizing: border-box;
            "
          >
            <div class="select-title">请选择认证类型</div>
            <div
              class="select-sty"
              v-for="(item, index) in columns"
              :key="index"
              @click="selectFunc(item.name, item.value)"
            >
              {{ item.name }}
            </div>
          </div>
        </van-popup>

        <van-field
          class="from-sty"
          v-model="fromDate.community"
          name="小区"
          label="小区"
          required
          clickable
          readonly
          @click="showPicker1 = true"
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
          class="from-sty"
          v-model="fromDate.houseNumber"
          name="门牌号"
          label="门牌号"
          required
          placeholder="请输入门牌号"
          :rules="[{ required: true, message: '请输入门牌号' }]"
        >
        </van-field>
        <van-field
          required
          v-model="fromDate.name"
          class="from-sty"
          name="姓名"
          label="姓名"
          maxlength="20"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请输入姓名' }]"
        />

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
          required
          v-model="fromDate.phone"
          class="from-sty"
          name="手机号"
          label="手机号"
          maxlength="11"
          placeholder="请输入手机号"
          :rules="[
            {
              required: true,
              message: '请输入手机号',
            },
            {
              required: true,
              validator: phoneVerify,
              message: '请输入正确的手机号',
            },
          ]"
        />

        <van-field class="from-sty" name="人脸照片" label="人脸照片">
          <template #input>
            <div class="up">
              <van-uploader v-model="fileList" :after-read="afterRead">
                <template #default>
                  <div class="updataImg">
                    <img src="../../assets/add.png" alt="" />
                  </div>
                </template>
              </van-uploader>
            </div>
          </template>
        </van-field>
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
      value: "",
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
      showPicker: false,
      showPicker1: false,
      fromDate: {
        name: "",
        community: "",
        phone: "",
        authentication: "",
        houseNumber: "",
        hostNumberr: "",
        headImg: "",
      },
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
    };
  },

  components: {
    headerBack,
  },

  computed: {},

  methods: {
    selectFunc(key, value) {
      this.fromDate.authentication = key;
      this.showPicker = false;
    },
    selectFunc1(key, value) {
      this.fromDate.community = key;
      this.showPicker1 = false;
    },
    accountCard(val) {
      let flag = idNoFormatCheck(val);

      return flag;
    },
    phoneVerify(val) {
      return /^\d{11}$/.test(val);
      //   return false;
    },

    onSubmit(values) {
      if (this.$route.query.tag == "questionnaireSurvey") {
        this.$router.push("/questionnaireSurveyEdit/99");
      } else {
        this.$router.push("/activitiesInvolvedDetail/88");
      }
    },

    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};
</script>
<style lang='scss' scoped>
.title {
  margin-top: 28px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #a3a9b7;
  opacity: 1;
}
.updataImg {
  width: 20.4vw;
  height: 20.4vw;
  // box-shadow: 1px 1px 1px 1px #ececec;
  img {
    width: 20.4vw;
    height: 20.4vw;
    border-radius: 8px;
  }
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