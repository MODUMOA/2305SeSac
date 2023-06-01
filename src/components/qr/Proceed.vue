<template>
  <div class="col-12">
    <div class="col-12 qr_proceed_top_con">
      <div class="col-12 tc qr_proceed_top_title">
        일반쓰레기 통
      </div>
      <div class="col-12 tc qr_proceed_timer_con">
        <span class="timer point1">43</span>초 뒤에 통이 닫혀요
      </div>
      <div class="col-12 tc qr_btn_con">
        <a href="javascript:void(0)">시간 연장</a>
      </div>
    </div>
    <div class="col-12 tc qr_proceed_middle_con">
      각 쓰레기통마다 안내할 화면
    </div>
    <div class="col-12 qr_proceed_bottom_con">
      <div class="col-12 mb17 tc qr_btn_con">
        <a href="javascript:void(0)">다 배출 했어요</a>
      </div>
      <div class="col-12 tc qr_proceed_desc">
        쓰레기통을 닫지 않아 발생하는 책임은 사용자에게 있습니다.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QRProceed',
}
</script>

<style scope>
#app{background-color: #D9D9D9; padding-top: 0; padding-bottom: 0;}
</style>
