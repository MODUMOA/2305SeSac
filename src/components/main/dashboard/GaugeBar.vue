<template>
  <div class="col-12 mb30">
    <div class="col-12 main_dashboard_contents_2_title">
        현재 <span class="point0">{{ userCurRank }}</span> 등급<br/>
        <span class="point0">{{ userNextRank }}</span>까지 {{100 - this.percent}}% 남았습니다
    </div>
    <div class="col-12 main_dashboard_gauge_bar_con">
       <div class="col-12 img_box">
        <img :src="this.$resource.themeRes.img('main_dashboard_lv1.png')" alt="새싹"/>
        <img :src="this.$resource.themeRes.img('main_dashboard_lv2.png')" alt="묘목"/>
       </div>
       <div class="col-12 main_dashboard_gauge_bar">
        <div class="col-12 main_dashboard_gauge_bar_bg"></div>
        <div class="col-12 main_dashboard_gauge_bar_progress" ref="mainDashboardProgress"></div>
        <div class="col-12 main_dashboard_gauge_bar_progress_num_con"><span class="point0" ref="mainDashboardProgressNum">{{this.percent}}</span></div>
       </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GaugeBar',
  props : {
    level : Number,
    percent : Number,
  },
  data() {
    return {
      userCurRank : null,
      userNextRank : null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.mainDashboardProgress.style.width = this.percent + '%';
      this.$refs.mainDashboardProgressNum.style.paddingLeft = this.percent + '%'; 
    }, 500);
    
  },
  created() {
    switch(this.level){
      case 0 :
        this.userCurRank = "정원";
        this.userNextRank = "과수원";
        break;
      case 1 :
        this.userCurRank = "과수원";
        this.userNextRank = "숲";
        break;
      case 2 :
        this.userCurRank = "숲";
        this.userNextRank = "산";
        break;
    }
  }
}
</script>
