import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../views/AppMain.vue'
import AppNotice from '../views/AppNotice.vue'
import AppUser from '../views/AppUser.vue'
import AppTree from '../views/AppTree.vue'


//import store from '@/store';

Vue.use(VueRouter)

// const onlyAuthUser = async (to, from, next) => {
//   const checkUserInfo = store.getters['userStore/checkUserInfo'];
//   const checkToken = store.getters['userStore/checkToken'];
//   let token = sessionStorage.getItem('accessToken');
//   console.log('로그인 처리 전', checkUserInfo, token);

//   //토큰 유효성 체크
//   if (checkUserInfo != null && token) {
//     await store.dispatch('userStore/getUserInfo', token);
//   }
//   console.log(checkToken);
//   //로그인이 안되어 있을 때
//   if (!checkToken || checkUserInfo === null) {
//     alert('로그인이 필요한 페이지입니다..');
//     // next({ name: "login" });
//     router.push({ name: 'UserLogin' });
//   } else {
//     //로그인이 되어있을 때
//     next();
//   }
// };

// const onlyAuthNotUser = async (to, from, next) => {
//   const checkUserInfo = store.getters['userStore/checkUserInfo'];
//   const checkToken = store.getters['userStore/checkToken'];
//   let token = sessionStorage.getItem('accessToken');

//   //토큰 유효성 체크
//   if (checkUserInfo != null && token) {
//     await store.dispatch('userStore/getUserInfo', token);
//   }
//   //로그인이 안되어 있을 때
//   if (!checkToken || checkUserInfo === null) {
//     next();
//   } else {
//     //로그인이 되어있을 때
//     alert('로그인시 사용 불가능한 페이지입니다.');
//     router.push({ name: 'home' });
//   }
// };


const routes = [
  {
    path: '/',
    name: 'Main',
    component: AppMain
  },
  {
    path: '/notice',
    name: 'Notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AppNotice,
    redirect: '/notice/list',
    children : [
      {
        path: 'list',
        name: 'noticeList',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/notice/list/List.vue'),
      },
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: AppUser,
    children : [
      {
        path: 'login',
        name: 'UserLogin',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/user/Login.vue'),
      },
      {
        path: 'signUp',
        name: 'UserSignUp',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/user/SignUp.vue'),
      },
      {
        path: 'update',
        name: 'UserUpdate',
        component: () =>
          import(/* webpackChunkName: "notice" */ '../components/user/Update.vue'),
      },
    ]
  },
  {
    path: '/tree',
    name: 'Tree',
    component: AppTree
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
