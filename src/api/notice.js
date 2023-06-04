import http from './http';

const api = http;

async function getNoticeList(success, fail){
  await api.get('/notice').then(success).catch(fail);
}

async function getNoticeView(noticeIdx, success, fail){
  await api.get(`/notice/${noticeIdx}`).then(success).catch(fail);
}

async function writeNotice(param, success, fail){
  await api.post('/notice/write', param).then(success).catch(fail);
}

async function updateNotice(noticeIdx, param, success, fail) {
  await api.put(`/notice/update/${noticeIdx}`, param).then(success).catch(fail);
}

async function deleteNotice(noticeIdx, success, fail) {
  await api.delete(`/notice/delete/${noticeIdx}`).then(success).catch(fail);
}

export { getNoticeList, getNoticeView, writeNotice, updateNotice, deleteNotice };
