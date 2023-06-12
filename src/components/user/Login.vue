<template>
  <div class="col-12 login_wrap">
    <div class="col-12 img_box">
        <img :src="this.$resource.themeRes.img('login_logo.png')" alt="로그인 로고"/>
    </div>
    <div class="col-12 col-center pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 mb30 form_style_0_con">
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="loginId">아이디</label>
          </div>
          <div class="col-12 input_box">
            <input type="text" class="input_style_0 bg_yellow" id="loginId" v-model="user.userId"/>
          </div>
        </div>
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="loginPassword">비밀번호</label>
          </div>
          <div class="col-12 input_box">
            <input type="password" class="input_style_0 bg_yellow" id="loginPassword" v-model="user.userPwd" @keyup.enter="loginUser"/>
          </div>
        </div>
      </div>
      <button class="col-12 tc mb30 btn_style_0 type_2 bg_yellow" @click="loginUser">
        로그인
      </button>
      <ul class="col-12 mb20 login_info_list_con">
        <li>
          <label class="switch_style_0">
            <input type="checkbox"/>
            <span class="slider round"></span>
            <span>자동로그인</span>
          </label>
        </li>
        <li><router-link :to="{name : 'UserSignUp'}">회원가입</router-link></li>
      </ul>
      <button class="col-12 tc btn_style_0 bg_yellow type_2 kakao">카카오 로그인</button>
    </div>
    <alert-popup
      :popupStatus="alertOpenStatus"
      :alertMsg="alertMsg"
      @closePopup="closePopup"
    ></alert-popup>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import AlertPopup from '../util/AlertPopup.vue';

const userStore = 'userStore';

export default {
  name: 'UserLogin',
  components : {
    AlertPopup,
  },
  data() {
    return {
      alertOpenStatus: false,
      alertMsg: null,
      user: {
        userId: '',
        userPwd: '',
      },
    };
  },
  methods: {
    ...mapGetters(userStore, ['getIsLogin']),
    ...mapActions(userStore, ['userConfirm']),
    async loginUser() {
      if(this.user.userId == null || this.user.userId == ''){
        this.openPopup("아이디를 입력해주세요");
        return;
      }

      if(this.user.userPwd == null || this.user.userPwd == ''){
        this.openPopup("비밀번호를 입력해주세요");
        return;
      }

      await this.userConfirm(this.user);

      if(this.getIsLogin()){
        this.$router.push({name:"Main"});
      } else {
        this.openPopup('로그인에 실패했습니다.<br/>다시 한번 확인해주세요.');
      }
    },
    openPopup(msg) {
      this.alertOpenStatus = true;
      this.alertMsg = msg;
    },
    closePopup() {
      this.alertOpenStatus = false;
      this.alertMsg = null;
    },
  },
};
</script>

<style scope>
body {background-color:#FFFBEC !important;}
#app{background-color:#FFFBEC;}
</style>