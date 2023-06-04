<template>
  <footer class="col-12 footer_wrap">
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30 footer_inner">
      <ul class="col-12 footer_list">
        <li class="home">
          <router-link :to="{name : 'Main'}"><span>메인</span></router-link>
        </li>
        <li class="qr">
          <router-link :to="{name : 'QR'}"><span>QR</span></router-link>
        </li>
        <li class="leaf">
          <router-link :to="{name : 'DashBoard'}"><span>배출현황</span></router-link>
        </li>
        <li class="card">
          <router-link :to="{name : 'Payment'}"><span>결제이력</span></router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scope>
@import '@/assets/resource/theme/css/theme.resource.footer.css';
</style>
