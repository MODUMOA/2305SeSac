<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<style>
@import '@/assets/resource/theme/css/theme.common.css';
</style>

<script>
import TheHeader from './components/inc/header/TheHeader.vue';
import TheFooter from './components/inc/footer/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
