import http from './http';

const api = http;

const path = '/user';

async function checkId(userId, success, fail) {
  await api.get(path + `/checkDuplicateId/${userId}`).then(success).catch(fail);
}

async function signUp(user, success, fail) {
  await api.post(path + `/signUp`, JSON.stringify(user)).then(success).catch(fail);
}

async function getInfo(userIdx, success, fail){
  await api.get(path + `/info/${userIdx}`).then(success).catch(fail);
}

async function login(user, success, fail) {
  await api.post(path + `/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function logout(userNo, success, fail) {
  await api.get(path + `/logout/${userNo}`).then(success).catch(fail);
}

async function findId(user, success, fail) {
  await api.post(path + `/findId`, JSON.stringify(user)).then(success).catch(fail);
}

async function findPw(user, success, fail) {
  await api.post(path + `/findPw`, JSON.stringify(user)).then(success).catch(fail);
}

async function update(user, success, fail) {
  await api.put(path + `/update`, user).then(success).catch(fail);
}

export { checkId, signUp, getInfo, login, logout, findId, findPw, update };
