import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    redirect: "/homePage"
    // component: Home
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/homePage",
    name: "homePage",
    component: () => import("../views/homePage/index.vue")
  },
  {
    path: "/InformDetails",
    name: "InformDetails",
    component: () => import("../views/InformDetails/index.vue")
  },

  // 活动参与
  {
    path: "/activitiesInvolved",
    name: "activitiesInvolved",
    component: () => import("../views/activitiesInvolved/index.vue")
  },


  {
    path: "/activitiesInvolvedDetail/:id",
    name: "activitiesInvolvedDetail",
    component: () => import("../views/activitiesInvolved/activitiesInvolvedDetail")
  },

  {
    path: "/activitiesInvolvedEdit",
    name: "activitiesInvolvedEdit",
    component: () => import("../views/activitiesInvolved/activitiesInvolvedEdit")
  },
  {
    path: "/applySuccess",
    name: "applySuccess",
    component: () => import("../views/activitiesInvolved/applySuccess")
  },

  // 问卷调查
  {
    path: "/questionnaireSurvey",
    name: "questionnaireSurvey",
    component: () => import("../views/questionnaireSurvey")
  },
  {
    path: "/questionnaireSurveyEdit/:99",
    name: "questionnaireSurveyEdit",
    component: () => import("../views/questionnaireSurvey/questionnaireSurveyEdit")
  },
  {
    path: "/questionnaireSurveySuccess",
    name: "questionnaireSurveySuccess",
    component: () => import("../views/questionnaireSurvey/questionnaireSurveySuccess")
  },

  {
    path: "/nameAuthentication",
    name: "nameAuthentication",
    component: () => import("../views/nameAuthentication")
  },
  
  {
    path: "/selectVote",
    name: "selectVote",
    component: () => import("../views/selectVote")
  },
  
  {
    path: "/selectVoteEdit/:id",
    name: "selectVoteEdit",
    component: () => import("../views/selectVote/selectVoteEdit")
  },
  
  {
    path: "/documentTransaction",
    name: "documentTransaction",
    component: () => import("../views/documentTransaction")
  },
  {
    path: "/successTransaction",
    name: "successTransaction",
    component: () => import("../views/documentTransaction/successTransaction.vue")
  },
  {
    path: "/documentTransactionEdit/:id",
    name: "documentTransactionEdit",
    component: () => import("../views/documentTransaction/documentTransactionEdit")
  },

  {
    path: "/venueBooking",
    name: "venueBooking",
    component: () => import("../views/venueBooking")
  },
  
  {
    path: "/IntegralStrategy",
    name: "IntegralStrategy",
    component: () => import("../views/IntegralStrategy")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置

    return { x: 0, y: 0 }
  }
})

export default router