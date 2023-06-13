<template>
  <div class="col-12 pt17 pb20 pl20 pr20 white_container">
    <div class="col-12 mb17 font-size-15">ECO 뉴스</div>
    <div class="col-12 main_new_video_wrap">
        <swiper :options="swiperOption" class="col-12 main_new_video_con">
        <swiper-slide v-for="data in swiperData" class="col-12" :key="data.dataNo">
          <iframe width="100%" height="200" :src="data.link" title="data.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </swiper-slide>
      </swiper>
      <div class="col-12 mt10 tc main_pagination_con"></div>
      <div class="col-0 main_rolling_arrow prev"></div>
      <div class="col-0 main_rolling_arrow next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'MainDashBoard',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        pagination: {
          //페이징 사용자 설정
          el: '.main_pagination_con', //페이징 태그 클래스 설정
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.main_rolling_arrow.next', // 다음 버튼 클래스명
          prevEl: '.main_rolling_arrow.prev', // 이번 버튼 클래스명
        },
      },
      swiperData: [
        {
          dataNo : 1,
          link : 'https://www.youtube.com/embed/YHdJq7MpFXQ',
          title : '재활용 잘 하고 계신가요? 헷갈리는 분리배출 이 영상 하나로 끝!',
        },
        {
          dataNo : 2,
          link : 'https://www.youtube.com/watch?v=xHStKyZ-UrQ',
          title : '2023년부터 쓰레기 봉투에 "이것" 넣으면 과태료 내야합니다. 당장 빼셔야합니다!',
        },
        {
          dataNo : 3,
          link : 'https://www.youtube.com/watch?v=w4KMk5mA9jE',
          title : '다양하고 복잡한 플라스틱 분리수거! 한방에 정리!!',
        },
      ],
    };
  },
}
</script>
