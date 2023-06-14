<template>
  <div class="col-12">
    <div class="col-12 qr_proceed_top_con">
      <div class="col-12 tc qr_proceed_top_title">
        <div v-if="QRCode == '1'">일반쓰레기 통</div>
        <div v-else-if="QRCode == '2'">음식물쓰레기 통</div>
        <div v-else-if="QRCode == '3'">분리수거 통</div>
      </div>
      <div class="col-12 tc qr_proceed_timer_con">
        <span class="timer point1">{{ proceedTimerVal }}</span
        >초 뒤에 통이 닫혀요
      </div>
      <div class="col-12 tc qr_btn_con">
        <a href="javascript:void(0)">시간 연장</a>
      </div>
    </div>
    <div v-if="QRCode == '1'" class="col-12 tc qr_proceed_middle_con">
      <div class="col-12 qr_img_container">
        <img
          :src="this.$resource.themeRes.img('normal_trash_info_img_000.png')"
          alt="일반 쓰레기 정보 이미지 000"
        />
      </div>
      <div class="col-12 qr_img_container">
        <img
          :src="this.$resource.themeRes.img('normal_trash_info_img_001.png')"
          alt="일반 쓰레기 정보 이미지 001"
        />
      </div>
    </div>
    <div v-else-if="QRCode === '2'" class="col-12 tc qr_proceed_middle_con">
      <div class="col-12 qr_img_container">
        <img
          :src="this.$resource.themeRes.img('food_trash_info_img_000.png')"
          alt="음식물 쓰레기 정보 이미지 000"
        />
      </div>
      <div class="col-12 qr_img_container">
        <img
          :src="this.$resource.themeRes.img('food_trash_info_img_001.png')"
          alt="음식물 쓰레기 정보 이미지 001"
        />
      </div>
    </div>
    <div v-else-if="QRCode === '3'" class="col-12 tc qr_proceed_middle_con">
      <div class="col-12 qr_img_container">
        <img
          :src="this.$resource.themeRes.img('plastic_trash_info_img_000.png')"
          alt="플라스틱 쓰레기 정보 이미지 000"
        />
      </div>
      <div class="col-12 qr_img_container">
        <img
          :src="this.$resource.themeRes.img('plastic_trash_info_img_001.png')"
          alt="플라스틱 쓰레기 정보 이미지 001"
        />
      </div>
    </div>
    <div class="col-12 qr_proceed_bottom_con">
      <div class="col-12 mb17 tc qr_btn_con">
        <a href="javascript:void(0)" @click="userCompleteQR">분리수거 끝내기</a>
      </div>
      <div class="col-12 tc qr_proceed_desc">
        쓰레기통을 닫지 않아 발생하는 책임은 사용자에게 있습니다.
      </div>
    </div>
  </div>
</template>

<script>
import { waitQR, completeQR } from "@/api/qr";

export default {
  name: "QRProceed",
  data() {
    return {
      QRCode: this.$route.params.QRCode,
      proceedTimerVal: 180,
    };
  },
  methods: {
    async userWaitQR() {
      await waitQR(
        this.QRCode,
        ({ data }) => {
          if (data.message == "SUCCESS") {
            this.proceedTimerVal = 180;
          }
        },
        (error) => {
          console.dir(error);
        }
      );
    },
    async userCompleteQR() {
      await completeQR(
        ({ data }) => {
          if (data == "SUCCESS") {
            this.$router.push({ name: "Main" }).then(() => window.location.reload());
          }
        },
        (error) => {
          console.dir(error);
        }
      );
    },
    proceedTimer() {
      setInterval(() => {
        this.proceedTimerVal--;
        if (this.proceedTimerVal == 0) {
          this.userCompleteQR();
        }
      }, 1000);
    },
  },
  created() {
    this.proceedTimer();
  },
};
</script>

<style scope>
body {
  background-color: #fff !important;
}
#app {
  background-color: #fff;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
