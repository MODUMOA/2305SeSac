<template>
  <div class="col-12 main_badge_list_con">
    <div class="col-12 mb20 main_badge_list_title_con"><span>이번주의 나무</span><router-link :to="{name: 'home'}" class="btn_style_0 bg_green white">더보기 ></router-link></div>
    <ul class="col-12 main_badge_list">
      <li>
        <img :src="this.$resource.themeRes.img('sonamu_icon_active.png')" alt="소나무"/>
        <span>소나무</span>
      </li>
      <li>
        <img :src="this.$resource.themeRes.img('sangsuri_icon_active.png')" alt="상수리나무"/>
        <span>상수리나무</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainDashBoardBadgeList',
}
</script>
