<template>
  <div class="col-12 notice_list_wrap">
    <div class="col-12 mb20 notice_title">
      <img :src="this.$resource.commonRes.img('15x14_notice_icon.png')" alt="공지사항 아이콘" style="width: 15px;"/>
        <span>전체 공지사항</span>
    </div>
    <ul class="col-12 mb50 notice_list_con">
      <notice-list-item
              v-for="list in lists"
              :key="list.no"
              :list="list"
              v-bind="list"
            ></notice-list-item>
    </ul>
    <ul class="col-12 pagination_style_0">
      <li class="paging_btn_single_page to_first"></li>
      <li class="paging_btn_single_page to_prev"></li>

        <li class="paging_btn_page selected">
          <a href="javascript:void(0)">1</a>
        </li>
        <li class="paging_btn_page">
          <a href="javascript:void(0)">2</a>
        </li>
        <li class="paging_btn_page">
          <a href="javascript:void(0)">3</a>
        </li>
        <li class="paging_btn_page">
          <a href="javascript:void(0)">4</a>
        </li>
        <li class="paging_btn_page">
          <a href="javascript:void(0)">5</a>
        </li>
        <li class="paging_btn_single_page to_next"></li>
        <li class="paging_btn_single_page to_last"></li>
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
