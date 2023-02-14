import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  ); // authenticatedUser เก็บข้อมูลผู้ใช้งานที่มีการloginอยู่

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    fetchAuthUser();
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password }); //ส่งไปหลังบ้านไปที่ authApi from "../apis/auth-api";
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };
  const loginAdmin = async (email, password) => {
    const res = await authApi.loginAdmin({ email, password }); //ส่งไปหลังบ้านไปที่ authApi from "../apis/auth-api";
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };
  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ authenticatedUser, login, logout, loginAdmin }}
    >
      {children}
    </AuthContext.Provider> //value={{ login }} เรียกไปใช้ที่loginform
  );
}
