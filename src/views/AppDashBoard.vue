<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <!-- 대시보드 -->
      <dashboard-item></dashboard-item>
      <!-- 대시보드 -->
      <dashboard-item></dashboard-item>
      <!-- 대시보드 -->
      <dashboard-item></dashboard-item>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheHeader from '@/components/inc/header/TheHeader.vue';
import DashboardItem from '@/components/dashboard/DashboardItem.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';

export default {
  name: 'AppMain',
  components: {
    TheHeader,
    DashboardItem,
    TheFooter,
  }
}
</script>

<style scoped>
@import '@/assets/resource/theme/css/theme.layout.sub.css';
@import '@/assets/resource/theme/css/theme.page.sub.css';
</style>
