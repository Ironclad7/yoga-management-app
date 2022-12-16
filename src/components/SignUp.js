import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/StyleSheet.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [mobileNo, setMobileNo] = useState("");

  let navigate = useNavigate();

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  let handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
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
    if (age < 18 || age > 65) {
      navigate("/");
      return toast.error("You are uneligible to enroll in this event", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (mobileNo.length !== 10)
      return toast.error("Please give a valid mobile number", {
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
    fetch("http://localhost:8080/api/addProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        age: age,
        mobileNo: mobileNo,
      }),
    })
      .then((data) => data.text())
      .then((data) => {
        if (data.startsWith("Failure")) {
          return toast.error(
            "Error when creating a profile. Please retry with a different username",
            {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        } else {
          navigate("/");
          return toast.success("SignUp was successful", {
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
        <label class="label-class">Age</label>
        <input class="input-class" type="number" onChange={handleAgeChange} />
        <div class="sep-div" />
        <label class="label-class">Mobile Number</label>
        <input
          class="input-class"
          type="text"
          onChange={handleMobileNoChange}
        />
        <div class="sep-div" />
        <label class="label-class">Set Password</label>
        <input
          class="input-class"
          type="password"
          onChange={handlePasswordChange}
        />
        {/* <label>Confirm Password</label>
                    <input type='password' value={password} onChange={this.handlePasswordChange}/> */}
        <div class="sep-div" />
        <button class="animated-button" type="submit" onClick={handleSubmit}>
          Create Profile
        </button>
      </div>
    </>
  );
}

export default SignUp;
