import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  // const {pathname} = useLocation()
  const Login = [{ path: "/Login", text: "ล็อกอิน" }];
  const Register = [{ path: "/Register", text: "สมัครสมาชิก" }];

  return (
    <>
      <button
        type="submit"
        className="  bg-black mx-8 p-3 text-white  rounded-full border-none cursor-pointer  opacity-90 hover:opacity-100 "
      >
        {Login.map((el) => (
          <NavLink key={el.path} to={el.path}>
            {el.text}
          </NavLink>
        ))}
      </button>
      <button
        type="submit"
        className="  bg-black mx-8 p-3 text-white  rounded-full border-none cursor-pointer  opacity-90 hover:opacity-100 "
      >
        {Register.map((el) => (
          <NavLink key={el.path} to={el.path}>
            {el.text}
          </NavLink>
        ))}
      </button>
    </>
  );
}

export default Header;
