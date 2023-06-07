<template>
  <div class="col-12 mb25 main_dashboard_wrap">
    <div class="col-12 main_dashboard_contents_1">
      <div class="col-12 main_dashboard_contents_1_title">
        {{userName}}님의<br/>
        이번주 탄소배출량은 {{dashboardInfo.weeklyEmission}}g 입니다
      </div>
    </div>
    <div class="col-12 main_dashboard_contents_2">
      <Gauge-bar :info="dashboardInfo" v-bind="dashboardInfo"></Gauge-bar>
      <Badge-list></Badge-list>
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/api/user';
import {mapGetters} from 'vuex';
import GaugeBar from './GaugeBar.vue';
import BadgeList from './BadgeList.vue';

const userStore = 'userStore';

export default {
  name: 'MainDashBoard',
  components : {GaugeBar,BadgeList},
  data() {
    return {
      userName : null,
      dashboardInfo : {},
    }
  },
  methods : {
    ...mapGetters(userStore, ['getUserIdx', 'getUserName']),
    async getDashboardInfo(userIdx){
      await getInfo(
        userIdx,
        ({data}) => {
          this.dashboardInfo = data.result;
        },
        (error) => {
          console.dir(error);
        }
      )
    },
  },
  created() {
    const userIdx = this.getUserIdx();
    this.getDashboardInfo(userIdx);

    this.userName = this.getUserName();
  }
}
</script>
