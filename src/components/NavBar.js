import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const Navbar = () => {
  function logOut() {
    let cookies = new Cookies();
    cookies.remove("accessToken");
    toast.success("Log Out successful", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/signUp">Sign Up</a>
        </li>
        <li>
          <a href="/form">Pay</a>
        </li>
        <li>
          <a onClick={logOut} href="/">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
