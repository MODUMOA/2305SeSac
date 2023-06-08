<template>
  <div class="col-12 payment_list">
    <div class="col-12 payment_list_info_con">
      <span
        >{{ date }}. {{ weekday }}
        <!-- <span class="payment_status">
          <span class="bg_warning">미결제</span>
        </span> -->
        <div class="payment_status">
          <span v-if="status == 0" class="bg_warning">미결제</span>
          <span v-else-if="status == 1" class="wait">결제대기</span>
          <span v-else-if="status == 2" class="point0">결제완료</span>
        </div>
      </span>
      <span>총 {{ totalPrice }}원</span>
    </div>
    <ul class="col-12 payment_detail_list_con" ref="paymentDetailList">
      <payment-detail-item
        v-for="detail in details"
        :key="detail.order"
        :detail="detail"
        v-bind="detail"
      ></payment-detail-item>
    </ul>
    <div class="col-12 tr payment_list_btn_con">
      <a href="javascript:void(0)" @click="toggleDetail" ref="toggleDetailBtn">더보기</a>
    </div>
    <a
      v-if="status == 0"
      href="javascript:void(0)"
      class="col-0 open_payment_btn"
      @click="openPaymentPopup"
    >
      <span>결제하기</span>
    </a>
    <div v-if="openStatus" class="col-12 popup_style_1_wrap type_2" @click="close">
      <div class="col-12 popup_con">
        <div class="col-12 popup_inner">
          <div class="col-12 mb17 popup_title bg_point0">
            결제수단 선택
            <a href="javascript:void(0)" class="popup_close_btn" @click="close">닫기 버튼</a>
          </div>
          <ul class="col-12 tc payment_select_list">
            <li>
              <a href="javascript:void(0)" @click="userUpdateStatus(2)">
                <img src="" alt="" />
                <span>카드</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" @click="userUpdateStatus(1)">
                <img src="" alt="" />
                <span>무통장 입금</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateStatus } from "@/api/payment";

import PaymentDetailItem from "./PaymentDetailItem.vue";

export default {
  name: "PaymentListItem",
  components: {
    PaymentDetailItem,
  },
  data() {
    return {
      openStatus: false,
      toggleStatus: false,
    };
  },
  props: {
    paymentIdx: Number,
    date: String,
    weekday: String,
    status: Number,
    details: Array,
    totalPrice: Number,
  },
  methods: {
    toggleDetail() {
      //닫아야할 때
      if (this.toggleStatus) {
        this.$refs.paymentDetailList.style.height = "";
        this.$refs.toggleDetailBtn.innerText = "더보기";
        this.$refs.toggleDetailBtn.classList.remove("active");
        this.toggleStatus = false;
      } else {
        const count = this.$refs.paymentDetailList.childElementCount;
        this.$refs.paymentDetailList.style.height = 21 * count + "px";
        this.$refs.toggleDetailBtn.innerText = "올리기";
        this.$refs.toggleDetailBtn.classList.add("active");
        this.toggleStatus = true;
      }
    },
    openPaymentPopup() {
      this.openStatus = true;
    },
    async userUpdateStatus(flag) {
      const param = { paymentIdx: this.paymentIdx, status: flag };
      await updateStatus(
        param,
        ({ data }) => {
          if (data.message == "SUCCESS") {
            this.$emit("emitChangeStatus", param);
            this.close();
          } else {
            alert("결제에 실패했습니다. 잠시 후 다시 시도해주세요");
          }
        },
        (error) => {
          alert("서버 오류가 발생했습니다. 관리자에 문의해주세요");
          console.dir(error);
        }
      );
    },
    close() {
      this.openStatus = false;
    },
  },
};
</script>
