import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import "./styles/StyleSheet.css";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let handleSubmit = (event) => {
    if (username.length < 4)
      return toast.error("Please give a valid username", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    if (password.length < 8)
      return toast.error("Please give a password with more than 8 characters", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    event.preventDefault();
    fetch(
      "http://localhost:8080/api/validateProfile?username=" +
        username +
        "&password=" +
        password,
      {
        method: "GET",
      }
    )
      .then((data) => data.text())
      .then((data) => {
        if (data.startsWith("Failure")) {
          return toast.error("Invalid username or password", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          const cookies = new Cookies();
          cookies.set("accessToken", data, { path: "/" });
          console.log(cookies.get("accessToken"));
          navigate("/form");
          return toast.success("LogIn was successful", {
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
      });
  };

  return (
    <>
      <div id="form-container">
        <label class="label-class">Username</label>
        <input
          class="input-class"
          type="text"
          onChange={handleUsernameChange}
        />
        <div class="sep-div" />
        <label class="label-class">Password</label>
        <input
          class="input-class"
          type="password"
          onChange={handlePasswordChange}
        />
        <div class="sep-div" />
        <button class="animated-button" type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </div>
    </>
  );
}

export default LogIn;
