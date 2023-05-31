<template>
  <div v-if="openStatus" class="col-12 popup_style_1_wrap">
    <div class="col-12 popup_con">
      <div class="col-12 popup_inner">
        <div class="col-12 mb27 tc popup_title" v-html="msg"></div>
        <div class="col-12 tc popup_style_1_btn_con">
          <div class="col-12 bg_point0 popup_style_1_btn" @click="close">확인</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertPopup',
  props: {
    alertMsg: String,
    popupStatus: Boolean,
  },
  data() {
    return {
      msg: this.alertMsg,
      openStatus: this.popupStatus,
    };
  },
  methods: {
    close() {
      this.openStatus = false;
      this.msg = null;
      this.$emit('closePopup');
    },
  },
  watch: {
    popupStatus: function () {
      this.msg = this.alertMsg;
      this.openStatus = this.popupStatus;
    },
  },
};
</script>
