<template>
  <nav class="col-12">
    <ul class="col-12 gnb_con">
      <li>
        <router-link :to="{ name: 'Route' }"></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheHeaderGnb',
};
</script>
