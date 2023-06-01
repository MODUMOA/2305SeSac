<template>
  <div class="col-12 payment_list">
    <div class="col-12 payment_list_info_con">
      <span>{{ registDateStr }}. {{ weekDay }}</span><span>총 {{ total }}원</span>
    </div>
    <ul class="col-12 payment_detail_list_con" ref="paymentDetailList">
      <payment-detail-item v-for="detail in details" :key="detail.order" :detail="detail" v-bind="detail"></payment-detail-item>
    </ul>
    <div class="col-12 tr payment_list_btn_con">
      <a href="javascript:void(0)" @click="toggleDetail" ref="toggleDetailBtn">더보기</a>
    </div>
  </div>
</template>

<script>
import PaymentDetailItem from './PaymentDetailItem.vue';

export default {
  name: 'PaymentListItem',
  components : {
    PaymentDetailItem
  },
  data() {
    return {
      toggleStatus : false,
    }
  },
  props: {
    no: Number,
    registDateStr: String,
    weekDay: String,
    details: Array,
    total : Number,
  },
  methods : {
    toggleDetail() {
      //닫아야할 때
      if(this.toggleStatus){
        this.$refs.paymentDetailList.style.height = '';  
        this.$refs.toggleDetailBtn.innerText = '더보기';
        this.$refs.toggleDetailBtn.classList.remove('active');
        this.toggleStatus = false;
      } else {
        const count = this.$refs.paymentDetailList.childElementCount;
        this.$refs.paymentDetailList.style.height = (21 * count) + 'px';  
        this.$refs.toggleDetailBtn.innerText = '올리기';
        this.$refs.toggleDetailBtn.classList.add('active');
        this.toggleStatus = true;
      }
    }
  },
}
</script>
