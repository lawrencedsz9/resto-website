import React, { useState, useContext, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/Context";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [messageFromServer, setMessageFromServer] = useState("");
  const navigate = useNavigate();
  const { userLoggedin, setUserLoggedIn } = useContext(Context);
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [cookie, setCookies] = useCookies(["userCookie"]);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    try {
      const data = {
        mobileNumber: mobileNumber,
      };
      console.log(data);
      fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("Success");
          setUserLoggedIn(true);
          setCookies("userCookie", mobileNumber, { path: "/" });
          navigate("/");
        } else {
          console.log("Error");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number:
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
