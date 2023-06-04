<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 mb30 payment_list_wrap">
        <payment-list-item v-for="list in lists" :key="list.no" :list="list" v-bind="list" @emitChangeStatus="changeStatus"></payment-list-item>
      </div>
      <button class="col-12 tc btn_style_0 bg_green white type_2">더보기</button>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import {mapGetters} from 'vuex';
import TheHeader from '@/components/inc/header/TheHeader.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';
import PaymentListItem from '@/components/payment/PaymentListItem.vue';
import {getList} from '@/api/payment';

const userStore = 'userStore';

export default {
  name: 'AppPayment',
  components : {TheHeader, TheFooter, PaymentListItem},
  data(){
    return {
      lists : [],
    }
  },
  methods : {
   ...mapGetters(userStore, ['getUserIdx']), 
   async userGetList(userIdx){
    await getList(
      userIdx,
      ({ data }) => {
        this.lists = data.list;
      },
      (error) => {
        console.dir(error);
      }
    )
   },
   changeStatus(param){
    console.dir(param);
    if(this.lists.length > 0) {
        this.lists.map((item) => {
          if (item.paymentIdx == param.paymentIdx) {
            item.status = param.status;
          }
        });
      }
   }
  },
  created() {
    // const userIdx = this.getUserIdx();
    // this.userGetList(userIdx);
    this.lists = [  
      {
        paymentIdx : 1,
        registDateStr : '2023.05.25',
        status : 0,
        weekDay : '목',
        details : [
          {
            paymentDetailIdx : 1,
            category : '일반쓰레기',
            trashWeight : 285,
            price : 113
          },
          {
            paymentDetailIdx : 2,
            category : '음식물쓰레기',
            trashWeight : 134,
            price : 200
          }
        ],
        totalPrice : 313
      },
      {
        paymentIdx : 2,
        registDateStr : '2023.05.24',
        weekDay : '목',
        status : 1,
        details : [
          {
            paymentDetailIdx : 1,
            category : '일반쓰레기',
            trashWeight : 285,
            price : 113
          },
          {
            paymentDetailIdx : 2,
            category : '음식물쓰레기',
            trashWeight : 134,
            price : 200
          },
          {
            paymentDetailIdx : 3,
            category : '플라스틱',
            trashWeight : 90,
            price : 113
          },
          {
            paymentDetailIdx : 4,
            category : '캔',
            trashWeight : 22,
            price : 200
          }
        ],
        totalPrice : 624
      },
      {
      paymentIdx : 3,
      registDateStr : '2023.05.22',
      weekDay : '화',
      status : 2,
      details : [
        {
          paymentDetailIdx : 1,
          category : '일반쓰레기',
          trashWeight : 285,
          price : 113
        },
        {
          paymentDetailIdx : 2,
          category : '음식물쓰레기',
          trashWeight : 134,
          price : 200
        }
      ],
      totalPrice : 313
    },
  ] 
  }
}
</script>
