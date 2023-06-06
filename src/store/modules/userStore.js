import { login, logout } from '@/api/user';

const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
  },
  getters: {
    getUserInfo: function (state) {
      return state.userInfo;
    },
    getUserIdx : function(state){
      return state.userInfo.userIdx;
    },
    getIsLogin : function(state){
      return state.isLogin;
    }
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user,
        ({ data }) => {
          if (data.message == "SUCCESS") {
            //성공한 경우
            commit('SET_USER_INFO', data.result);
            commit('SET_IS_LOGIN_ERROR', false);
            localStorage.setItem('isLogin', true);
          } else {
            commit('SET_IS_LOGIN', false);
            commit('SET_IS_LOGIN_ERROR', true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async userLogout({ commit }, userIdx) {
      await logout(
        userIdx,
        ({ data }) => {
          if (data.message == "SUCCESS") {
            commit('SET_USER_INFO', null);
            commit('SET_IS_LOGIN', false);
            commit('SET_IS_VALID_TOKEN', false);
          } else {
            console.log('유저 정보 없음!!!!');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default userStore;
