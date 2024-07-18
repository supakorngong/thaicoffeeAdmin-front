import axios from "../config/axios";
const authApi = {};
authApi.getMe = async () => await axios.get("/auth/me");

authApi.login = async (body) => {
  console.log("i am body", body);
  const result = await axios.post("/admin/login", body);
  console.log("i am result", result);
  return result;
};

export default authApi;
