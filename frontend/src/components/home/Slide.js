import React from "react";
// these are from react multi carasoul from there no need to learn just need to learn how to use things multi means all items in one pgae not ingle single thats why diff from banner
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
//import { products } from "./productData";
import "./slide.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
// when using bootstrap direct copy and pste iunside return removbe div because inclkude in that and in this case
const Slide = ({ title, productdata }) => {
  return (
    <div className="products_section">
      {/* this is seq first want titlr then bt then divider then carasouyl and in that way we frame component in maincom and in app.js */}
      <div className="products_deal">
        {/* <h3>{props.title}</h3> if we receive props in func */}
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>
      <Divider></Divider>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        // 4000ms = 4s every 4 sec item will scroll
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {/* // like in other proj we pass when map to cart item as props or ele and display carts and in that carasouel auto display as cart with all data need to give some css in this no cart inside carosoulk auto display these images with thi sdata but need to give styling */}
        {Array.isArray(productdata) &&
          productdata.map((e) => {
            return (
              // two id we have one created by mongo and we have created
              <Link to={`/getproductsone/${e.id}`}>
                <div className="products_items">
                  <div className="product_img">
                    {<img src={e.url} alt="product item" />}
                  </div>
                  <p className="products_name">{e.title.shortTitle}</p>
                  <p className="products_offer">{e.discount}</p>
                  <p className="products_explore">{e.tagline}</p>
                </div>
              </Link>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Slide;
