import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

function Header() {
  // const {pathname} = useLocation()
  const Login = [{ path: "/Login", text: "ล็อกอิน" }];
  const Register = [{ path: "/Register", text: "สมัครสมาชิก" }];

  const { logout } = useAuth();
  const { authenticatedUser } = useAuth();

  const logout2 = [{ path: "/login", text: "ออกจากระบบ" }];

  return (
    <>
      {getAccessToken() ? (
        <div className="flex ">
          <div className="">
            <h5 className="ml-5-11 "> สวัสดีคุณ</h5>
          </div>
          <div className="ml-6">
            <h5 className="mr-4">{authenticatedUser.firstName}</h5>
          </div>
          <h5 className="mr-8">
            <div>{authenticatedUser.lastName}</div>
          </h5>
        </div>
      ) : null}

      <div className="mt-11">
        <button
          className="bg-lime-500  rounded-md py-2 w-40 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100 "
          onClick={logout}
        >
          {" "}
          {logout2.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.text}
            </NavLink>
          ))}
        </button>
      </div>

      {!getAccessToken() ? (
        <div className="mx-2">
          <button
            type="submit"
            className=" bg-lime-500  rounded-md py-2  mt-12 w-20 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100 "
          >
            {Login.map((el) => (
              <NavLink key={el.path} to={el.path}>
                {el.text}
              </NavLink>
            ))}
          </button>
          <button
            type="submit"
            className=" bg-lime-500  rounded-md py-2  mt-12 w-28 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100 "
          >
            {Register.map((el) => (
              <NavLink key={el.path} to={el.path}>
                {el.text}
              </NavLink>
            ))}
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Header;
