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
            <input type="text" class="input_style_0 bg_yellow" id="loginId"/>
          </div>
        </div>
        <div class="col-12 form_style_0">
          <div class="col-12 label_box">
            <label for="loginPassword">비밀번호</label>
          </div>
          <div class="col-12 input_box">
            <input type="password" class="input_style_0 bg_yellow" id="loginPassword"/>
          </div>
        </div>
      </div>
      <button class="col-12 tc mb30 btn_style_0 type_2 bg_yellow">
        로그인
      </button>
      <ul class="col-12 login_info_list_con">
        <li>
          <label class="switch_style_0">
            <input type="checkbox"/>
            <span class="slider round"></span>
            <span>자동로그인</span>
          </label>
        </li>
        <li><router-link :to="{name : 'UserSignUp'}">회원가입</router-link></li>
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  name: 'UserLogin',
}
</script>
<style scope>
#app{background-color:#FFFBEC;}
</style>