<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <!-- 대시보드 -->
      <main-dash-board></main-dash-board>
      <!-- eco 뉴스 -->
      <main-eco-news></main-eco-news>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheHeader from '@/components/inc/header/TheHeader.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';
import MainDashBoard from '@/components/main/dashboard/DashBoard.vue';
import MainEcoNews from '@/components/main/EcoNews.vue';

export default {
  name: 'AppMain',
  components: {
    TheHeader,
    MainDashBoard,
    MainEcoNews,
    TheFooter,
  }
}
</script>

<style scope>
@import '@/assets/resource/theme/css/theme.layout.main.css';
@import '@/assets/resource/theme/css/theme.page.main.css';
</style>
