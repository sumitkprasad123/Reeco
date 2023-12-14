import React from 'react';
import "./navbar.scss";
import { FaAngleDown } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="nav_left">
                <span className="logo">Reeco</span>
                <span className="menu">Store</span>
                <span className="menu">Orders</span>
                <span className="menu">Analytics</span>
            </div>
            <div className="nav_right">
                <BsCart4 className="cart_logo"/>
                <div className="user_profile">
                    <span className="user_name">Hello, james</span>
                    <FaAngleDown/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar