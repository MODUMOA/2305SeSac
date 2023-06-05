import http from './http';

const api = http;
const path = '/notice';

async function getNoticeList(success, fail) {
  await api.get(path).then(success).catch(fail);
}

async function getNoticeView(noticeIdx, success, fail){
  await api.get(path + `/${noticeIdx}`).then(success).catch(fail);
}

async function writeNotice(param, success, fail){
  await api.post(path + `/write`, param).then(success).catch(fail);
}

async function updateNotice(noticeIdx, param, success, fail) {
  await api.put(path + `/update/${noticeIdx}`, param).then(success).catch(fail);
}

async function deleteNotice(noticeIdx, success, fail) {
  await api.delete(path + `/delete/${noticeIdx}`).then(success).catch(fail);
}

export { getNoticeList, getNoticeView, writeNotice, updateNotice, deleteNotice };
