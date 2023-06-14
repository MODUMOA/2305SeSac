<template>
  <div class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 pt17 pb20 mb27 white_container">
        <div class="col-12 mb17 tc font-size-15">소셜 계정으로 편하게 가입해요</div>
        <button class="col-12 tc btn_style_0 bg_yellow type_2 kakao">카카오 로그인</button>
      </div>
      <div class="col-12 mb27 signup_divide">
        <hr />
        <span>또는</span>
        <hr />
      </div>
      <div class="col-12 pt17 pb20 mb27 white_container">
        <div class="col-12 mb34 tc font-size-15">MOMO에 가입해서 환경과 친해져요!</div>
        <div class="col-12 mb30 form_style_0_con">
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="signUpId">아이디</label>
            </div>
            <div class="col-12 input_box has_btn">
              <input
                type="text"
                class="input_style_0"
                id="signUpId"
                v-model="user.userId"
                @keyup="changeId"
                @keyup.enter="userCheckId"
              />
              <button class="btn_style_0 bg_yellow" @click="userCheckId">중복확인</button>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="signUpPassword">비밀번호</label>
            </div>
            <div class="col-12 input_box">
              <input
                type="password"
                class="input_style_0"
                id="signUpPassword"
                v-model="user.userPwd"
                @keyup="checkPassword"
              />
              <div class="col-12 mt7 addr_text" ref="checkPasswordText" style="display: none"></div>
              <div class="col-12 mt7 addr_text" ref="passwordInfoText">
                영 대·소문자, 특수문자, 숫자 포함 8 ~ 16자 조합으로 만들어주세요.
              </div>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="signUpConfirmPassword">비밀번호 확인</label>
            </div>
            <div class="col-12 input_box">
              <input
                type="password"
                class="input_style_0"
                id="signUpConfirmPassword"
                ref="signUpConfirmPassword"
                @keyup="checkConfirmPassword"
              />
            </div>
            <div
              class="col-12 mt7 addr_text"
              ref="checkConfirmPasswordText"
              style="display: none"
            ></div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="signUpNickName">닉네임</label>
            </div>
            <div class="col-12 input_box">
              <input
                type="text"
                class="input_style_0"
                id="signUpNickName"
                v-model="user.nickName"
              />
            </div>
          </div>
        </div>
        <button class="col-12 tc btn_style_0 bg_yellow type_2" @click="signUp">회원가입</button>
      </div>
    </div>
    <the-footer></the-footer>
    <alert-popup
      :popupStatus="alertOpenStatus"
      :alertMsg="alertMsg"
      @closePopup="closeFn"
    ></alert-popup>
  </div>
</template>

<script>
import { checkId, signUp } from "@/api/user";
import TheHeader from "@/components/inc/header/TheHeader.vue";
import TheFooter from "@/components/inc/footer/TheFooter.vue";
import AlertPopup from "../util/AlertPopup.vue";

const duplicateId = "";

