import { React, useState, useEffect } from "react";
import Header from "../component/Header";
import AddItem from "./AddItem";
import { Link, NavLink, useLocation } from "react-router-dom";
import Edit from "./Edit";
import Detail from "./Detail";
import useAuth from "../hooks/useAuth";
import { getAll } from "../apis/vacation-api";
import { useNavigate } from "react-router-dom";

import dateFormat, { masks } from "dateformat";

import * as vacationApi from "../apis/vacation-api";

// var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// console.log("dateFormat", dateFormat(now, "dd-mm-yyyy "));

// const { authenticatedUser } = useAuth();

// const AuthAddItem = [{ path: "/AddItem", text: "เพิ่มรายการวันหยุด" }];
// ++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++

function Home() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState();
  const { logout } = useAuth();
  const navigate = useNavigate();

  // const { authenticatedUser } = useAuth();

  const [update, setUpdate] = useState(false);

  // const logout2 = [{ path: "/login", text: "ออกจากระบบ" }];

  const [vacationData, setVacationData] = useState([]);
  useEffect(() => {
    const getAllVacation = async () => {
      try {
        const result = await getAll();
        // console.log(result);
        setVacationData(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllVacation();
  }, []);
  console.log(vacationData);

  // console.log("HOME", vacationData);

  const handleOpenModal = (id) => {
    const foundVacation = vacationData.find((vacation) => vacation.id === id);
    console.log(foundVacation);
    setSelectedVacation(foundVacation);
    setOpenDetail(true);
  };
  const handleEditModal = (id) => {
    const foundVacation = vacationData.find((vacation) => vacation.id === id);
    console.log(foundVacation);
    setSelectedVacation(foundVacation);
    setOpenEdit(true);
  };

  const handledelete = async (id) => {
    console.log(id);
    await vacationApi.deleteVacation(id);

    navigate("/login");
  };

  return (
    <>
      {/* Header */}

      <div className="flex justify-between bg-gray-300  h-48">
        <div className="text-8xl text-red-400 flex items-center ">
          <div className="">Vacation</div>
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
      <div className="flex space-x-24 bg-blue-400 p-2 text-white  h-10">
        {/* <div>หน้าหลัก</div>
        <div>อนุมัติ</div>
        <div>ไม่อนุมัติ</div> */}
      </div>
      {/* nav-End*/}
      {/*  body*/}
      <div>
        <button
          type="submit"
          className="bg-lime-500  rounded-md py-2 mb-10 mt-12 w-40 ml-10  border-none cursor-pointer  opacity-90 hover:opacity-100 "
          onClick={() => setOpenAdd(true)}
        >
          เพิ่มรายการวันหยุด
          {/* {AuthAddItem.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.text}
            </NavLink>
          ))} */}
        </button>
        {/* modal */}
        <div
          className={`modal fade show ${openAdd ? "d-block" : ""}`}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close invisible" />
                <h5 className="modal-title">เพิ่มรายการวันหยุด</h5>
                <h5 className="modal-title">(รายยละเอียดคำขออนุมัติลา)</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setOpenAdd(false)}
                />
              </div>
              <div className="modal-body">
                <AddItem />
              </div>
            </div>
          </div>
        </div>
        {openAdd && <div className="modal-backdrop fade show" />}
      </div>
      {/* End modal */}
      <div className=" rounded-md  ">
        <div>
          <table class="table">
            <thead className="border-2">
              <tr>
                <th className="border-2">วันที่ทำรายการ</th>
                <th className="border-2">ชื่อ</th>
                <th className="border-2">นามสกุล</th>
                <th className="border-2">ประเภทการลา</th>
                <th className="border-2">วันที่ลาหยุด</th>
                <th className="border-2">สถานะ</th>
                <th className="border-2"> วัน</th>
                <th className="border-2"></th>
              </tr>
            </thead>
            <tbody className="border-2">
              {vacationData.map((el) => {
                const startDate = new Date(el.startDate);
                const endDate = new Date(el.endDate);
                const resultDate = endDate - startDate;

                return (
                  <tr>
                    <td className="border-2">
                      {dateFormat(el.createdAt, "dd-mm-yyyy ")}
                    </td>
                    <td className="border-2"> {el.User.firstName}</td>
                    <td className="border-2">{el.User.lastName}</td>
                    <td className="border-2">{el.typeOfLeave}</td>
                    <td className="border-2 ">
                      {dateFormat(el.startDate, "dd-mm-yyyy ")} -{" "}
                      {dateFormat(el.endDate, "dd-mm-yyyy ")}
                    </td>

                    <td className="border-2">{el.status}</td>
                    <td className="border-2">
                      {resultDate / 1000 / 60 / 60 / 24}
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="bg-amber-400  rounded-md w-20 ml-2  border-none cursor-pointer  opacity-90 hover:opacity-100"
                        onClick={() => handleOpenModal(el.id)}
                      >
                        รายละเอียด
                      </button>

                      {/* modal */}
                      <div
                        className={`modal fade show ${
                          openDetail ? "d-block" : ""
                        }`}
                        tabIndex="-1"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close invisible"
                              />
                              <h5 className="modal-title">รายยละเอียด</h5>
                              <h5 className="modal-title">
                                (รายยละเอียดคำขออนุมัติลา)
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => setOpenDetail(false)}
                              />
                            </div>
                            <div className="modal-body">
                              <Detail vacationData={selectedVacation} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {openDetail && (
                        <div className="modal-backdrop fade show" />
                      )}

                      {/* End modal */}

                      <button
                        type="submit"
                        className="bg-lime-500  rounded-md w-20 ml-2  border-none cursor-pointer  opacity-90 hover:opacity-100"
                        onClick={() => handleEditModal(el.id)}
                      >
                        แก้ไข
                      </button>
                      {/* modal */}
                      <div
                        className={`modal fade show ${
                          openEdit ? "d-block" : ""
                        }`}
                        tabIndex="-1"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close invisible"
                              />
                              <h5 className="modal-title">แก้ไข</h5>
                              <h5 className="modal-title">
                                (รายยละเอียดคำขออนุมัติลา)
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => setOpenEdit(false)}
                              />
                            </div>
                            <div className="modal-body">
                              <Edit vacationData={selectedVacation} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {openEdit && <div className="modal-backdrop fade show" />}

                      {/* End modal */}

                      <button
                        className="px-2 mx-2 bg-red-600 rounded-md
                      "
                        onClick={() => handledelete(el.id)}
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/*  body-End*/}
    </>
  );
}

export default Home;
