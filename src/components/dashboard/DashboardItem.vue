<template>
  <div class="col-12 dashboard_wrap">
    <div class="col-12 dashboard_contents_1">
      <div class="col-12 tc dashboard_contents_1_title">{{ trashInfo.category }} 현황 추이</div>
    </div>
    <div class="col-12 dashboard_contents_2_con">
      <div class="col-12 dashboard_contents_2">
        <div class="col-12 dashboard_contents_2_inner">
          <div class="col-12">
            <div class="col-12 mb12 dashboard_contents_2_title">
              일주일 배출량
            </div>
            <ul class="col-12 mb15 dashboard_chart">
              <li>
                <span class="bar"><span ref="monDay"></span></span>
                <span>월</span>
              </li>
              <li>
                <span class="bar"><span ref="tuesDay"></span></span>
                <span>화</span>
              </li>
              <li>
                <span class="bar"><span ref="wednesDay"></span></span>
                <span>수</span>
              </li>
              <li>
                <span class="bar"><span ref="thursDay"></span></span>
                <span>목</span>
              </li>
              <li>
                <span class="bar"><span ref="friDay"></span></span>
                <span>금</span>
              </li>
              <li>
                <span class="bar"><span ref="saturDay"></span></span>
                <span>토</span>
              </li>
              <li>
                <span class="bar"><span ref="sunDay"></span></span>
                <span>일</span>
              </li>
            </ul>
            <div class="col-12 tc dashboard_contents_2_desc">
              이번주 평균 배출량은 <span class="fontweight500">{{ trashInfo.avg }}kg</span>, 총 배출량은 <span class="fontweight500">{{ trashInfo.total }}kg</span> 입니다.
            </div>
          </div>
        </div>
        <div class="col-6 dashboard_contents_2_inner">
          <div class="col-12 tc">
            <div class="col-12 mb7 dashboard_contents_2_title">
              전 주 대비 증감량
            </div>
            <div :class="[trashInfo.prevPercentStatus ? 'col-12 mb7 dashboard_contents_2_headline point1' : 'col-12 mb7 dashboard_contents_2_headline warning']">
              {{ trashInfo.prevPercent }}%
            </div>
            <div v-if="trashInfo.prevPercentStatus" class="col-12 dashboard_contents_2_desc">
              {{ trashInfo.prevPercent }}% 감소했습니다.
            </div>
            <div v-else class="col-12 dashboard_contents_2_desc">
              {{ trashInfo.prevPercent }}% 증가했습니다.
            </div>
          </div>
        </div>
        <div class="col-6 dashboard_contents_2_inner">
          <div class="col-12 tc">
            <div class="col-12 mb7 dashboard_contents_2_title">
              1인 평균 대비 증감량
            </div>
            <div :class="[trashInfo.avgPercentStatus ? 'col-12 mb7 dashboard_contents_2_headline point1' : 'col-12 mb7 dashboard_contents_2_headline warning']">
              {{ trashInfo.avgPercent }}%
            </div>
            <div v-if="trashInfo.avgPercentStatus" class="col-12 dashboard_contents_2_desc">
              {{ trashInfo.avgPercent }}% 감소했습니다.
            </div>
            <div v-else class="col-12 dashboard_contents_2_desc">
              {{ trashInfo.avgPercent }}% 증가했습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashboardItem',
  props: {
    trashInfo : Object,
  },
  watch : {
    trashInfo() {
      setTimeout(() => {
      this.$refs.monDay.style.height = this.trashInfo.weeks[0] + '%';
      this.$refs.tuesDay.style.height = this.trashInfo.weeks[1] + '%';
      this.$refs.wednesDay.style.height = this.trashInfo.weeks[2] + '%';
      this.$refs.thursDay.style.height = this.trashInfo.weeks[3] + '%';
      this.$refs.friDay.style.height = this.trashInfo.weeks[4] + '%';
      this.$refs.saturDay.style.height = this.trashInfo.weeks[5] + '%';
      this.$refs.sunDay.style.height = this.trashInfo.weeks[6] + '%';
    }, 500);
    }
  },
  mounted() {
    console.dir(this.$refs.monDay);

    const today = new Date().getDay();
    switch(today){
      case 0 :
      this.$refs.monDay.parentElement.parentElement.classList.add('today');
        break;
      case 1 :
      this.$refs.tuesDay.parentElement.parentElement.classList.add('today');
        break;
      case 2 :
      this.$refs.wednesDay.parentElement.parentElement.classList.add('today');
        break;
      case 3 :
      this.$refs.tuesDay.parentElement.parentElement.classList.add('today');
        break;
      case 4 :
      this.$refs.friDay.parentElement.parentElement.classList.add('today');
        break;
      case 5 :
      this.$refs.saturDay.parentElement.parentElement.classList.add('today');
        break;
      case 6 :
      this.$refs.sunDay.parentElement.parentElement.classList.add('today');
        break;
    }
  }
}
</script>
