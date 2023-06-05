import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../views/AppMain.vue'
import AppNotice from '../views/AppNotice.vue'
import AppUser from '../views/AppUser.vue'
import AppTree from '../views/AppTree.vue'
import AppPayment from '../views/AppPayment.vue'
import AppQR from '../views/AppQR.vue'
import AppDashBoard from '../views/AppDashBoard.vue'

import store from '@/store';


//import store from '@/store';

Vue.use(VueRouter)

const onlyAuthUser = async (to, from, next) => {
  const getUserInfo = store.getters['userStore/getUserInfo'];
  const getIsLogin = store.getters['userStore/getIsLogin'];
  //로그인이 안되어 있을 때
  if (getUserInfo == null && !getIsLogin) {
    alert('로그인이 필요한 페이지입니다');
    // next({ name: "login" });
    router.push({ name: 'UserLogin' });
  } else {
    //로그인이 되어있을 때
    next();
  }
};

const onlyAuthNotUser = async (to, from, next) => {
  const getUserInfo = store.getters['userStore/getUserInfo'];
  const getIsLogin = store.getters['userStore/getIsLogin'];

  //로그인이 안되어 있을 때
  if (getUserInfo == null && !getIsLogin) {
    next();
  } else {
    //로그인이 되어있을 때
    alert('로그인시 사용 불가능한 페이지입니다.');
    router.push({ name: 'Main' });
  }
};


const routes = [
  {
    path: '/',
    name: 'Main',
    beforeEnter: onlyAuthUser,
    component: AppMain
  },
  {
    path: '/notice',
    name: 'Notice',
    beforeEnter: onlyAuthUser,
    component: AppNotice,
    redirect: '/notice/list',
    children: [
      {
        path: 'list',
        name: 'noticeList',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/notice/list/List.vue'),
      },
      {
        path: 'view/:noticeIdx',
        name: 'noticeView',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/notice/view/View.vue'),
      },
      {
        path: 'write',
        name: 'noticeWrite',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/notice/write/Write.vue'),
      },
      {
        path: 'update/:no',
        name: 'noticeUpdate',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/notice/update/Update.vue'),
      },
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: AppUser,
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        beforeEnter: onlyAuthNotUser,
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/user/Login.vue'),
      },
      {
        path: 'signUp',
        name: 'UserSignUp',
        beforeEnter: onlyAuthNotUser,
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/user/SignUp.vue'),
      },
      {
        path: 'update',
        name: 'UserUpdate',
        beforeEnter: onlyAuthUser,
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/user/Update.vue'),
      },
    ]
  },
  {
    path: '/tree',
    name: 'Tree',
    beforeEnter: onlyAuthUser,
    component: AppTree
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    beforeEnter: onlyAuthUser,
    component: AppDashBoard
  },
  {
    path: '/payment',
    name: 'Payment',
    beforeEnter: onlyAuthUser,
    component: AppPayment
  },
  {
    path: '/qr',
    name: 'QR',
    component: AppQR,
    beforeEnter: onlyAuthUser,
    redirect: '/qr/preview',
    children: [
      {
        path: 'preview',
        name: 'QRPreview',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/qr/Preview.vue'),
      },
      {
        path: 'proceed/:QRCode',
        name: 'QRProceed',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/qr/Proceed.vue'),
        props: true,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
