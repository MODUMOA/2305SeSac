<template>
  <div class="col-12 mb25 main_dashboard_wrap">
    <div class="col-12 main_dashboard_contents_1">
      <div class="col-12 main_dashboard_contents_1_title">
        지영님의<br/>
        이번주 탄소배출량은 5kg 입니다
      </div>
    </div>
    <div class="col-12 main_dashboard_contents_2">
      <Gauge-bar></Gauge-bar>
      <Badge-list></Badge-list>
    </div>
  </div>
</template>

<script>
import GaugeBar from './GaugeBar.vue';
import BadgeList from './BadgeList.vue';

export default {
  name: 'MainDashBoard',
  components : {GaugeBar,BadgeList}
}
</script>
