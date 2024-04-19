import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// now it will not display directly because hide behuind the header need to give margin so that when open the signin route header shows no condition new header and footer and in popace of main component sigin component that's why put main comp in home route and other foter header alsways shows
const Signin = () => {
  // logdata initial value and setData its the updatedd value that we have
  const [logdata, setData] = useState({
    //those values which are in inpiut field id,name,htmlFor
    email: "",
    password: "",
  });

  // now want to get values from that user passed to get react form control component how input value hadled using onchange event and function
  const addData = (e) => {
    //here inut field value or use name so when we give value to field email the targer give that compo and in name we have passed email so that vale - initialy logdata empty but when user enter value that run onchange fun and set data to then logdata updated and set value top field =logdata.email

    //when user enter some value the adddata fn call then us input field ki name like email or pass wodd and their value
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };
  const senddata = async (e) => {
    e.preventDefault();
    const { email, password } = logdata;

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //or this ist yname is db field name amnd seconf yname that data pass,yname:udata.yname or yname:yname=yname
      body: JSON.stringify({
        email,

        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status == 400) {
      console.log("invalid data");
      toast.warn("invalid details", {
        position: "top-center",
      });
    } else { 
      console.log("valid data");
      toast.success("user valid", {
        position: "top-center",
      });
      setData({ ...logdata, email: "", password: "" });
    }
  };
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img
            src="https://logolook.net/wp-content/uploads/2021/03/Amazon-logo.png"
            alt="amazonlogog"
          ></img>
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={addData}
                value={logdata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={logdata.password}
                onChange={addData}
                name="password"
                id="password"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>
              Continue
            </button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New To Amazon</p>
          <Link to="/register">
            <button className="btn_v">Create Your amazon account</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signin;
