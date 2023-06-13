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

async function autoLogin(token, success, fail) {
  await api.post(path + `/autoLogin`, JSON.stringify(token)).then(success).catch(fail);
}

async function logout(userIdx, success, fail) {
  await api.get(path + `/logout/${userIdx}`).then(success).catch(fail);
}

async function findId(user, success, fail) {
  await api.post(path + `/findId`, JSON.stringify(user)).then(success).catch(fail);
}

async function findPw(user, success, fail) {
  await api.post(path + `/findPw`, JSON.stringify(user)).then(success).catch(fail);
}

async function checkingPassword(param, success, fail){
  await api.post(path + `/check`, param).then(success).catch(fail);
}

async function update(userIdx, user, success, fail) {
  await api.put(path + `/${userIdx}`, user).then(success).catch(fail);
}

export { checkId, signUp, getInfo, login, autoLogin, logout, findId, findPw, checkingPassword, update };
