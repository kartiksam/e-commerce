import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";
const data = [
  "https://img.etimg.com/thumb/msid-95009273,width-300,height-225,imgsize-31454,resizemode-75/amazon-diwali-sale.jpg",
  "https://i.gadgets360cdn.com/large/amazon-diwali-sale-2022-big_1664846829549.jpg?downsize=950:*",
];
//  here banner and images css and where to disaplay in main com and css added to it home_sedtion where to display
// carsoul is just like a slider we have not implememt just take from material ui and use
const Banner = () => {
  return (
    <div>
      <Carousel
        className="carasousel"
        cycleNavigation={true}
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysvisible={true}
        navButtonsProps={{
          //to style btns left right both its a carasoul pkg direcvt take care slider
          style: {
            backGroundcolor: "#fff",
            color: "#49494",
            borderRadius: 0,
            marginTop: -22,
            height: "104px",
          },
        }}
      >
        {data.map((imag, i) => {
          return <img src={imag} alt=" " className="banner_img" />;
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
