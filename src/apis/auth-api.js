import axios from "../config/axios";

export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
export const loginAdmin = (input) => axios.post("/auth/loginAdmin", input);
export const getMe = () => axios.get("/auth/me");
export const getMeAdmin = (id) => axios.get("/auth/me-admin/" + id);
// export const getVacation = () => axios.get("/auth/getVacation");
