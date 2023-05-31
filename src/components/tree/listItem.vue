<template>
  <li>
    <div v-if="lockStatus == false" :class="{'active' : activeStatus == true}">
      <img v-if="activeStatus == true" :src="this.$resource.themeRes.img(activeImg)" :alt="treeName"/>
      <img v-else :src="this.$resource.themeRes.img(inActiveImg)" :alt="treeName"/>
      <span class="tree_name">{{ treeName }}</span>
      <span class="num">{{num}}</span>
      <span class="weight">{{weight}}</span>
    </div>
    <div v-else><img :src="this.$resource.themeRes.img('tree_lock_icon.png')" alt="자물쇠"/></div>
  </li>
</template>

<script>

export default {
  name: 'TreeListItem',
  props: {
    no: Number,
    treeName: String,
    num : Number,
    weight : String,
    activeStatus : Boolean,
    activeImg : String,
    inActiveImg : String,
    lockStatus : Boolean,
  }
}
</script>
