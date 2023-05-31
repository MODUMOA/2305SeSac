<template>
  <div class="col-12 mb30">
    <div class="col-12 main_dashboard_contents_2_title">
        현재 <span class="point0">새싹</span> 등급<br/>
        <span class="point0">묘목</span>까지 15 점 남았습니다
    </div>
    <div class="col-12 main_dashboard_gauge_bar_con">
       <div class="col-12 img_box">
        <img :src="this.$resource.themeRes.img('main_dashboard_lv1.png')" alt="새싹"/>
        <img :src="this.$resource.themeRes.img('main_dashboard_lv2.png')" alt="묘목"/>
       </div>
       <div class="col-12 main_dashboard_gauge_bar">
        <div class="col-12 main_dashboard_gauge_bar_bg"></div>
        <div class="col-12 main_dashboard_gauge_bar_progress" ref="mainDashboardProgress"></div>
        <div class="col-12 main_dashboard_gauge_bar_progress_num_con"><span class="point0" ref="mainDashboardProgressNum">85</span></div>
       </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GaugeBar',
  mounted() {
    setTimeout(() => {
      this.$refs.mainDashboardProgress.style.width = '85%';
      this.$refs.mainDashboardProgressNum.style.paddingLeft = '85%'; 
    }, 500);
    
  },
}
</script>
