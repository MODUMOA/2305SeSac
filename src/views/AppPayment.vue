<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 mb30 payment_list_wrap">
        <payment-list-item
          v-for="list in lists"
          :key="list.no"
          :list="list"
          v-bind="list"
          @emitChangeStatus="changeStatus"
        ></payment-list-item>
      </div>
      <button class="col-12 tc btn_style_0 bg_green white type_2" @click="loadMoreItems">
        더보기
      </button>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/inc/header/TheHeader.vue";
import TheFooter from "@/components/inc/footer/TheFooter.vue";
import PaymentListItem from "@/components/payment/PaymentListItem.vue";
import { getList } from "@/api/payment";

const userStore = "userStore";

export default {
  name: "AppPayment",
  components: { TheHeader, TheFooter, PaymentListItem },
  data() {
    return {
      lists: [],
      page: 1,
    };
  },
  methods: {
    ...mapGetters(userStore, ["getUserIdx"]),
    async userGetList(userIdx) {
      await getList(
        userIdx,
        this.page++,
        ({ data }) => {
          this.lists = [...this.lists, ...data.result];
        },
        (error) => {
          console.dir(error);
        }
      );
    },
    async loadMoreItems() {
      const userIdx = this.getUserIdx();
      await this.userGetList(userIdx);
    },
    changeStatus(param) {
      console.dir(param);
      if (this.lists.length > 0) {
        this.lists.map((item) => {
          if (item.paymentIdx == param.paymentIdx) {
            item.status = param.status;
          }
        });
      }
    },
  },
  created() {
    const userIdx = this.getUserIdx();
    this.userGetList(userIdx);
  },
};
</script>
