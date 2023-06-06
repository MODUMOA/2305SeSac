<template>
  <div class="col-12 main_badge_list_con">
    <div class="col-12 mb20 main_badge_list_title_con"><span>이번주의 나무</span><router-link :to="{name: 'Tree'}" class="btn_style_0 bg_green white">더보기 ></router-link></div>
    <ul v-if="lists.length > 0" class="col-12 main_badge_list">
      <li v-for="list in lists"
              :key="list.idx"
              v-bind="list">
              <img :src="$resource.themeRes.img(`${list.treeImg}`)" :alt="list.treeName"/>
        <span>{{list.treeName}}</span>
      </li>
    </ul>
    <ul v-else>
      <div class="col-12 no_data">
        최근에 얻은 뱃지가 없습니다.
      </div>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import { getRecentTrees } from '@/api/tree';

const userStore = 'userStore';

export default {
  name: 'MainDashBoardBadgeList',
  data() {
    return {
      lists : [],
    }
  },
  methods: {
    ...mapGetters(userStore, ['getUserIdx']),
    async userGetRecentTrees(){
      await getRecentTrees(
        ({ data }) => {
          this.lists = data.result;
        },
        (error) => {
          console.dir(error);
        }
      )
    },
  },
  created() {
    // const userIdx = this.getUserIdx();
    this.userGetRecentTrees();      
  }
}
</script>
