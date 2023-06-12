<template>
  <div class="col-12 mb30">
    <div class="col-12 main_dashboard_contents_2_title">
        현재 <span class="point0">{{ userCurRank }}</span> 등급<br/>
        <span class="point0">{{ userNextRank }}</span>까지 {{100 - this.exp}}% 남았습니다
        <a href="javascript:void(0)" class="speech_bubble_link" @touchstart.prevent.stop="openSpeechBubble">!</a>
        <div class="speech_bubble" style="display : none" ref="speechBubble">
          <div class="col-12 speech_bubble_inner">
            나무 : 1 그루<br/>
          정원 : 2 ~ 5 그루<br/>
          과수원 : 6 ~ 30 그루<br/>
          숲 : 31 ~ 100 그루
          </div>
        </div>
    </div>
    <div class="col-12 main_dashboard_gauge_bar_con">
       <div class="col-12 img_box">
        <img :src="this.$resource.themeRes.img('main_dashboard_lv1.png')" alt="새싹"/>
        <img :src="this.$resource.themeRes.img('main_dashboard_lv2.png')" alt="묘목"/>
       </div>
       <div class="col-12 main_dashboard_gauge_bar">
        <div class="col-12 main_dashboard_gauge_bar_bg"></div>
        <div class="col-12 main_dashboard_gauge_bar_progress" ref="mainDashboardProgress"></div>
        <div class="col-12 main_dashboard_gauge_bar_progress_num_con"><span class="point0" ref="mainDashboardProgressNum">{{this.exp}}</span></div>
       </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GaugeBar',
  props : {
    level : Number,
    exp : Number,
  },
  data() {
    return {
      userCurRank : null,
      userNextRank : null,
    }
  },
  methods : {
    openSpeechBubble(){
      this.$refs.speechBubble.style.display = '';
    },
    calcLevel(){
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
  },
  watch : {
    level() {
      this.calcLevel();  
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.mainDashboardProgress.style.width = this.exp + '%';
      this.$refs.mainDashboardProgressNum.style.paddingLeft = this.exp + '%'; 
    }, 500);
    const speechBubble = document.querySelector(".speech_bubble");
    document.addEventListener('touchstart', function(){
      speechBubble.style.display = 'none';
    });
  },
  created() {
    this.calcLevel();
  }
}
</script>
