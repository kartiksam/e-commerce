import "./App.css";
import Navbar from "./components/header/Navbar";
import Maincom from "./components/home/Maincom";
import Newnav from "./components/newnavbar/Newnav";
import Footer from "./components/footer/Footer";
//done same change in index.js
import { Route, Routes } from "react-router-dom";
import Signin from "./components/signup_signin/Signin";
import Signup from "./components/signup_signin/Signup";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
function App() {
  return (
    <>
      {/* // these below four no condition these will display as a landing page other component have condiotion to display when btn click or something else navbar newnav and main compo and footer and only on homepage pe main comp*/}
      <Navbar></Navbar>
      <Newnav></Newnav>
      <Routes>
        <Route path="/" element={<Maincom></Maincom>} />
        <Route path="/login" element={<Signin></Signin>} />
        <Route path="/register" element={<Signup></Signup>} />
        {/* //many productrs but want only one product details so pass id but in news app we have not use db so direct pass props for all category and in url fetc  tahtc catefry that route when we pass in url or on cliuck something need to give link ans route there */}
        <Route path="/getproductsone/:id" element={<Cart></Cart>} />
        <Route path="/buynow" element={<Buynow></Buynow>} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
//buynow.js ,me explain div ki h
