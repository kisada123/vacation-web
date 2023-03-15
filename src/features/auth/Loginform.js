import { useState } from "react";
import { toast } from "react-toastify";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmitFrom = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
      toast.success("ล็อกอินสำเร็จ");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div>
      <div className="justify-center  border-2">
        <div className="text-8xl text-red-400 flex justify-center my-20">
          Vacation
        </div>

        <div className="text-5xl flex justify-center mb-8">ยินดีต้อนรับ</div>

        <form onSubmit={handleSubmitFrom}>
          <div className=" flex justify-center">
            <div className="mx-5">
              <label for="email">
                <b className="">email</b>
                <br />
              </label>
              <input
                className="border border-black py-2 px-5 my-2 w-60 "
                type="text"
                placeholder="Enter email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="mx-5">
              <label for="password">
                <b className="">password</b>
                <br />
              </label>
              <input
                className="border border-black py-2 px-5 my-2 w-60 "
                type="password"
                placeholder="Enter password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-5 my-10 w-60   border-none cursor-pointer  opacity-90 hover:opacity-100"
            >
              NEXT
            </button>
          </div>

          <div className="flex justify-center">
            <Link to={"/Register"}>
              <button
                type="submit"
                className="bg-lime-400 text-white py-2 px-5 w-60   border-none cursor-pointer  opacity-90 hover:opacity-100"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
