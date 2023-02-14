import { useState } from "react";

import Input from "../../component/Input";
import validateVacation from "../../validators/validate-vocation";
import * as vacationApi from "../../apis/vacation-api";
import { useNavigate } from "react-router-dom";
import Textarea from "../../component/InputTextarea";
import Select from "../../component/InputSelect";

const initialInput = {
  typeOfLeave: "",
  department: "",
  reason: "",
  createdAt: "",
  updatedAt: "",
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
        ประเภทการลา++++
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
        <Input
          placeholder="ใส่วันที่เริ่มต้น"
          name="createdAt"
          value={input.createdAt}
          onChange={handleChangeInput}
          error={error.createdAt}
        />
      </div>
      <div className="col-6">
        วันทีสิ้นสุด
        {/* <input
          className="form-control "
          type="text"
          // placeholder="Confirm password"
        /> */}
        <Input
          placeholder="ใส่วันที่สิ้นสุด"
          name="updatedAt"
          value={input.updatedAt}
          onChange={handleChangeInput}
          error={error.updatedAt}
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