export default {
  name: "UserSignUp",
  components: { TheHeader, TheFooter, AlertPopup },
  data() {
    return {
      alertOpenStatus: false,
      alertMsg: null,
      closeFn: "",
      duplicatedIdVal: "",
      checkIdStatus: false,
      checkPasswordStatus: false,
      confirmPasswordStatus: false,
      user: {
        userId: "",
        userPwd: "",
        nickName: "",
        userName: "user",
      },
    };
  },
  methods: {
    changeId() {
      if (this.duplicatedIdVal != this.user.id) {
        this.checkIdStatus = false;
      } else {
        this.checkIdStatus = true;
      }
    },
    checkPassword() {
      this.checkConfirmPassword();
      if (this.user.userPwd == null || this.user.userPwd == "") {
        this.$refs.checkPasswordText.innerHTML = "";
        this.$refs.checkPasswordText.style.display = "none";
        this.$refs.passwordInfoText.style.display = "";
        this.checkPasswordStatus = false;
        return;
      }

      const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      if (regex.test(this.user.userPwd)) {
        this.$refs.checkPasswordText.innerHTML =
          '<span class="success fontweight600">사용 가능</span>한 비밀번호 입니다.';
        this.$refs.passwordInfoText.style.display = "none";
        this.$refs.checkPasswordText.style.display = "";
        this.checkPasswordStatus = true;
      } else {
        this.$refs.checkPasswordText.innerHTML =
          '<span class="warning fontweight600">사용 불가능</span>한 비밀번호 입니다.';
        this.$refs.passwordInfoText.style.display = "none";
        this.$refs.checkPasswordText.style.display = "";
        this.checkPasswordStatus = false;
      }
    },
    checkConfirmPassword() {
      let confirmPasswordText = '비밀번호가 <span class="success fontweigth600">일치</span>합니다.';
      if (this.user.userPwd == this.$refs.signUpConfirmPassword.value) {
        this.confirmPasswordStatus = true;
      } else {
        confirmPasswordText = '비밀번호가 <span class="warning fontweigth600">불일치</span>합니다.';
        this.confirmPasswordStatus = false;
      }
      this.$refs.checkConfirmPasswordText.innerHTML = confirmPasswordText;
      this.$refs.checkConfirmPasswordText.style.display = "";
    },
    async userCheckId() {
      if (this.user.userId == "") {
        this.openPopup("아이디를 입력해주세요");
        return;
      }

      await checkId(
        this.user.userId,
        ({ data }) => {
          console.log(data);
          if (data.result) {
            this.duplicatedIdVal = this.user.userId;
            this.checkIdStatus = true;
            this.openPopup("사용 가능한 아이디입니다");
          } else {
            this.duplicatedIdVal = duplicateId;
            this.checkIdStatus = false;
            this.openPopup("사용 불가능한 아이디입니다");
          }
        },
        (error) => {
          console.log(error);
          this.openPopup("에러로 실패했습니다.<br/>관리자에 문의해주세요.");
        }
      );
    },
    async signUp() {
      //아이디 체크
      if (this.user.userId == "" || this.user.userId == null) {
        this.openPopup("아이디를 입력해주세요");
        return;
      }
      if (!this.checkIdStatus) {
        this.openPopup("아이디 중복확인을 해주세요");
        return;
      }

      if (this.user.userPwd == "" || this.user.userPwd == null) {
        this.openPopup("비밀번호를 입력해주세요");
        return;
      }

      if (!this.checkPasswordStatus) {
        this.openPopup("비밀번호 양식이 틀렸습니다.");
        return;
      }

      if (!this.confirmPasswordStatus) {
        this.openPopup("비밀번호 확인이 일치하지 않습니다.");
        return;
      }

      if (this.user.nickName == "" || this.user.nickName == null) {
        this.openPopup("이름을 입력해주세요");
        return;
      }

      await signUp(
        this.user,
        ({ data }) => {
          console.log(data);
          if (data.message == "SUCCESS") {
            this.openRouterPopup("가입이 완료되었습니다.");
          } else {
            this.openPopup("가입에 실패했습니다.<br/>잠시 후 다시 시도해주세요.");
          }
        },
        (error) => {
          console.log(error);
          this.openPopup("에러로 실패했습니다.<br/>관리자에 문의해주세요.");
        }
      );
    },
    openPopup(msg) {
      this.alertOpenStatus = true;
      this.alertMsg = msg;
      this.closeFn = this.closePopup;
    },
    openRouterPopup(msg) {
      this.alertOpenStatus = true;
      this.alertMsg = msg;
      this.closeFn = this.closeRouterPopup;
    },
    closePopup() {
      this.alertOpenStatus = false;
      this.alertMsg = null;
    },
    closeRouterPopup() {
      this.alertOpenStatus = false;
      this.alertMsg = null;
      this.$router.push({ name: "UserLogin" });
    },
  },
};
</script>
