import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import "./styles/StyleSheet.css";

function Form() {
  const [paymentForMonth, setPaymentForMonth] = useState(new Date());
  const [batch, setBatch] = useState("6-7");

  let navigate = useNavigate();

  let handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  let handleMonthChange = (date) => {
    setPaymentForMonth(date);
  };

  let handleSubmit = (event) => {
    const cookies = new Cookies();
    console.log(cookies.get("accessToken"));

    fetch("http://localhost:8080/api/addPayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: cookies.get("accessToken"),
        paymentForMonth: paymentForMonth.toLocaleString("default", {
          month: "long",
        }),
        batch: batch,
      }),
    })
      .then((data) => data.text())
      .then((data) => {
        if (data.startsWith("Failure")) {
          return toast.error("Error when making a payment. Please retry", {
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
          toast.success("Payment was successful", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
        }
      });
  };

  return (
    <div id="form-container">
      <label class="label-class">Choose Payment for month</label>
      <DatePicker
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        selected={paymentForMonth}
        minDate={new Date().setDate(1)}
        maxDate={new Date().setMonth(new Date().getMonth() + 5)}
        onChange={handleMonthChange}
      />
      <div class="sep-div" />
      <label class="label-class">Batch for this month</label>
      <select class="input-class" value={batch} onChange={handleBatchChange}>
        <option value="6-7">6-7AM</option>
        <option value="7-8">7-8AM</option>
        <option value="8-9">8-9AM</option>
        <option value="5-6">5-6PM</option>
      </select>
      <div class="sep-div" />
      <button class="animated-button" type="submit" onClick={handleSubmit}>
        Pay
      </button>
    </div>
  );
}

export default Form;
