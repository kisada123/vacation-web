import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//children คือ login ใน router.js
export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedAdmin } = useAuth();
  // console.log(authenticatedAdmin);
  if (authenticatedAdmin) {
    return <Navigate to={"/HomeAdmin"} />;
  }
  return children;
}
