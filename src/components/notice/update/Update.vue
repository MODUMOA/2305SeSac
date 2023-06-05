<template>
  <div class="col-12 pt17 pb17 white_container">
    <div class="col-12 mb30 form_style_1_wrap">
      <div class="col-12 mb22 form_style_1_title">공지사항 수정</div>
      <div class="col-12 form_style_1_con">
        <div class="col-12 form_style_1">
          <input type="text" class="input_style_1" placeholder="제목" v-model="view.noticeTitle"/>
        </div>
        <div class="col-12 form_style_1">
          <textarea name="useContents" class="textarea_style_1" v-model="view.noticeContent"></textarea>
        </div>
      </div>
    </div>
    <div class="col-12 tc">
      <router-link :to="{name : 'noticeList'}" class="btn_style_1 bg_grey white type_3 mr10">취소</router-link>
      <a href="javascript:void(0)" class="btn_style_1 white bg_green type_3" @click="userUpdate">변경</a>
    </div>
  </div>
</template>

<script>
import { getNoticeView, updateNotice } from '@/api/notice';

export default {
  name: 'NoticeUpdate',
  data() {
    return {
      view : {},
    }
  },
  methods : {
    async userGetView(){
      await getNoticeView(
        this.$route.params.noticeIdx,
        ({data}) => {
          this.view = data.result;
        },
        (error) => {
          console.dir(error);
        }
      )
    },
    async userUpdate(){
      await updateNotice(
        this.view,
        ({data}) => {
          if(data.message == "SUCCESS"){
            this.$router.push({name : 'noticeList'});
          }
        },
        (error) => {
          console.dir(error);
        }
      )
    }
  },
  created() {
    this.userGetView();
  }
}
</script>
