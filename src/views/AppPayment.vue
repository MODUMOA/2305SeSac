<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 mb30 payment_list_wrap">
        <payment-list-item v-for="list in lists" :key="list.no" :list="list" v-bind="list"></payment-list-item>
      </div>
      <button class="col-12 tc btn_style_0 bg_green white type_2">더보기</button>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheHeader from '@/components/inc/header/TheHeader.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';
import PaymentListItem from '@/components/payment/PaymentListItem.vue';


export default {
  name: 'AppPayment',
  components : {TheHeader, TheFooter, PaymentListItem},
  data(){
    return {
      lists : [],
    }
  },
  created() {
    this.lists = [  
      {
        no : 1,
        registDateStr : '2023.05.25',
        weekDay : '목',
        details : [
          {
            order : 1,
            category : '일반쓰레기',
            weight : '285g',
            price : 113
          },
          {
            order : 2,
            category : '음식물쓰레기',
            weight : '134g',
            price : 200
          }
        ],
        total : 313
      },
      {
        no : 2,
        registDateStr : '2023.05.24',
        details : [
          {
            order : 1,
            category : '일반쓰레기',
            weight : '285g',
            price : 113
          },
          {
            order : 2,
            category : '음식물쓰레기',
            weight : '134g',
            price : 200
          },
          {
            order : 3,
            category : '플라스틱',
            weight : '90g',
            price : 113
          },
          {
            order : 4,
            category : '캔',
            weight : '22g',
            price : 200
          }
        ],
        total : 624
      },
      {
      no : 3,
      registDateStr : '2023.05.22',
      details : [
        {
          order : 1,
          category : '일반쓰레기',
          weight : '285g',
          price : 113
        },
        {
          order : 2,
          category : '음식물쓰레기',
          weight : '134g',
          price : 200
        }
      ],
      total : 313
    },
  ]
  }
}
</script>
