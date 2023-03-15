import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  removeAccessTokenAdmin,
  setAccessTokenAdmin,
  getAccessTokenAdmin,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  ); // authenticatedUser เก็บข้อมูลผู้ใช้งานที่มีการloginอยู่

  const [authenticatedAdmin, setAuthenticatedAdmin] = useState(
    getAccessTokenAdmin() ? true : null
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
    const fetchAuthAdmin = async () => {
      try {
        const token = getAccessTokenAdmin();
        const { id } = jwtDecode(token);
        const res = await authApi.getMeAdmin(id);
        setAuthenticatedAdmin(res.data.admin);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (authenticatedUser) {
      fetchAuthUser();
    }
    if (authenticatedAdmin) {
      fetchAuthAdmin();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password }); //ส่งไปหลังบ้านไปที่ authApi from "../apis/auth-api";
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };
  const loginAdmin = async (email, password) => {
    const res = await authApi.loginAdmin({ email, password }); //ส่งไปหลังบ้านไปที่ authApi from "../apis/auth-api";
    setAccessTokenAdmin(res.data.accessToken);
    setAuthenticatedAdmin(jwtDecode(res.data.accessToken));
    console.log(jwtDecode(res.data.accessToken));
  };
  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };
  const logoutAdmin = () => {
    removeAccessTokenAdmin();
    setAuthenticatedAdmin(null);
  };
  return (
    <AuthContext.Provider
      value={{
        authenticatedAdmin,
        authenticatedUser,
        login,
        logout,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AuthContext.Provider> //value={{ login }} เรียกไปใช้ที่loginform
  );
}
