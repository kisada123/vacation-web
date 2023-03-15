import { useState } from "react";

import Input from "../../component/Input";
import InputDate from "../../component/InputDate";
import validateVacation from "../../validators/validate-vocation";
import * as vacationApi from "../../apis/vacation-api";
import { useNavigate } from "react-router-dom";
import Textarea from "../../component/InputTextarea";
import Select from "../../component/InputSelect";
import dateFormat, { masks } from "dateformat";

const initialInput = {
  typeOfLeave: "",
  department: "",
  reason: "",
  createdAt: "",
  updatedAt: "",
  startDate: "",
  endDate: "",
  type: "create",
};

export default function AddItemfrom() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      input.createdAt = dateFormat(new Date(), "mm-dd-yyyy");
      input.updatedAt = dateFormat(new Date(), "mm-dd-yyyy");
      input.type = "create";
      console.log(input);
      const result = validateVacation(input);
      console.log("aaa", result);
      if (result) {
        setError(result);
      } else {
        setError({});
        await vacationApi.vacation(input);
        setInput(initialInput);
        navigate("/login");
      }
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmitForm} className="row gx-2 gy-3">
      <div className="col-12">
        ประเภทการลา
        <Select
          name="typeOfLeave"
          value={input.typeOfLeave}
          onChange={handleChangeInput}
          error={error.typeOfLeave}
        />
      </div>

      <div className="col-12">
        แผนก
        <Input
          placeholder="แผนก"
          name="department"
          value={input.department}
          onChange={handleChangeInput}
          error={error.department}
        />
      </div>
      <div className="col-12">
        รายละเอียด/เหตุผลการลา
        <Textarea
          placeholder="เหตุผล"
          name="reason"
          value={input.reason}
          onChange={handleChangeInput}
          error={error.reason}
        />
      </div>

      <div className="col-6">
        วันทีเริ่มต้น
        <InputDate
          placeholder="ใส่วันที่เริ่มต้น"
          name="startDate"
          value={input.startDate}
          onChange={handleChangeInput}
          error={error.startDate}
        />
      </div>
      <div className="col-6">
        วันทีสิ้นสุด
        {/* <input
          className="form-control "
          type="text"
          // placeholder="Confirm password"
        /> */}
        <InputDate
          placeholder="ใส่วันที่สิ้นสุด"
          name="endDate"
          value={input.endDate}
          onChange={handleChangeInput}
          error={error.endDate}
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
