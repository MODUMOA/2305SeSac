import http from './http';

const api = http;

const path = '/qr';

async function submitQR(param, success, fail){
  await api.post(path + `/submitQR`, param).then(success).catch(fail);
}

async function waitQR(QRCode, success, fail){
  await api.post(path + `/waitQR`, QRCode).then(success).catch(fail);
}

async function completeQR(QRCode, success, fail){
  await api.post(path + `/completeQR`, QRCode).then(success).catch(fail);
}

export { submitQR, waitQR, completeQR };
