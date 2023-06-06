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
import {mapGetters} from 'vuex';
import {getList, getMyTrees} from '@/api/tree';
import TheHeader from '@/components/inc/header/TheHeader.vue';
import TheFooter from '@/components/inc/footer/TheFooter.vue';
import TreeListItem from '@/components/tree/listItem.vue';

const userStore = 'userStore';

export default {
  name: 'AppTree',
  components : {TheHeader, TheFooter, TreeListItem},
  data(){
    return {
      lists : [],
      myTrees : [],
    }
  },
  methods : {
    ...mapGetters(userStore, ['getUserIdx']),
    async userGetList(){
      await getList(
        ({data}) => {
          this.lists = data.list;
          this.syncTrees();
        },
        (error) => {
          console.dir(error);
        }
      )
    },
    async getUserTrees(userIdx){
      await getMyTrees(
        userIdx,
        ({data}) => {
          this.myTrees = data.list;
        },
        (error) => {
          console.dir(error);
        }
      )
    },
    syncTrees() {
      //보유한 나무가 있는 경우
      if(this.myTrees.length > 0){
        this.lists.map((item) => {
          this.myTrees.map((tree) => {
            if(item.treeIdx == tree.treeIdx){
              item.activeStatus = true;
              item.count = tree.count;
            }
          })
        });
      }
    }
  },
  created() {
    const userIdx = this.getUserIdx();
    this.getUserTrees(userIdx);
    //this.userGetList();
    

    this.lists = [
      {
      treeIdx : 1,
      treeName : '상수리나무',
      treeImg : 'sangsuri_icon_active.png',
      treeInActiveImg : 'sangsuri_icon_inactive.png',
      count : 2,
      weight : '15.5kg',
      activeStatus : true,
      lockStatus : false,
    },
    {
      treeIdx : 2,
      treeName : '편백나무',
      treeImg : 'pyeonbaek_icon_active.png',
      treeInActiveImg : 'pyeonbaek_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      treeIdx : 3,
      treeName : '백합나무',
      treeImg : 'baekhop_icon_active.png',
      treeInActiveImg : 'baekhop_icon_inactive.png',
      count : 1,
      weight : '39.6kg',
      activeStatus : true,
      lockStatus : false,
    },
    {
      treeIdx : 5,
      treeName : '소나무',
      treeImg : 'sonamu_icon_active.png',
      treeInActiveImg : 'sonamu_icon_inactive.png',
      count : 3,
      weight : '9.2kg',
      activeStatus : true,
      lockStatus : false,
    },
    {
      treeIdx : 4,
      treeName : '상수리나무',
      treeImg : 'sangsuri_icon_active.png',
      treeInActiveImg : 'sangsuri_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      no : 6,
      treeName : '소나무',
      treeImg : 'sonamu_icon_active.png',
      treeInActiveImg : 'sonamu_icon_inactive.png',
      activeStatus : false,
      lockStatus : false,
    },
    {
      treeIdx : 7,
      lockStatus : true,
    },
    {
      treeIdx : 8,
      lockStatus : true,
    },
    {
      treeIdx : 9,
      lockStatus : true,
    },
    {
      treeIdx : 10,
      lockStatus : true,
    },
    {
      treeIdx : 11,
      lockStatus : true,
    },
    {
      treeIdx : 12,
      lockStatus : true,
    }
  ]
  }
}
</script>
