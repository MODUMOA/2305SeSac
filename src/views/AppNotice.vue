<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheHeader from '@/components/inc/header/TheHeader.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';

export default {
  name: 'AppNotice',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style scope>
@import '@/assets/resource/theme/css/theme.layout.sub.css';
@import '@/assets/resource/theme/css/theme.page.sub.css';
</style>
