import { React, useState, useEffect } from "react";
import validateVacation from "../validators/validate-vocation";
import * as vacationApi from "../apis/vacation-api";
import { useNavigate } from "react-router-dom";

import dateFormat, { masks } from "dateformat";

export default function Edit(prop) {
  const { vacationData } = prop;
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const [input, setInput] = useState();
  useEffect(() => {
    setInput(vacationData);
  }, [vacationData]);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log("submitform");
      const result = validateVacation(input);
      console.log("result", result);

      if (result) {
        setError(result);
      } else {
        setError({});
        await vacationApi.updateVacation(input);

        navigate("/login");
      }
    } catch (err) {}
  };

  // console.log("Edit", vacationData);
  // console.log("input", input);
  // console.log("prop", prop);

  return (
    <form onSubmit={handleSubmitForm} className="row gx-2 gy-3">
      <div className="col-12">
        ประเภทการลา
        <input
          name="typeOfLeave"
          className="form-control"
          type="text"
          value={input?.typeOfLeave}
          onChange={handleChangeInput}

          // placeholder="First name"
        />
      </div>

      <div className="col-12">
        แผนก
        <input
          name="department"
          className="form-control"
          type="text"
          // placeholder="Mobile number or email address"
          value={input?.department}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-12">
        {" "}
        รายละเอียด/เหตุผลการลา
        <textarea
          name="reason"
          className="form-control"
          type="text"
          // placeholder="New password"
          value={input?.reason}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        วันทีเริ่มต้น
        <input
          name="startDate"
          className="form-control"
          type="date"
          // placeholder="Confirm password"
          value={dateFormat(input?.startDate, "dd-mm-yyyy ")}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        วันทีสิ้นสุด
        <input
          name="endDate"
          className="form-control "
          type="date"
          // placeholder="Confirm password"
          value={dateFormat(input?.endDate, "dd-mm-yyyy ")}
          onChange={handleChangeInput}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" class="btn btn-success">
          บันทึก
        </button>
      </div>
    </form>
  );
}
