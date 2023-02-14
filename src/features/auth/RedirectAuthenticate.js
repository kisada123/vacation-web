import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//children คือ login ใน router.js
export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  // console.log(authenticatedUser);
  if (authenticatedUser) {
    return <Navigate to={"/"} />;
  }
  return children;
}
