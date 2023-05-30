<template>
  <div class="col-12 main_notice_con">
    <div class="col-12 main_notice_title_con">
      <div class="col-12 main_notice_title">
        <img :src="this.$resource.commonRes.img('15x14_notice_icon.png')" alt="공지사항 아이콘" style="width: 15px;"/>
        <span>최근 공지사항</span>
      </div>
      <router-link :to="{name : 'notice'}"><span>더보기 ></span></router-link>
    </div>
    <ul class="col-12 main_notice_list_con">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainNoticeList',
}
</script>