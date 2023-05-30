<template>
  <li>
    <div class="col-12 notice_list_info_con">
      <span>{{ writerName }}</span>
      <span>{{ registDateStr }}</span>
    </div>
    <div class="col-12 notice_list_title">
      <router-link :to="'/notice/view/' + no">{{ title }}</router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NoticeListItem',
  props: {
    no: Number,
    title: String,
    writerName: String,
    registDateStr: String,
  }
}
</script>
