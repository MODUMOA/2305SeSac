<template>
  <div>
    로그아웃중입니다.
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const userStore = 'userStore';

export default {
  name: 'UserLogout',
  methods: {
    ...mapGetters(userStore, ['getUserIdx', 'getIsLogin']),
    ...mapActions(userStore, ['userLogout']),
    async logout() {
      const userIdx = this.getUserIdx();
      await this.userLogout(userIdx);
      if(!this.getIsLogin()){
        this.$router.push({ name: 'UserLogin' });
      }
    },
  },
  created() {
    this.logout();
  },
};
</script>
