import http from './http';

const api = http;

const path = '/trash';

/**
 * 사용자 쓰레기 내역 조회 - 실천현황
 * @param {userIdx, trashIdx} success 
 * @param {*} fail 
 */
async function getList(param, success, fail){
  await api.get(path, param).then(success).catch(fail); 
}

export { getList };
