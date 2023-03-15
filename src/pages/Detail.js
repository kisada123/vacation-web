import { React } from "react";
import useAuth from "../hooks/useAuth";
import dateFormat, { masks } from "dateformat";

export default function Detail(prop) {
  const { authenticatedUser } = useAuth();
  const { vacationData } = prop;
  // console.log("Detail", vacationData);
  const startDate = new Date(vacationData?.startDate);
  const endDate = new Date(vacationData?.endDate);
  const resultDate = endDate - startDate;

  return (
    <>
      <form className="row gx-2 gy-3">
        <div className=" col-6">
          ชื่อ-นามสกุล
          <div className="flex">
            <h5>
              {vacationData?.User?.firstName} {vacationData?.User?.lastName}
            </h5>
          </div>
        </div>

        <div
          className=" col-6 
"
        >
          ประเภทการลา
          <h5>{vacationData?.typeOfLeave}</h5>
        </div>
        <div className="col-12">
          {" "}
          แผนก
          <h5>{vacationData?.department}</h5>
        </div>
        <div className="col-6 ">
          รายยละเอียด/เหตุผลการลา
          <h5
            className="break-words  overflow-auto
"
          >
            {vacationData?.reason}
            <br></br>
          </h5>
        </div>
        <div className="col-6">
          วันที่
          <h5>
            {" "}
            {dateFormat(vacationData?.startDate, "dd-mm-yyyy ")}-{" "}
            {dateFormat(vacationData?.endDate, "dd-mm-yyyy ")}
          </h5>
        </div>
        <div className="col-6">
          จำนวนวันที่ลา
          <h5> {resultDate / 1000 / 60 / 60 / 24}</h5>
        </div>
        <div className="col-6">
          สถานะ
          <h5>{vacationData?.status}</h5>
        </div>
        <div className="d-flex justify-content-center"></div>
      </form>
    </>
  );
}
