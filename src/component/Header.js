import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Header() {
  // const {pathname} = useLocation()
  const Login = [{ path: "/Login", text: "ล็อกอิน" }];
  const Register = [{ path: "/Register", text: "สมัครสมาชิก" }];

  const { authenticatedUser } = useAuth();

  return (
    <>
      <div className="flex ">
        <div className="ml-20">
          <h5 className="mr-4">
            สวัสดีคุณ
            {authenticatedUser.firstName}
          </h5>
        </div>
        <h5>
          <div>{authenticatedUser.lastName}</div>
        </h5>
      </div>

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
    </>
  );
}

export default Header;
