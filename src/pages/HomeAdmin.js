import { React, useState, useEffect } from "react";
import Header from "../component/Header";
import AddItem from "./AddItem";
import { Link, NavLink, useLocation } from "react-router-dom";
import Edit from "./Edit";
import Detail from "./Detail";
import useAuth from "../hooks/useAuth";
import { getAllAdminVacation } from "../apis/vacation-api";
import { useNavigate } from "react-router-dom";

import * as vacationApi from "../apis/vacation-api";

// const { authenticatedUser } = useAuth();

// const AuthAddItem = [{ path: "/AddItem", text: "เพิ่มรายการวันหยุด" }];
// ++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++

function HomeAdmin() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logout2 = [{ path: "/login", text: "ออกจากระบบ" }];

  const [vacationData, setVacationData] = useState([]);
  useEffect(() => {
    const getAllVacation = async () => {
      try {
        const result = await getAllAdminVacation();
        // console.log(result);
        setVacationData(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllVacation();
  }, []);
  console.log("HOME", vacationData);
  const handleOpenModal = (id) => {
    const foundVacation = vacationData.find((vacation) => vacation.id === id);
    console.log(foundVacation);
    setSelectedVacation(foundVacation);
    setOpenDetail(true);
  };

  const handleReject = async (id) => {
    await vacationApi.rejectVacation(id);

    window.location.reload(false);
  };
  const handleApprove = async (id) => {
    await vacationApi.approveVacation(id);

    window.location.reload(false);
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
      <div className="flex space-x-24 bg-blue-600 p-2 text-white">
        <div>หน้าหลัก</div>
        <div>อนุมัติ</div>
        <div>ไม่อนุมัติ</div>
        <div>
          <button className="text-white" onClick={logout}>
            {" "}
            {logout2.map((el) => (
              <NavLink key={el.path} to={el.path}>
                {el.text}
              </NavLink>
            ))}
          </button>
        </div>
      </div>
      {/* nav-End*/}
      {/*  body*/}
      <div>
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
          <table class="table my-10">
            <thead className="border-2">
              <tr>
                <th className="border-2">วันที่ทำรายการ</th>
                <th className="border-2">ประเภทการลา</th>
                <th className="border-2">วันที่ลาหยุด</th>
                <th className="border-2">สถานะ</th>
                <th className="border-2">วัน</th>
                <th> zz</th>
              </tr>
            </thead>
            <tbody className="border-2">
              {vacationData.map((el) => {
                return (
                  <tr>
                    <td className="border-2">{el.createdAt}</td>
                    <td className="border-2">{el.typeOfLeave}</td>
                    <td className="border-2">
                      {el.createdAt}
                      {el.updatedAt}
                    </td>

                    <td className="border-2">{el.status}</td>

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
                        className="bg-lime-500  rounded-md w-20 ml-2  border-none cursor-pointer  opacity-90 hover:opacity-100"
                        onClick={() => handleApprove(el.id)}
                      >
                        อนุมัติ
                      </button>
                      {/* modal */}

                      {/* End modal */}

                      <button
                        className="px-2 mx-2 bg-red-600 rounded-md
                      "
                        onClick={() => handleReject(el.id)}
                      >
                        ไม่อนุมัติ
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

export default HomeAdmin;
