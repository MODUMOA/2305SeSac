<template>
  <div class="col-12 dashboard_wrap">
    <div class="col-12 dashboard_contents_1">
      <div class="col-12 tc dashboard_contents_1_title">{{ category }} 현황 추이</div>
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
                <span class="bar"><span ref="monday"></span></span>
                <span>월</span>
              </li>
              <li>
                <span class="bar"><span ref="tuesday"></span></span>
                <span>화</span>
              </li>
              <li>
                <span class="bar"><span ref="wednesday"></span></span>
                <span>수</span>
              </li>
              <li>
                <span class="bar"><span ref="thursday"></span></span>
                <span>목</span>
              </li>
              <li>
                <span class="bar"><span ref="friday"></span></span>
                <span>금</span>
              </li>
              <li>
                <span class="bar"><span ref="saturday"></span></span>
                <span>토</span>
              </li>
              <li class="today">
                <span class="bar"><span ref="sunday"></span></span>
                <span>일</span>
              </li>
            </ul>
            <div class="col-12 tc dashboard_contents_2_desc">
              이번주 평균 배출량은 <span class="fontweight500">{{ avg }}kg</span>, 총 배출량은 <span class="fontweight500">{{ total }}kg</span> 입니다.
            </div>
          </div>
        </div>
        <div class="col-6 dashboard_contents_2_inner">
          <div class="col-12 tc">
            <div class="col-12 mb7 dashboard_contents_2_title">
              전 주 대비 증감량
            </div>
            <div class="col-12 mb7 dashboard_contents_2_headline point1">
              -30%
            </div>
            <div class="col-12 dashboard_contents_2_desc">
              {{ prevPercent }}% 감소했습니다.
            </div>
          </div>
        </div>
        <div class="col-6 dashboard_contents_2_inner">
          <div class="col-12 tc">
            <div class="col-12 mb7 dashboard_contents_2_title">
              1인 평균 대비 증감량
            </div>
            <div class="col-12 mb7 dashboard_contents_2_headline warning">
              +30%
            </div>
            <div class="col-12 dashboard_contents_2_desc">
              {{ avgPercent }}% 많이 배출했습니다.
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
    category : String,
    weeks : Array,
    avg : Number,
    total : Number,
    prevPercent : Number,
    prevPercentStatus : Boolean,
    avgPercent : Number,
    avgPercentStatus : Boolean,
  }
}
</script>
