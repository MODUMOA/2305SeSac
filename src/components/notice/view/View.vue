<template>
  <div class="col-12 pt17 pb17 white_container">
    <div class="col-12 mb20 pb22 view_style_0_wrap">
      <div class="col-12 mb5 view_style_0_info_con">
        <span>{{ view.writerName }}</span><span class="date">{{ view.registDateStr }}</span>
      </div>
      <div class="col-12 pb17 mb22 view_style_0_title">
        {{ view.noticeTitle }}
      </div>
      <div class="col-12 view_style_0_desc">
        {{ view.userContent }}
      </div>
    </div>
    <div class="col-12 tc">
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
      view : {
        noticeIdx : 1,
        writerName : 'OO관리소',
        noticeTitle : '승강기 정기 점검에 따른 일시 운행 중단 안내',
        date : '23.05.30',
        noticeContent : '공동주택 경비업무에 대한 경비업법 적용(경찰청 제공) 안녕하십니까? “아파트 관리소 사람들”입니다. 공동주택 경비업의 업무범위 명확화와 관련 "공동주택에 경비원을 배치한 경비업자(「경비업법」 제4조 제1항에 따라 허가를 받은 경비업자를 말한다)는 경비업법 제7조 제5항에도 불구하고 대통령령으로 정하는 공동주택관리에 필요한 업무에 경비원을 종사하게 할 수 있다"는 공동주택법이 개정. 공포되어 2021년 10월 21일 시행을 앞두고 있습니다. 공동주택 경비업무에 대한 경비업법 적용관련 안내사항을 숙독하시기 바랍니다.'
      }
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
