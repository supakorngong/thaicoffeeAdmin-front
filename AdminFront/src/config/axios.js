import axios from "axios";
import { deleteAccessToken, getAccessToken } from "../utils/localStorage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

//config header ด้วย interceptor เเก้ไข
axios.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config; //axios(config) ไม่ return = axios(undefined)
});

//ทุก response ที่เข้ามาให้ clear token
axios.interceptors.response.use(
  (value) => Promise.resolve(value),
  // (err) => {
  //   console.log(err);
  // },
  (err) => {
    if (err.response.status === 401) {
      deleteAccessToken();
      window.location.assign("/login"); //refresh page and redidrect to /login
      return;
    }
    return Promise.reject(err); //เป็น err อื่น ให้ return ออกไปใช้ต่อ
  }
);

export default axios;
