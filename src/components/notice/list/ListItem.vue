<template>
  <li>
    <div class="col-12 notice_list_info_con">
      <span>{{ writerName }}</span>
      <span>{{ date }}</span>
    </div>
    <div class="col-12 notice_list_title">
      <router-link :to="'/notice/view/' + noticeIdx">{{ noticeTitle }}</router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NoticeListItem',
  props: {
    noticeIdx: Number,
    noticeTitle: String,
    writerName: String,
    date: String,
  }
}
</script>
