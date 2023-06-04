<template>
  <li>
    <span>{{ category }} : {{ trashWeight }}g</span><span>{{ price }}원</span>
  </li>
</template>

<script>
export default {
  name: 'PaymentDetailItem',
  props: {
    order: Number,
    category : String,
    trashWeight : Number,
    price : Number,
  }
}
</script>
