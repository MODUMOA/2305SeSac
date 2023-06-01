<template>
  <div class="col-12 pt17 pb17 white_container">
    <div class="col-12 mb30 form_style_1_wrap">
      <div class="col-12 mb22 form_style_1_title">공지사항 작성</div>
      <div class="col-12 form_style_1_con">
        <div class="col-12 form_style_1">
          <input type="text" class="input_style_1" placeholder="제목"/>
        </div>
        <div class="col-12 form_style_1">
          <textarea name="useContents" id="" class="textarea_style_1"></textarea>
        </div>
      </div>
    </div>
    <div class="col-12 tc">
      <router-link :to="{name : 'noticeList'}" class="btn_style_1 bg_grey white type_3 mr10">취소</router-link>
      <a href="javascript:void(0)" class="btn_style_1 white bg_green type_3">등록</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NoticeWrite',
  data() {
    return {
    }
  },
  created() {

  }
}
</script>
