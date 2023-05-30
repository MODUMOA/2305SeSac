<template>
  <footer class="col-12 footer_wrap">
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30 footer_inner">
      <ul class="col-12 footer_list">
        <li>
          <router-link :to="{name : 'Main'}"><img :src="this.$resource.themeRes.img('footer_home_icon.png')" alt="홈 아이콘" style="width: 18px;"/><span>메인</span></router-link>
        </li>
        <li>
          <a href="javascript:void(0);"><img :src="this.$resource.themeRes.img('footer_qr_icon.png')" alt="QR 아이콘" style="width: 20px;"/><span>QR</span></a>
        </li>
        <li>
          <router-link :to="{name : 'DashBoard'}"><img :src="this.$resource.themeRes.img('footer_leaf_icon.png')" alt="나뭇잎 아이콘" style="width: 20px;"/><span>배출현황</span></router-link>
        </li>
        <li>
          <router-link :to="{name : 'Main'}"><img :src="this.$resource.themeRes.img('footer_card_icon.png')" alt="카드 아이콘" style="width: 20px;"/><span>결제이력</span></router-link>
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
