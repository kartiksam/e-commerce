import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [udata, setUpdate] = useState({
    yname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const addData = (e) => {
    const { name, value } = e.target;
    setUpdate(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };
  const senddata = async (e) => {
    //not load page on click of btn
    e.preventDefault();
    const { yname, email, mobile, password, cpassword } = udata;

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //or this ist yname is db field name amnd seconf yname that data pass,yname:udata.yname or yname:yname=yname
      body: JSON.stringify({
        yname,
        email,
        mobile,
        password,
        cpassword,
      }),
    });

    const data = await response.json();
    //console.log(data);
    if (response.status === 422 || !data) {
      alert("no data");
    } else {
      alert("data successfully added");
      setUpdate({
        yname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
      });
    }
  };
  return (
    <section>
      {/* this is everywhere main div and inside all divs for everything  */}
      <div className="sign_container">
        <div className="sign_header">
          <img
            src="https://logolook.net/wp-content/uploads/2021/03/Amazon-logo.png"
            alt="amazonlogog"
          ></img>
        </div>
        <div className="sign_form">
          <form method="post">
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="yname">Your name</label>
              <input
                type="text"
                name="yname"
                onChange={addData}
                value={udata.yname}
                id="email"
              />
            </div>
            {/* html for name =same value like email and same use in usestate hook and same in backend fields */}
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={addData}
                value={udata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                onChange={addData}
                value={udata.mobile}
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={addData}
                value={udata.password}
                id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="cpassword">Password Again</label>
              <input
                type="password"
                name="cpassword"
                onChange={addData}
                value={udata.cpassword}
                id="email"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>
              Continue
            </button>
            {/* want isnide border and container */}
            <div className="signin_info">
              <p>Already have an account</p>
              <Link to="/login">Signin</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
