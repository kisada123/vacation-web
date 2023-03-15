import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getAccessTokenAdmin,
} from "../utils/local-storage";

function HeaderAdmin() {
  // const {pathname} = useLocation()
  const LoginAdmin = [{ path: "/LoginAdmin", text: "ออกจากระบบ" }];
  const { logoutAdmin } = useAuth();

  const { authenticatedAdmin } = useAuth();
  // console.log(authenticatedAdmin);

  return (
    <>
      {getAccessTokenAdmin() ? (
        <div className="flex ">
          <div className="ml-12">
            <h5 className="mr-4">
              สวัสดีคุณ
              {authenticatedAdmin?.firstName}
            </h5>
          </div>
          <h5>
            <div>{authenticatedAdmin?.lastName}</div>
          </h5>
        </div>
      ) : null}

      <div className="mx-2">
        <button
          onClick={logoutAdmin}
          type="submit"
          className=" bg-lime-500  rounded-md py-2  mt-12 w-40 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100 "
        >
          {LoginAdmin.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.text}
            </NavLink>
          ))}
        </button>
        {/* <button
          type="submit"
          className=" bg-lime-500  rounded-md py-2  mt-12 w-28 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100 "
        >
          {Register.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.text}
            </NavLink>
          ))}
        </button> */}
      </div>
    </>
  );
}

export default HeaderAdmin;
