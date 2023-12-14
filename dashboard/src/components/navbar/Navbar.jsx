import React from 'react';
import "./navbar.scss";

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
                <span className="cart_logo"></span>
                <div className="user_profile">
                    <span className="user_name">Hello james</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar