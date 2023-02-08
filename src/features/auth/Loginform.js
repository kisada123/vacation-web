export default function LoginForm() {
  return (
    <div>
      <div className="justify-center  border-2">
        <div className="text-8xl text-red-400 flex justify-center my-20">
          Vacation
        </div>

        <div className="text-5xl flex justify-center mb-8">ยินดีต้อนรับ</div>
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
              type="text"
              placeholder="Enter password"
              name="password"
              id="password"
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
      </div>
    </div>
  );
}
