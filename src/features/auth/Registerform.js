import { useState } from "react";
// import * as Joi from "joi";
import Input from "../../component/Input";
import validateRegister from "../../validators/validate-register";

const initialInput = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export default function Registerform() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const result = validateRegister(input);
    if (result) {
      setError(result);
    } else {
      setError({});
    }
  };

  return (
    <div className="justify-center  border-2 border-gray-600">
      <div className="text-8xl text-red-400 flex justify-center my-20">
        Vacation
      </div>

      <div className="text-5xl flex justify-center mb-8">สมัครสมาชิก</div>

      <form onSubmit={handleSubmitForm}>
        <div className=" flex justify-center w-full">
          <div className="mx-5">
            <label for="firstname">
              <b className="">firstname</b>
              <br />
            </label>
            <Input
              placeholder="First name"
              name="firstname"
              value={input.firstname}
              onChange={handleChangeInput}
              error={error.firstname}
            />
          </div>
          <div>
            <label for="lastname">
              <b>lastname</b>
              <br />
            </label>
            <Input
              placeholder="Lastname name"
              name="lastname"
              value={input.lastname}
              onChange={handleChangeInput}
              error={error.lastname}
            />
          </div>
        </div>
        <div className="  flex justify-center">
          <div className="mx-5">
            <label for="username">
              <b>username</b>
              <br />
            </label>
            <Input
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={handleChangeInput}
              error={error.username}
            />
          </div>
          <div>
            <label for="email">
              <b>email</b>
              <br />
            </label>
            <Input
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
              error={error.email}
            />
          </div>
        </div>
        <div className="  flex justify-center">
          <div className="mx-5">
            <label for="password">
              <b>password</b>
              <br />
            </label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              error={error.password}
            />
          </div>
          <div>
            <label for="confirm password">
              <b>confirm password</b>
              <br />
            </label>
            <Input
              type="Password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              error={error.confirmPassword}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white py-2 px-5 my-10 w-80   border-none cursor-pointer  opacity-90 hover:opacity-100"
          >
            ตกลง
          </button>
        </div>
      </form>
    </div>
  );
}
