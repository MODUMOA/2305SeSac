<template>
  <div class="col-12 notice_list_wrap">
    <div class="col-12 mb20 notice_title">
      <img :src="this.$resource.commonRes.img('15x14_notice_icon.png')" alt="공지사항 아이콘" style="width: 15px;"/>
        <span>전체 공지사항</span>
    </div>
    <ul class="col-12 notice_list_con">
      <notice-list-item
              v-for="list in lists"
              :key="list.no"
              :list="list"
              v-bind="list"
            ></notice-list-item>
    </ul>
  </div>
</template>

<script>
import NoticeListItem from './ListItem.vue';


export default {
  name: 'NoticeList',
  components : {
    NoticeListItem,
  },
  data() {
    return {
      lists : [],
    }
  },
  created() {
    this.lists = [
      {
      no : 1,
      title : '승강기 정기 점검에 따른 일시 운행 중단 안내',
      registDateStr : '23.05.30',
      writerName : 'OO관리소',
    },
    {
      no : 2,
      title : '반려동물(애완견) 관련 주의사항 안내',
      registDateStr : '23.05.30',
      writerName : 'OO관리소',
    },
    {
      no : 3,
      title : '오피스텔 저층부 단수 안내문',
      registDateStr : '23.05.30',
      writerName : 'OO관리소',
    }
  ]
  }
}
</script>
