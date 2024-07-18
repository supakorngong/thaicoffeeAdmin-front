import { createContext, useState } from "react";
import authApi from "../api/Auth";
import { deleteAccessToken, giveAccessToken, getAccessToken } from "../utils/localStorage";
import { useEffect } from "react";
// import userApi from "../apis/user";
export const AuthContext = createContext();

//ทุกครั้งที่ refresh จะ rerender authUser ถูก set ใหม่เป็น null
//
//
export default function AuthContextProvider(props) {
  const { children } = props;
  const [authUser, setAuthUser] = useState(null); //if {} when check user and not found will get true
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getMe();
          setAuthUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    const res = await authApi.login(credentials);
    giveAccessToken(res.data.accessToken);
    const resGetAuthUser = await authApi.getMe();
    setAuthUser(resGetAuthUser.data.user);
  };

  const logout = () => {
    deleteAccessToken();
    setAuthUser(null);
  };

  return <AuthContext.Provider value={{ login, logout, authUser, isAuthLoading }}>{children}</AuthContext.Provider>;
}
