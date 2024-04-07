import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
//using material ui here paste from therer niche use
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            {/* //when click to photot redirct to homepage */}
            <Link to="/">
              <img
                src="https://logolook.net/wp-content/uploads/2021/03/Amazon-logo.png"
                alt="amazonlogo"
              />
            </Link>
          </div>
          <div className="nav_searchbar">
            <input type="text" name=" " id=" " />
            <div className="search_icon">
              <SearchIcon id="search"></SearchIcon>
            </div>
          </div>
        </div>
        {/* in this href we will give route /signup that in app.js /signin and that compo will open */}
        <div className="right">
          <div className="nav_btn">
            {/* //user will come and not type/login he will see signin likhja and click over that so make linkable repace with anchor because it reload page jo linka h uspr click kra to us route op jayga it will redirect to login route and page will ot reload not reload the page */}
            <Link to="/login">signin</Link>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon"></ShoppingCartIcon>
              <p>cart</p>
            </Badge>
          </div>
          <div className="avatar">
            <AccountCircleIcon></AccountCircleIcon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
