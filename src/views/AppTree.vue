<template>
  <main class="col-12">
    <the-header></the-header>
    <div class="col-12 col-center mw-1230 pl20 pr20 pl-md-30 pr-md-30">
      <div class="col-12 pt27 pb30 white_container">
        <div class="col-12 mb22 tc font-size-15">나무도감</div>
        <ul class="col-12 tree_list_con">
          <tree-list-item v-for="list in lists" :key="list.no" :list="list" v-bind="list"></tree-list-item>
        </ul>
      </div>
    </div>
    <the-footer></the-footer>
  </main>
</template>

<script>
import TheHeader from '@/components/inc/header/TheHeader.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';
import TreeListItem from '@/components/tree/listItem.vue';


export default {
  name: 'AppTree',
  components : {TheHeader, TheFooter, TreeListItem},
  data(){
    return {
      lists : [],
    }
  },
  created() {
    this.lists = [
      {
      no : 1,
      treeName : '상수리나무',
      activeImg : 'sangsuri_icon_active.png',
      inActiveImg : 'sangsuri_icon_inactive.png',
      num : 2,
      weight : '15.5kg',
      activeStatus : true,
      lockStatus : false,
    },
    {
      no : 2,
      treeName : '소나무',
      activeImg : 'sonamu_icon_active.png',
      inActiveImg : 'sonamu_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      no : 3,
      treeName : '소나무',
      activeImg : 'sonamu_icon_active.png',
      inActiveImg : 'sonamu_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      no : 4,
      treeName : '상수리나무',
      activeImg : 'sangsuri_icon_active.png',
      inActiveImg : 'sangsuri_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      no : 5,
      treeName : '소나무',
      activeImg : 'sonamu_icon_active.png',
      inActiveImg : 'sonamu_icon_inactive.png',
      num : 3,
      weight : '9.2kg',
      activeStatus : true,
      lockStatus : false,
    },
    {
      no : 6,
      treeName : '소나무',
      activeImg : 'sonamu_icon_active.png',
      inActiveImg : 'sonamu_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      no : 7,
      lockStatus : true,
    },
    {
      no : 8,
      lockStatus : true,
    },
    {
      no : 9,
      lockStatus : true,
    },
    {
      no : 10,
      lockStatus : true,
    },
    {
      no : 11,
      lockStatus : true,
    },
    {
      no : 12,
      lockStatus : true,
    }
  ]
  }
}
</script>
