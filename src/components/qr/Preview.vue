<template>
  <div class="col-12 tc pl20 pr20 pl-md-30 pl-md-30 qr_preview_wrap">
    <div v-if="showCamera" class="col-12">
      <p class="error">{{ error }}</p>
      <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
    <div v-else class="col-12 qr_bg_con">
      <img :src="this.$resource.themeRes.img('qr_img.png')" alt="QR 이미지" />
    </div>

    <div class="col-12 mt37 mb14 qr_title">주의사항</div>
    <div class="col-12 mb17 qr_desc">
      <span class="fontweight500">일반쓰레기, 음식물쓰레기</span>의 경우 QR 버튼을 꼭 눌러주세요.
      <br /><br />
      QR 인식을 하지 않고 쓰레기를 배출 시<br />
      불이익이 생길 수 있습니다.
      <br /><br />
      수거함은 QR인식 후 <span class="fontweight500">3분</span>이 지나면 잠깁니다.
    </div>
    <div class="col-12 mb27 tc qr_btn_con">
      <a href="javascript:void(0)" @click="scanQR()">QR 인식하기</a>
    </div>
    <div class="col-12 mb17 qr_desc">
      QR 인식이 <span class="warning fontweight500">안될</span> 경우<br />
      아래 버튼으로 QR 아래에 나와있는 코드를 입력해주세요.
    </div>
    <div class="col-12 tc qr_btn_con">
      <a href="javascript:void(0)" @click="inputCode()">코드 입력</a>
    </div>
    <div v-if="openStatus" class="col-12 popup_style_1_wrap" @click="close">
      <div class="col-12 popup_con">
        <div class="col-12 popup_inner" @click="stopPropagation">
          <div class="col-12 mb17 tc popup_title">코드 입력</div>
          <div class="col-12 mb27 pl20 pr20">
            <input type="text" class="input_style_0" v-model="textCode" />
          </div>
          <div class="col-12 tc popup_style_1_btn_con">
            <div class="col-12 bg_point0 popup_style_1_btn" @click="inputQR()">확인</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { submitQR } from "@/api/qr";
import { QrcodeStream } from "vue-qrcode-reader";

const userStore = "userStore";

export default {
  components: { QrcodeStream },
  name: "QRPreview",
  data() {
    return {
      showCamera: false,
      openStatus: false,
      QRCode: null,
      error: "",
      textCode: null,
    };
  },
  watch: {
    QRCode() {
      this.submitQR(this.QRCode);
    },
  },
  methods: {
    ...mapGetters(userStore, ["getUserIdx"]),
    close() {
      this.openStatus = false;
    },
    scanQR() {
      console.log("카메라 인식 시작");
      this.showCamera = !this.showCamera;
    },
    inputCode() {
      this.openStatus = true;
    },
    inputQR() {
      if (this.textCode == null || this.textCode == "") {
        alert("코드입력을 해주시기 바랍니다");
        return;
      }
      this.submitQR(this.textCode);
    },
    async submitQR(code) {
      console.log("QR 인식");

      // 23.06.06 Type 강제 convert 추가 ...
      if (code == "http://m.site.naver.com/19JU3") {
        code = 1;
      } else if (code == "http://m.site.naver.com/19JVo") {
        code = 2;
      } else if (code == "http://m.site.naver.com/19JW0") {
        code = 3;
      }

      const param = { userInfo: this.getUserIdx(), type: code };
      console.log(param);

      await submitQR(
        param,
        ({ data }) => {
          console.log(data);
          //성공한 경우
          if (data == "SUCCESS") {
            this.$router.push({ name: "QRProceed", params: { QRCode: code } });
          } else {``
            alert("유효하지 않은 QR코드입니다. 다시 한번 확인해주세요.");
          }
        },
        (error) => {
          console.dir(error);
        }
      );
    },
    onDecode(result) {
      this.QRCode = result;
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        this.error = `ERROR: Camera error (${error.name})`;
      }
    },
    stopPropagation(event) {
      event.stopPropagation(); // 이벤트 전파 중단
    },
  },
};
</script>

<style scope>
#app {
  background-color: #a7cec3;
}
</style>
