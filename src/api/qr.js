import http from "./http";
import http2 from "./http2";

const api = http;
const api2 = http2;

const path = "/qr";

async function submitQR(param, success, fail) {
  await api2.post(`/userinfo`, param).then(success).catch(fail);
}

async function waitQR(QRCode, success, fail) {
  await api
    .post(path + `/waitQR`, QRCode)
    .then(success)
    .catch(fail);
}

async function completeQR(success, fail) {
  await api2.get(`/stop`).then(success).catch(fail);
}

export { submitQR, waitQR, completeQR };
