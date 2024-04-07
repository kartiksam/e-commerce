import React from "react";
import "./footer.css";
// footer means full component came there for footer and same in header and in this two main div one for info and other for klast detail slogo and other in 1st maij div we have five 4 div
const year = new Date().getFullYear();
console.log(year);

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Get to know Us</h3>
          <p>About us</p>
          <p>Carrers</p>
          <p>Press Release</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footr_details_one">
          <h3>Connect with usUs</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="footr_details_one">
          <h3>Make money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one">
          <h3>Make money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="lastdetails">
        {/* //alt means if any reason photo not come then this will display */}
        <img
          src="https://logolook.net/wp-content/uploads/2021/03/Amazon-logo.png"
          alt="logo"
        />
        <p>
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
          &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year},
          Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
