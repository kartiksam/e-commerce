import React, { useEffect } from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { getProduct } from "./../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
//like we use in context api to get data freom it use =usecontext hook an dpass notecontext same here useselector and usedispatch to trigger method
// useSelector:

// useSelector is a React hook provided by the react-redux library.
// It is used to extract data from the Redux store state.
// The argument passed to useSelector is a selector function that defines which part of the Redux store state you want to extract.
// In your case, the selector function (state) => state.getProductsData is selecting the getProductsData slice of the Redux store state, and then you're extracting the products property from it using destructuring.
// After this line, the products variable will hold the value of state.getProductsData.products.
// useDispatch:

// useDispatch is another React hook provided by react-redux.
// It returns a reference to the dispatch function from the Redux store.
// The dispatch function is used to dispatch actions to the Redux store.
// In your case, you're obtaining the dispatch function and storing it in the dispatch variable.
// useEffect:

// useEffect is a built-in React hook that allows you to perform side effects in function components.
// It takes a function as its first argument, which will be executed after the component has rendered.
// The second argument to useEffect is an array of dependencies. If any of the dependencies change, the effect function will be re-executed.
// In your code, you're using useEffect to dispatch the getProduct() action when the component mounts (i.e., when it is first rendered).
// Here's how it all works together:

// When the component mounts, useEffect runs and dispatches the getProduct() action using the dispatch function obtained from useDispatch.
// The getProduct() action is an asynchronous action creator that fetches data from an API (presumably) and dispatches the appropriate actions based on the result.
// After the action is dispatched, Redux reducers update the store state accordingly.
// useSelector then extracts the products property from the updated store state, making it available for use in the component.
// So, essentially, useSelector allows you to access the Redux store state, and useDispatch allows you to dispatch actions to update the store state. Together with useEffect, you can perform asynchronous actions like data fetching when the component mounts or when certain dependencies change.
const Maincom = () => {
  const { productdata } = useSelector((state) => state.getProductsData);

  const dispatch = useDispatch();
  //this is call back and show when in homepage
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(productdata);
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner></Banner>
      </div>
      {/* in this we have gievn duisplay fle to sloide part so divide into two compo left and right side left side slider and right side img and if we give other third comp slid again then overlappiung will take place slide part kko display flex the split */}
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deals of the Day" productdata={productdata}></Slide>
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
      <Slide title="Today's deal" productdata={productdata}></Slide>
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>

      <Slide title="Best Seller" productdata={productdata}></Slide>
      <Slide title="Upto 80% off" productdata={productdata}></Slide>
    </div>
  );
};

export default Maincom;
