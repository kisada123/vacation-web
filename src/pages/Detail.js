import { React } from "react";
import useAuth from "../hooks/useAuth";

export default function Detail(prop) {
  const { authenticatedUser } = useAuth();
  const { vacationData } = prop;
  console.log("Detail", vacationData);
  return (
    <form className="row gx-2 gy-3">
      <div className=" col-6">
        ชื่อ-นามสกุล
        <div className="flex">
          <h5>
            {authenticatedUser.firstName} {authenticatedUser.lastName}
          </h5>
        </div>
      </div>

      <div className="col-6">
        ประเภทการลา
        <h5>{vacationData?.typeOfLeave}</h5>
      </div>
      <div className="col-12">
        {" "}
        แผนก
        <h5>{vacationData?.department}</h5>
      </div>
      <div className="col-6">
        รายยละเอียด/เหตุผลการลา
        <h5>{vacationData?.reason}</h5>
      </div>
      <div className="col-6">
        วันที่
        <h5>{vacationData?.createdAt}</h5>
      </div>
      <div className="col-6">
        จำนวนวันที่ลา
        <input
          className="form-control "
          type="text"
          // placeholder="Confirm password"
        />
      </div>
      <div className="col-6">
        สถานะ
        <h5>{vacationData?.status}</h5>
      </div>
      <div className="d-flex justify-content-center"></div>
    </form>
  );
}
