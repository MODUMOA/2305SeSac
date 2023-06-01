import http from './http';

const api = http;

async function getNoticeList(success, fail){
  await api.get('/notice').then(success).catch(fail);
}

async function getNoticeView(noticeNo, success, fail){
  await api.get(`/notice/${noticeNo}`).then(success).catch(fail);
}

async function writeNotice(param, success, fail){
  await api.post('/notice/write', param).then(success).catch(fail);
}

async function updateNotice(noticeNo, param, success, fail) {
  await api.put(`/notice/update/${noticeNo}`, param).then(success).catch(fail);
}

async function deleteNotice(noticeNo, success, fail) {
  await api.delete(`/notice/delete/${noticeNo}`).then(success).catch(fail);
}

export { getNoticeList, getNoticeView, writeNotice, updateNotice, deleteNotice };
