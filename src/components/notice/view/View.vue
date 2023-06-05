<template>
  <div class="col-12 pt17 pb17 white_container">
    <div class="col-12 mb20 pb22 view_style_0_wrap">
      <div class="col-12 mb5 view_style_0_info_con">
        <span>{{ view.userName }}</span><span class="date">{{ view.date }}</span>
      </div>
      <div class="col-12 pb17 mb22 view_style_0_title">
        {{ view.noticeTitle }}
      </div>
      <div class="col-12 view_style_0_desc">
        {{ view.noticeContent }}
      </div>
    </div>
    <div class="col-12 tc">
      <router-link :to="'/notice/update/' + view.noticeIdx" class="btn_style_0 bg_point0 white type_3 mr5">수정</router-link>
      <router-link :to="{name : 'noticeList'}" class="btn_style_0 bg_grey white type_3">목록으로</router-link>
    </div>
  </div>
</template>

<script>
import { getNoticeView } from '@/api/notice';
export default {
  name: 'NoticeView',
  data() {
    return {
      view : null,
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
    }
  },
  created() {
    this.userGetView();
  }
}
</script>
