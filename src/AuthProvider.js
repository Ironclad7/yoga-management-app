import { Outlet, Navigate } from "react-router";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const AuthProvider = () => {
  let cookies = new Cookies();
  let auth = false;
  if (
    cookies.get("accessToken") === null ||
    cookies.get("accessToken") === undefined
  ) {
    toast.error("Please log in before making the payment", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else auth = true;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthProvider;
