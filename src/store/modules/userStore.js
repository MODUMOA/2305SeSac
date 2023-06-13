import { login, autoLogin, logout } from "@/api/user";

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
    getUserName: function (state) {
      return state.userInfo.userName;
    },
    getUserIdx: function (state) {
      return state.userInfo.userIdx;
    },
    getUserToken: function (state) {
      return state.userInfo.token;
    },
    getIsLogin: function (state) {
      return state.isLogin;
    },
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
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user,
        ({ data }) => {
          if (data.message == "SUCCESS") {
            //성공한 경우
            commit("SET_USER_INFO", data.result);
            commit("SET_IS_LOGIN_ERROR", false);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    async userAutoConfirm({ commit }, token){
      await autoLogin(
        token,
        ({ data }) => {
          if (data.message == "SUCCESS") {
            //성공한 경우
            commit("SET_USER_INFO", data.result);
            commit("SET_IS_LOGIN_ERROR", false);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
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
            commit("SET_USER_INFO", null);
            commit("SET_IS_LOGIN", false);
            localStorage.removeItem("autoToken");
          } else {
            console.log("유저 정보 없음!!!!");
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
