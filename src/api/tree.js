import http from './http';

const api = http;

const path = '/tree';

//전체 나무 리스트 조회
async function getList(success, fail){
  await api.get(path).then(success).catch(fail); 
}

//사용자가 보유한 나무 리스트 조회 - 나무도감
async function getMyTrees(userIdx, success, fail){
  await api.get(path + `/myTrees/${userIdx}`).then(success).catch(fail); 
}

//사용자가 최근에 얻은 나무 리스트 조회(최대 2개) - 메인 대시보드에서 사용
async function getRecentTrees(userIdx, success, fail){
  await api.get(path + `/recentTrees/${userIdx}`).then(success).catch(fail);
}

export { getList, getMyTrees, getRecentTrees };
