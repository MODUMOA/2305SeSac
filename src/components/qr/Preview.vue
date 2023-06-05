<template>
  <div class="col-12 tc pl20 pr20 pl-md-30 pl-md-30 qr_preview_wrap">
    <div class="col-12 qr_bg_con">
      <img :src="this.$resource.themeRes.img('qr_img.png')" alt="QR 이미지"/>
    </div>
    <div class="col-12 mt37 mb14 qr_title">주의사항</div>
    <div class="col-12 mb17 qr_desc">
      <span class="fontweight500">일반쓰레기, 음식물쓰레기</span>의 경우 QR 버튼을 꼭 눌러주세요.
      <br/><br/>
      QR 인식을 하지 않고 쓰레기를 배출 시<br/>
      불이익이 생길 수 있습니다.
      <br/><br/>
      수거함은 QR인식 후 <span class="fontweight500">3분</span>이 지나면 잠깁니다.
    </div>
    <div class="col-12 mb27 tc qr_btn_con">
      <a href="javascript:void(0)" @click="scanQR()">QR 인식하기</a>
    </div>
    <div class="col-12 mb17 qr_desc">
      QR 인식이 <span class="warning fontweight500">안될</span> 경우<br/>
      아래 버튼으로 QR 아래에 나와있는 코드를 입력해주세요.
    </div>
    <div class="col-12 tc qr_btn_con">
      <a href="javascript:void(0)">코드 입력</a>
    </div>
    <div v-if="openStatus" class="col-12 popup_style_1_wrap" @click="close">
      <div class="col-12 popup_con">
        <div class="col-12 popup_inner">
          <div class="col-12 mb17 tc popup_title">코드 입력</div>
          <div class="col-12 mb27 pl20 pr20">
            <input type="text" class="input_style_0" v-bind="QRCode"/>
          </div>
          <div class="col-12 tc popup_style_1_btn_con">
            <div class="col-12 bg_point0 popup_style_1_btn" @click="inputQR">확인</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { submitQR } from '@/api/qr';

const userStore = 'userStore';

export default {
  name: 'QRPreview',
  data() {
    return {
      openStatus : false,
      QRCode : null,
    }
  },
  methods : {
    ...mapGetters(userStore, ['getUserIdx']),
    close() {
      this.openStatus = false;
    },
    scanQR(){
      console.log("카메라 인식 시작");
    },
    inputQR() {
      if(this.QRCode == null || this.QRCode == ''){
        alert("코드입력을 해주시기 바랍니다");
        return;
      }
      this.submitQR();
    },
    async submitQR(){
      console.log("QR 인식")
      console.log(this.QRCode);

      const param = {qrCode : this.QRCode, userIdx : this.getUserIdx()};

      await submitQR(
        param,
        ({data}) => {
          //성공한 경우
          if(data.message == "SUCCESS"){
            this.$router.push({name : 'QRProceed', params : {QRCode : this.QRCode}});
          } else {
            alert('유효하지 않은 QR코드입니다. 다시 한번 확인해주세요.');
          }
        },
        (error) => {
          console.dir(error);
        }
      )
    }
  }
}
</script>

<style scope>
#app{background-color: #A7CEC3;}
</style>
