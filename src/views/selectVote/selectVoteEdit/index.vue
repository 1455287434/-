<!--  -->
<template>
  <div class="mg-l-17 pd-r-16 b-color">
    <!-- 头部导航 -->
    <div class="mg-20">
      <headerBack leftText="投票选举"></headerBack>
    </div>
    <div class="title">关于疫情防疫防控模范的选举</div>
    <div class="content-sty">
      <div class="content-title">选票说明</div>
      <div class="content-detail">
        <div class="left-sty">活动时间</div>
        <div class="right-sty">2020-05-16 00:00:00</div>
      </div>
      <div class="content-detail">
        <div class="left-sty">活动结束</div>
        <div class="right-sty">2020-05-22 23:59:59</div>
      </div>
      <div class="content-detail">
        <div class="left-sty">活动规则</div>
        <div class="right-sty">
          每个微信号只能投一票，四个奖项可以 分别投票。
        </div>
      </div>
      <div class="content-detail">
        <div class="left-sty">联系电话</div>
        <div class="right-sty">13607910000 刘经理</div>
      </div>
      <div class="content-bottom">
        本次活动是为选举物业管理进行发起的一次民众选举，为记名选举，只限本小区的所有业主。还请广大业主们积极参与，共建我们和谐家园。最终解释权归本次大赛组委会。
      </div>
    </div>

    <div class="content-sty mg-20">
      <div class="content-title">参与投票</div>
      <div>
        <van-checkbox-group v-model="result">
          <van-checkbox name="a" shape="square">
            <template #default>
              <div>
                <div class="flexActive">
                  <div class="flex-img">
                    <img :src="img" alt="" />
                  </div>
                  <div class="flex-text">
                    <div class="color-size">疫情期间为了加强社区管理居…</div>
                    <div></div>
                    <div class="size-size">
                      <span> 远洋社区</span>
                      <span class="mg-l-20">2020/06/04</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </van-checkbox>
          <van-checkbox name="b" shape="square">
            <template #default>
              <div>
                <div class="flexActive">
                  <div class="flex-img">
                    <img :src="img" alt="" />
                  </div>
                  <div class="flex-text">
                    <div class="color-size">疫情期间为了加强社区管理居…</div>
                    <div></div>
                    <div class="size-size">
                      <span> 远洋社区</span>
                      <span class="mg-l-20">2020/06/04</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </van-checkbox>
          <van-checkbox name="c" shape="square">
            <template #default>
              <div>
                <div class="flexActive">
                  <div class="flex-img">
                    <img :src="img" alt="" />
                  </div>
                  <div class="flex-text">
                    <div class="color-size">疫情期间为了加强社区管理居…</div>
                    <div></div>
                    <div class="size-size">
                      <span> 远洋社区</span>
                      <span class="mg-l-20">2020/06/04</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="btn-sty">
        <van-button type="info" class="info-btn" @click="applyFunc">
          <template #default>
            <div class="btn-icon"></div>
            分享
          </template>
        </van-button>
        <van-button
          type="primary"
          :class="{
            primaryBtn: true,
            color: btnColor,
          }"
          @click="successFunc"
          >{{contentBtn}}</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../../assets/img.png";
import headerBack from "@/components/headBack";
export default {
  data() {
    return {
      result: [],
      img: img,
      btnColor: false,
      contentBtn:"投票"
    };
  },

  components: {
    headerBack,
  },

  computed: {},

  methods: {
    applyFunc() {
      console.log("分享");
    },
    successFunc() {
      console.log("投票");
      this.btnColor = true;
      
      this.contentBtn="您已投票"
    },
  },
};
</script>
<style lang='scss' scoped>
.title {
  margin-top: 22px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  opacity: 1;
}
.content-sty {
  padding: 12px;
  background: #ffffff;
  box-shadow: -1px 5px 16px rgba(235, 235, 243, 0.5);
  opacity: 1;
  border-radius: 8px;
  .content-title {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    opacity: 1;
    margin-bottom: 15px;
  }
  .content-detail {
    margin-bottom: 12px;
    .left-sty {
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      font-weight: 400;
      color: #9ea5b1;
      opacity: 1;
    }
    .right-sty {
      width: 70%;
      vertical-align: top;
      margin-left: 10px;
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      color: #4a5063;
      opacity: 1;
    }
  }
  .content-bottom {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 28px;
    color: #4a5063;
    opacity: 1;
  }
}
.flexActive {
  display: flex;
  height: 28vw;
  margin-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #d7dae0;
  &.borBott {
    border-bottom: none;
  }
  .flex-img {
    img {
      width: 28vw;
      height: 22vw;
      border-radius: 8px;
    }
  }
  .flex-text {
    margin-left: 10px;
    // height: 100px;
    height: 22vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .color-size {
      width: 50vw;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: #4a5063;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .size-size {
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      color: #9ea5b1;
    }
  }
}
.btn-sty {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  .info-btn {
    width: 35vw;
    margin-right: 10px;
    border-radius: 8px;
  }
  .primaryBtn {
    width: 55vw;
    border-radius: 8px;
    &.color {
      background: #7b91e9;
      border:1px solid #7b91e9;
    }
  }
}
.btn-icon {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 10px;
  background-image: url("../../../assets/fen.png");
  background-size: 100% 100%;
  vertical-align: top;
}
</style>