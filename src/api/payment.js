import http from "./http";

const api = http;

const path = "/payment";

async function getList(userIdx, page, success, fail) {
  await api
    .get(path + `/${userIdx}/${page}`)
    .then(success)
    .catch(fail);
}

async function updateStatus(param, success, fail) {
  await api
    .put(path + `/updateStatus`, param)
    .then(success)
    .catch(fail);
}

export { getList, updateStatus };
