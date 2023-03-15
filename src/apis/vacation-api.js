import axios from "../config/axios";

export const vacation = (input) => axios.post("/auth/vacation", input);
export const updateVacation = (input) =>
  axios.patch("vacation/" + input.id, input);
export const getAll = () => {
  return axios.get("/vacation");
};
export const getAllAdminVacation = () => {
  return axios.get("/vacationAdmin");
};

export const getAllAdminVacationAllName = () => {
  return axios.get("/vacationAdminAllName");
};

export const deleteVacation = (id) => axios.delete("vacation/" + id);

export const approveVacation = (id) => axios.patch("/vacation/approve/" + id);

export const rejectVacation = (id) => axios.patch("/vacation/reject/" + id);
