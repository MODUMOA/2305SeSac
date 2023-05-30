<template>
  <main class="col-12">
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <!-- 스와이퍼 -->
      <main-swiper></main-swiper>
      <!-- 대시보드 -->
      <main-dash-board></main-dash-board>
      <!-- 공지사항 -->
      <main-notice-list></main-notice-list>
    </div>    
  </main>
</template>

<script>
import MainSwiper from '@/components/main/Swiper.vue';
import MainDashBoard from '@/components/main/Swiper.vue';
import MainNoticeList from '@/components/main/notice/NoticeList.vue';

export default {
  name: 'AppMain',
  components: {
    MainSwiper,
    MainDashBoard,
    MainNoticeList
  }
}
</script>

<style scope>
@import '@/assets/resource/theme/css/theme.layout.main.css';
@import '@/assets/resource/theme/css/theme.page.main.css';
</style>
