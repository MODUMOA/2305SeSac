<template>
  <li>
    <div v-if="lockStatus == false" :class="{'active' : activeStatus == true}">
      <img v-if="activeStatus == true" :src="this.$resource.themeRes.img(treeImg)" :alt="treeName"/>
      <img v-else :src="this.$resource.themeRes.img(treeInActiveImg)" :alt="treeName"/>
      <span class="tree_name">{{ treeName }}</span>
      <span class="num">{{count}}</span>
      <span class="weight">{{weight}}</span>
    </div>
    <div v-else><img :src="this.$resource.themeRes.img('tree_lock_icon.png')" alt="자물쇠"/></div>
  </li>
</template>

<script>

export default {
  name: 'TreeListItem',
  props: {
    treeIdx: Number,
    treeName: String,
    count : Number,
    weight : String,
    activeStatus : Boolean,
    treeImg : String,
    treeInActiveImg : String,
    lockStatus : Boolean,
  }
}
</script>
