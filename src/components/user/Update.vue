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
              modumoa
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updatePassword">비밀번호</label>
            </div>
            <div class="col-12 input_box">
              <input type="password" class="input_style_0" id="updatePassword"/>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updateConfirmPassword">비밀번호 확인</label>
            </div>
            <div class="col-12 input_box">
              <input type="password" class="input_style_0" id="updateConfirmPassword"/>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updateConfirmPassword">비밀번호 확인</label>
            </div>
            <div class="col-12 input_box">
              <input type="password" class="input_style_0" id="updateConfirmPassword"/>
            </div>
          </div>
          <div class="col-12 form_style_0">
            <div class="col-12 label_box">
              <label for="updateNickName">닉네임</label>
            </div>
            <div class="col-12 input_box">
              <input type="text" class="input_style_0" id="updateNickName"/>
            </div>
          </div>
        </div>
        <button class="col-12 tc btn_style_0 type_2 bg_yellow">정보수정</button>
      </div>
    </div>
    <the-footer></the-footer>
    <div v-if="openStatus" class="col-12 popup_style_1_wrap">
      <div class="col-12 popup_con">
      <div class="col-12 popup_inner">
        <div class="col-12 mb17 tc popup_title">비밀번호 확인</div>
        <div class="col-12 mb27 pl20 pr20">
          <input type="password" class="input_style_0"/>
        </div>
        <div class="col-12 tc popup_style_1_btn_con">
          <div class="col-12 bg_point0 popup_style_1_btn" @click="close">확인</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '../inc/header/TheHeader.vue';
import TheFooter from '../inc/footer/TheFooter.vue';

export default {
  name: 'UserUpdate',
  components : {TheHeader, TheFooter},
  data() {
    return {
      openStatus : false,
    }
  },
  methods : {
    close() {
      this.openStatus = false;
    }
  }
}
</script>
