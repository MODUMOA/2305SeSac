<template>
  <div class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 pt17 pb20 white_container">
        <div class="col-12 mb20 form_style_0_con">
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <span>아이디</span>
            </div>
            <div class="col-12 input_box has_text">
              {{user.userId}}
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <span>이름</span>
            </div>
            <div class="col-12 input_box has_text">
              {{user.userName}}
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updatePassword">비밀번호</label>
            </div>
            <div class="col-12 input_box">
              <input type="password" class="input_style_0" id="updatePassword" v-model="user.password" @keyup="checkPassword"/>
              <div class="col-12 mt7 addr_text" ref="checkPasswordText" style="display: none"></div>
              <div class="col-12 mt7 addr_text" ref="passwordInfoText">
                영 대·소문자, 특수문자, 숫자 포함 8 ~ 16자 조합으로 만들어주세요.
              </div>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updateConfirmPassword">비밀번호 확인</label>
            </div>
            <div class="col-12 input_box">
              <input type="password" class="input_style_0" id="updateConfirmPassword" ref="updateConfirmPassword" @keyup="checkConfirmPassword"/>
              <div class="col-12 mt7 addr_text" ref="checkConfirmPasswordText" style="display: none"></div>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updateNickName">닉네임</label>
            </div>
            <div class="col-12 input_box">
              <input type="text" class="input_style_0" id="updateNickName" v-model="user.nickName"/>
            </div>
          </div>
        </div>
        <button class="col-12 tc btn_style_0 type_2 bg_yellow" @click="userUpdate">정보수정</button>
      </div>
    </div>
    <the-footer></the-footer>
    <div v-if="openStatus" class="col-12 popup_style_1_wrap">
      <div class="col-12 popup_con">
        <div class="col-12 popup_inner">
          <div class="col-12 mb17 tc popup_title">비밀번호 확인</div>
          <div class="col-12 mb27 pl20 pr20">
            <input type="password" class="input_style_0" v-model="checkingPasswordVal" @keyup.enter="userCheckingPassword"/>
          </div>
          <div class="col-12 tc popup_style_1_btn_con">
            <div class="col-12 bg_point0 popup_style_1_btn" @click="userCheckingPassword">확인</div>
          </div>
        </div>
      </div>
    </div>
    <alert-popup
      :popupStatus="alertOpenStatus"
      :alertMsg="alertMsg"
      @closePopup="closePopup"
    ></alert-popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {checkingPassword, update} from '@/api/user';
import TheHeader from '../inc/header/TheHeader.vue';
import TheFooter from '../inc/footer/TheFooter.vue';
import AlertPopup from '../util/AlertPopup.vue';

const userStore = 'userStore';

export default {
  name: 'UserUpdate',
  components : {TheHeader, TheFooter, AlertPopup},
  data() {
    return {
      alertOpenStatus: false,
      alertMsg: null,
      openStatus : true,
      checkPasswordStatus: false,
      confirmPasswordStatus : false,
      checkingPasswordVal : null,
      user : {
        id : '',
        password : '',
        userName : '',
        nickName : '',
      },
    }
  },
  methods : {
    ...mapGetters(userStore, ['getUserInfo']),
    close() {
      console.dir(this.openStatus);
      this.openStatus = false;
    },
    async userCheckingPassword(){
      const param = {
        userIdx : this.user.userIdx,
        password : this.checkingPasswordVal
      }
      await checkingPassword(
        param,
        ({data}) => {
          if(data.message == "SUCCESS"){
            this.user.password = this.checkingPasswordVal;
            this.$refs.updateConfirmPassword.value = this.checkingPasswordVal;
            this.checkPassword();
            this.close();
          } else {
            alert('비밀번호가 틀렸습니다. 다시 한번 확인해주세요');
          }
        },
        (error) => {
          console.dir(error);
        }
      )
    },
    checkPassword() {
      this.checkConfirmPassword();
      if (this.user.password == null || this.user.password == '') {
        this.$refs.checkPasswordText.innerHTML = '';
        this.$refs.checkPasswordText.style.display = 'none';
        this.$refs.passwordInfoText.style.display = '';
        this.checkPasswordStatus = false;
        return;
      }

      const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      if (regex.test(this.user.password)) {
        this.$refs.checkPasswordText.innerHTML =
          '<span class="success fontweight600">사용 가능</span>한 비밀번호 입니다.';
        this.$refs.passwordInfoText.style.display = 'none';
        this.$refs.checkPasswordText.style.display = '';
        this.checkPasswordStatus = true;
      } else {
        this.$refs.checkPasswordText.innerHTML =
          '<span class="warning fontweight600">사용 불가능</span>한 비밀번호 입니다.';
        this.$refs.passwordInfoText.style.display = 'none';
        this.$refs.checkPasswordText.style.display = '';
        this.checkPasswordStatus = false;
      }
    },
    checkConfirmPassword() {
      let confirmPasswordText = '비밀번호가 <span class="success fontweigth600">일치</span>합니다.';
      if(this.user.password == this.$refs.updateConfirmPassword.value){
        this.confirmPasswordStatus = true;
      } else {
        confirmPasswordText = '비밀번호가 <span class="warning fontweigth600">불일치</span>합니다.';
        this.confirmPasswordStatus = false;
      }
      this.$refs.checkConfirmPasswordText.innerHTML = confirmPasswordText;
      this.$refs.checkConfirmPasswordText.style.display = '';
    },
    async userUpdate(){
      if (!this.checkPasswordStatus) {
        this.openPopup('비밀번호 양식이 틀렸습니다.');
        return;
      }

      if(!this.confirmPasswordStatus){
        this.openPopup('비밀번호 확인이 일치하지 않습니다.');
        return;
      }

      await update(
        this.user,
        ({data}) => {
          if(data.result){
            alert('변경이 완료되었습니다.');
            this.$router.push({name : 'Main'});
          }
        },
        (error) => {
          console.dir(error);
        }
      )
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
  created() {
    this.user = this.getUserInfo();
  }
}
</script>
