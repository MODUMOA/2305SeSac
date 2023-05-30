<template>
  <main class="col-12">
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <router-view></router-view>
    </div>    
  </main>
</template>

<script>

export default {
  name: 'AppNotice',
}
</script>

<style scope>
@import '@/assets/resource/theme/css/theme.layout.sub.css';
@import '@/assets/resource/theme/css/theme.page.sub.css';
</style>
