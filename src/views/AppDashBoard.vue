<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <!-- 대시보드 -->
      <dashboard-item :trashInfo="normalTrash"></dashboard-item>
      <!-- 대시보드 -->
      <dashboard-item :trashInfo="foodTrash"></dashboard-item>
      <!-- 대시보드 -->
      <dashboard-item :trashInfo="plasticTrash"></dashboard-item>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import { getTrash } from '@/api/trash';
import {mapGetters} from 'vuex';
import TheHeader from '@/components/inc/header/TheHeader.vue';
import DashboardItem from '@/components/dashboard/DashboardItem.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';

const userStore = 'userStore';

export default {
  name: 'AppDashBoard',
  data() {
    return {
      normalTrash : {
        weeks : [0,0,0,0,0,0,0]
      },
      foodTrash : {
        weeks : [0,0,0,0,0,0,0]
      },
      plasticTrash : {
        weeks : [0,0,0,0,0,0,0]
      },      
    }
  },
  components: {
    TheHeader,
    DashboardItem,
    TheFooter,
  },
  methods : {
    ...mapGetters(userStore, ['getUserIdx']),
    async getNormalTrashInfo(){
      const param = {userIdx : this.getUserIdx(), trashIdx : 1};
      await getTrash(
        param,
        ({data}) => {
          this.normalTrash = data.result;
        },
        (error) => {
          console.dir(error);
        }
      )
    },
    async getFoodTrashInfo(){
      const param = {userIdx : this.getUserIdx(), trashIdx : 2};
      await getTrash(
        param,
        ({data}) => {
          this.foodTrash = data.result;
        },
        (error) => {
          console.dir(error);
        }
      )
    },async getPlasticTrashInfo(){
      const param = {userIdx : this.getUserIdx(), trashIdx : 3};
      await getTrash(
        param,
        ({data}) => {
          this.plasticTrash = data.result;
        },
        (error) => {
          console.dir(error);
        }
      )
    }
  },
  created() {
    this.getNormalTrashInfo();
    this.getFoodTrashInfo();
    this.getPlasticTrashInfo();
  }
}

</script>

<style scoped>
@import '@/assets/resource/theme/css/theme.layout.sub.css';
@import '@/assets/resource/theme/css/theme.page.sub.css';
</style>
