import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

export default function LoginAdminform() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginAdmin } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await loginAdmin(email, password);
      console.log(loginAdmin ?? "loginAdmin is undefined");
      navigate("/HomeAdmin");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  // useEffect(() => {
  //   getAccessTokenAdmin() ? navigate("/HomeAdmin") : null;
  // }, []);

  return (
    <div>
      <div className="justify-center border-2">
        <div className="text-8xl text-red-400 flex justify-center my-20">
          Vacation Admin
        </div>
        <div className="text-5xl flex justify-center mb-8">ยินดีต้อนรับ</div>
        <form onSubmit={handleSubmitForm}>
          <div className="flex justify-center">
            <div className="mx-5">
              <label htmlFor="email">
                <b className="">email</b>
                <br />
              </label>
              <input
                className="border border-black py-2 px-5 my-2 w-60"
                type="text"
                placeholder="Enter email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mx-5">
              <label htmlFor="password">
                <b className="">password</b>
                <br />
              </label>
              <input
                className="border border-black py-2 px-5 my-2 w-60"
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
              className="bg-black text-white py-2 px-5 my-10 w-60 border-none cursor-pointer opacity-90 hover:opacity-100"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
