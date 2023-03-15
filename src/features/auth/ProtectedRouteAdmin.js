import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAccessTokenAdmin } from "../../utils/local-storage";
import jwt_decode from "jwt-decode";

export default function ProtectedRouteAdmin({ children }) {
  const tokenAdmin = getAccessTokenAdmin();
  if (tokenAdmin) {
    var admin = jwt_decode(tokenAdmin);
    console.log(admin, "admin");
  }

  if (!admin || !tokenAdmin) {
    return <Navigate to={"/LoginAdmin"} />;
  }

  return children;
}
