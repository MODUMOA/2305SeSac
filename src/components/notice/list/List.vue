<template>
  <div class="col-12 notice_list_wrap">
    <div class="col-12 mb20 notice_title">
      <img
        :src="this.$resource.commonRes.img('15x14_notice_icon.png')"
        alt="공지사항 아이콘"
        style="width: 15px"
      />
      <span>전체 공지사항</span>
    </div>
    <ul class="col-12 mb50 notice_list_con">
      <notice-list-item
        v-for="list in currentPageList"
        :key="list.no"
        :list="list"
        v-bind="list"
      ></notice-list-item>
    </ul>
    <ul class="col-12 pagination_style_0">
      <li class="paging_btn_single_page to_first" @click="moveToFirstGroup"></li>
      <li class="paging_btn_single_page to_prev" @click="moveToPrevGroup"></li>
      <li
        v-for="(pageNumber, index) in displayedPageNumbers"
        :key="index + '1'"
        :class="[page === pageNumber ? 'paging_btn_page selected' : 'paging_btn_page']"
      >
        <a href="javascript:void(0)" @click="moveToPage(pageNumber)">{{ pageNumber }}</a>
      </li>
      <li class="paging_btn_single_page to_next" @click="moveToNextGroup"></li>
      <li class="paging_btn_single_page to_last" @click="moveToLastGroup"></li>
    </ul>
  </div>
</template>

<script>
import NoticeListItem from "./ListItem.vue";

import { getNoticeList } from "@/api/notice";

export default {
  name: "NoticeList",
  components: {
    NoticeListItem,
  },
  data() {
    return {
      lists: [],
      page: 1,
      maxCnt: 0,
      perPage: 10,
    };
  },
  computed: {
    currentPageList() {
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      return this.lists.slice(start, end);
    },
    displayedPageNumbers() {
      let pageNumbers = [];
      const lastPage = Math.ceil(this.maxCnt / this.perPage);
      const startPage = Math.max(Math.floor((this.page - 1) / 5) * 5 + 1, 1);
      const endPage = Math.min(startPage + 4, lastPage);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    },
  },
  methods: {
    async getList() {
      await getNoticeList(
        ({ data }) => {
          this.lists = data.result.list;
          this.maxCnt = data.result.totalCnt;
        },
        ({ error }) => {
          console.dir(error);
        }
      );
    },
    moveToFirstGroup() {
      const firstPage = 1;
      this.page = firstPage;
      this.getList();
    },
    moveToPrevGroup() {
      const prevPage = Math.max(this.page - 5, 1);
      this.page = prevPage;
      this.getList();
    },
    moveToNextGroup() {
      const lastPage = Math.ceil(this.maxCnt / this.perPage);
      const nextPage = Math.min(this.page + 5, lastPage);
      this.page = nextPage;
      this.getList();
    },
    moveToLastGroup() {
      const lastPage = Math.ceil(this.maxCnt / this.perPage);
      const nextPage = Math.min(this.page + 5, lastPage);
      this.page = nextPage;
      this.getList();
    },
    moveToPage(pageNumber) {
      const lastPage = Math.ceil(this.maxCnt / this.perPage);
      if (pageNumber >= 1 && pageNumber <= lastPage) {
        this.page = pageNumber;
        this.getList();
      }
    },
  },

  created() {
    this.getList();
  },
};
</script>
