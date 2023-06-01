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

import { getNoticeList } from '@/api/notice';

export default {
  name: 'NoticeList',
  components : {
    NoticeListItem,
  },
  data() {
    return {
      lists : [],
      page : 1,
      maxCnt : 0,
      perPage : 10,
    }
  },
  methods : {
    async getList() {
      await getNoticeList(
        this.page,
        ({ data }) => {
          this.lists = data;
        },
        ({ error }) => {
          console.dir(error);
        }
      );
    },
  },

  created() {
    this.getList();
  }
}
</script>
