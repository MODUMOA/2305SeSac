<template>
  <li>
    <span>{{ category }} : {{ weight }}</span><span>{{ price }}원</span>
  </li>
</template>

<script>
export default {
  name: 'PaymentDetailItem',
  props: {
    order: Number,
    category : String,
    weight : String,
    price : Number,
  }
}
</script>
