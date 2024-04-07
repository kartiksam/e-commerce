import React from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";

const Maincom = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner></Banner>
      </div>
      {/* in this we have gievn duisplay fle to sloide part so divide into two compo left and right side left side slider and right side img and if we give other third comp slid again then overlappiung will take place slide part kko display flex the split */}
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deals of the Day"></Slide>
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
            alt="rightimg"
          />
          <a href="#">see more</a>
        </div>
      </div>
      {/* thats why we want now slider below them so use outside that div slide part above we have divide compo uin two parts */}
      <Slide title="Today's deal"></Slide>
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>

      <Slide title="Best Seller"></Slide>
      <Slide title="Upto 80% off"></Slide>
    </div>
  );
};

export default Maincom;
