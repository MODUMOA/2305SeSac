<template>
  <div class="col-12">
    <div class="col-12 pt17 pb20 mb27 white_container">
      <div class="col-12 tc font-size-15">소셜 계정으로 편하게 가입해요</div>
    </div>
    <div class="col-12 mb27 signup_divide">
      <hr/>
      <span>또는</span>
      <hr/>
    </div>
    <div class="col-12 pt17 pb20 mb27 white_container">
      <div class="col-12 mb34 tc font-size-15">MOMO에 가입해서 환경과 친해져요!</div>
      <div class="col-12 mb30 form_style_0_con">
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="signUpId">아이디</label>
          </div>
          <div class="col-12 input_box has_btn">
            <input type="text" class="input_style_0" id="signUpId"/>
            <button class="btn_style_0 bg_yellow">중복확인</button>
          </div>
        </div>
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="signUpPassword">비밀번호</label>
          </div>
          <div class="col-12 input_box">
            <input type="password" class="input_style_0" id="signUpPassword"/>
          </div>
        </div>
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="signUpConfirmPassword">비밀번호 확인</label>
          </div>
          <div class="col-12 input_box">
            <input type="password" class="input_style_0" id="signUpConfirmPassword"/>
          </div>
        </div>
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="signUpNickName">닉네임</label>
          </div>
          <div class="col-12 input_box">
            <input type="text" class="input_style_0" id="signUpNickName"/>
          </div>
        </div>
      </div>
      <button class="col-12 tc btn_style_0 bg_yellow type_2">회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserUpdate',
}
</script>
