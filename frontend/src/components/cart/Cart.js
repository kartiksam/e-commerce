import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";
const Cart = () => {
  // this can be div alsomostlky cases but header footer and <.,</>
  // everything in div 1st give div fro class seperate tht and inside that use div fro everything
  // in this 1st we have taken div for cart section thta is for cart page full where display so that content not hide behind navbar for stylimng cart page  and inside taken container div give flex to it so that left and right part split   in full page and inside that where that dscrt come in that taken two div for left and right and inside it two class maii n fro left and right and inside use div for everything fro their styling beacuse we can see two part left right so use container for that
  return (
    <div className="cart_section">
      <div className="cart_container">
        {/* give this container to display :flex so that come side by side lef tand right and give display:flex and dirxn:col to left so that set below by below in left side */}
        <div className="left_cart">
          <img
            src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
            alt="cart-image"
          />
          {/* need to give flex to it cart_btn so that two btn come side by siude and inside theri claaaess for theior style */}
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon Favourite Electric kettle(1.5L,Silver,Black)</h4>
          {/* from material ui and other symbols for delete and others */}
          <Divider></Divider>
          <p className="mrp">M.R.P. : Rs117</p>
          {/* span to highlight the info */}
          <p>
            Deal of the Day : <span style={{ color: "#B12704" }}>Rs625.00</span>
          </p>
          <p>
            You save : <span style={{ color: "#B12704" }}>Rs625 (47%)</span>
          </p>
          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>Extra 10% off</span>
            </h5>
            <h4>
              Free Delivery :
              <span style={{ color: "#111", fontWeight: 600 }}></span> Details
            </h4>
            <p>
              Fastest delivery:
              <span style={{ color: "#111", fontWeight: 600 }}>
                Tommorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">About the team</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
