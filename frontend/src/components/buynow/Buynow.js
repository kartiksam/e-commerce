import React from "react";
import { Divider } from "@mui/material";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
//ek div bnao outside use andr do div then outside wake div ko dispaly fkex then left right split and if in left side want img then below things then give left to display flex and direxn column .and in case left right ssplit in left class under give one div outside and inside want img and other headings and paragraphs give outside div dispolay grid then imside that div img and other div inside other details direct h and p using span to highlight flex split two things img and other div and two div wth give outside div
const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          {/* int his no need to give dispaly flex because all omes after by after text and right side text by text-align :right */}
          <h1>Shopping cart</h1>
          <p> Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider></Divider>
          <div className="item_containert">
            <img src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70" />
            <div className="item_details">
              <h3>Modify sense 500 smartwatch (black strep,freesize)</h3>
              <h3>SMart watches</h3>
              <h3 className="diffrentprice">Rs 4049.00</h3>
              <p className="unusuall">Usually dispatched in 8 days</p>
              <p>Eligible for free shopping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt="logo"
              />
              <Option></Option>
            </div>
            <h3 className="item_price">Rs4049.00</h3>
          </div>
          <Divider></Divider>
          <Subtotal></Subtotal>
        </div>
        <Right></Right>
      </div>
    </div>
  );
};

export default Buynow;
