import React from 'react'
import "./orderMenu.scss"

const OrderMenu = () => {
  return (
    <div className="order_menu">
        <div className="container">
            <div className="top">
               <h4> Order &gt; <span className="orders">32457ABC</span> </h4>
            </div>
            <div className="bottom">
                <h2>Order <span>32457ABC</span></h2>
                <div className="menu_button">
                    <button>Back</button>
                    <button className='active'>Approve order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderMenu