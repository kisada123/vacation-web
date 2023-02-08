import React from "react";
import Header from "../component/Header";
function Home() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between bg-gray-300  h-48">
        <div className="text-8xl text-red-400 flex items-center ">
          <h1 className="">Vacation</h1>
        </div>

        <div className="text-1xl my-8 ">
          <Header />
        </div>
      </div>
      <div>
        <div className="flex justify-between"></div>
      </div>
      {/* Header-End*/}
      {/* nav*/}
      <div className="flex space-x-24 bg-blue-600 p-2 text-white">
        <div>หน้าหลัก</div>
        <div>อนุมัติ</div>
        <div>ไม่อนุมัติ</div>
        <div>ออกจากระบบ</div>
      </div>
      {/* nav-End*/}
      {/*  body*/}
      <div>
        <button
          type="submit"
          className="bg-lime-500  py-2  mt-12 w-40 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100"
        >
          เพิ่มรายการวันหยุด
        </button>
      </div>
      {/*  body-End*/}
    </>
  );
}

export default Home;
