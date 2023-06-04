<template>
  <nav class="col-12">
    <ul class="col-12 gnb_con">
      <li class="home">
        <router-link :to="{ name: 'Main' }">홈</router-link>
      </li>
      <li class="qr">
        <router-link :to="{ name: 'QR' }">QR</router-link>
      </li>
      <li class="notice">
        <router-link :to="{ name: 'Notice' }">공지사항</router-link>
      </li>
      <li class="mypage">
        <router-link :to="{ name: 'UserUpdate' }">마이페이지</router-link>
      </li>
      <li class="tree">
        <router-link :to="{ name: 'Tree' }">나무도감</router-link>
      </li>
      <li class="leaf">
        <router-link :to="{ name: 'DashBoard' }">실천현황</router-link>
      </li>
      <li class="card">
        <router-link :to="{ name: 'Payment' }">결제이력</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheHeaderGnb',
};
</script>
