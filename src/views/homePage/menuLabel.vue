<!--  -->
<template>
  <div class="content-label">
    <router-link
      tag="div"
      class="conten-label-text"
      v-for="(item, index) in lebalArray"
      :key="index"
      :to="item.url"
    >
      <div class="conten-div">
        <div class="label-img-size">
          <svg-icon :iconClass="item.img"></svg-icon>
        </div>
        <div class="lebal-size">{{ item.name }}</div>
      </div>
    </router-link>
    <!-- <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div>
    <div class="conten-label-text"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      lebalArray: [
        {
          name: "通知专栏",
          img: "notifycolumn",
          url: "/InformDetails",
        },
        {
          name: "联系电话",
          img: "phone",
          url: "/InformDetails",
        },
        {
          name: "党建阵地",
          img: "partybuilding",
          url: "/InformDetails",
        },
        {
          name: "场地预约",
          img: "place",
          url: "/venueBooking",
        },
        {
          name: "积分攻略",
          img: "integral",
          url: "/IntegralStrategy",
        },
        {
          name: "事件上报",
          img: "incident",
          url: "/InformDetails",
        },
        {
          name: "活动参与",
          img: "activity",
          url: "/activitiesInvolved",
        },
        {
          name: "问卷调查",
          img: "questionnaire",
          url: "/questionnaireSurvey",
        },
        {
          name: "投票选举",
          img: "vote",
          url: "/selectVote",
        },
        {
          name: "证件办理",
          img: "certificate",
          url: "/documentTransaction",
        },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.content-label {
  padding-top: 9vw;
  padding-bottom: 1vw;
  background-color: #ffffff;
  border-radius: 8px;

  box-shadow: 0px 5px 16px rgba(235, 235, 243, 0.5);
  // border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.conten-label-text {
  width: 17vw;
  height: 18vw;
  margin-bottom: 10px;
}
.conten-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.lebal-size {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #9ea5b1;
  opacity: 1;
}
.label-img-size {
  width: 7vw;
  height: 7.5vw;
  margin-bottom: 3vw;
}
</style>