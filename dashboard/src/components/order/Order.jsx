import React from 'react'
import "./order.scss"
import { GiFruitBowl,GiLoincloth} from "react-icons/gi";
import { CiIceCream } from "react-icons/ci";
import { LuMilk } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { GrPrint } from "react-icons/gr";

import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Order = () => {
  return (
    <div className="order">
        <div className="container">
            <div className="order_top">
                <div className="order_summary">
                    <span>Suppilier</span>
                    <h3>East coast fruits & vegatables</h3>
                </div>
                <div className="order_summary">
                    <span>Shipping date</span>
                    <h3>Thus, Feb 10</h3>
                </div>
                <div className="order_summary">
                    <span>Total</span>
                    <h3>$ 15,028.3</h3>
                </div>
                <div className="order_summary">
                    <span>Category</span>
                    <div className="item">
                        <CiIceCream className='item_logo'/>
                        <GiLoincloth className='item_logo'/>
                        <GiFruitBowl className='item_logo'/>
                        <CiIceCream  className='item_logo'/>
                        <LuMilk className='item_logo'/>
                        <GiFruitBowl className='item_logo'/>
                        <GiLoincloth className='item_logo'/>
                        <LuMilk className='item_logo'/>
                    </div>
                </div>
                <div className="order_summary">
                    <span>Department</span>
                    <h3>300-444-678</h3>
                </div>
                <div className="order_summary">
                    <span>Status</span>
                    <h3>Awaiting your approvel</h3>
                </div>
            </div>

            <div className="order_bottom">
                <div className="order_bottom_container">
                    <div className="handle_dashboard">
                        <div className="searchbar">
                            <input 
                                placeholder="Search ..."
                                className="searchInput" 
                            />
                            <IoSearchOutline  className='searchIcon'/>
                        </div>
                        <div className="handle_dashboard_right">
                            <button>Add Item</button>
                            <GrPrint className='logo' />
                        </div>
                    </div>
                    {/* table */}
                    <div className="table">
                        <table>
                            <tr>
                                <th></th>
                                <th>Product name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Quantity </th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className="image"
                                        src="./apple.png"
                                        alt=""
                                    />
                                </td>
                                <td>Chicken Breast Fillets,Boneless Marinated 6 Ounce Raw, Invivid </td>
                                <td>American Roland</td>
                                <td>$ 60.67 /6+1LB</td>
                                <td>0x6+ 1LB</td>
                                <td>0</td>
                                <td className='option'>
                                    <button>Quantity updated</button>
                                    <div className="change_option">
                                        <FaCheck className="check"/>
                                        <MdOutlineClose className="close" />
                                        <span>Edit</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className="image"
                                        src="./apple.png"
                                        alt=""
                                    />
                                </td>
                                <td>Chicken Breast Fillets,Boneless Marinated 6 Ounce Raw, Invivid </td>
                                <td>American Roland</td>
                                <td>$ 60.67 /6+1LB</td>
                                <td>0x6+ 1LB</td>
                                <td>0</td>
                                <td className='option'>
                                    <button>Quantity updated</button>
                                    <div className="change_option">
                                        <FaCheck className="check"/>
                                        <MdOutlineClose className="close" />
                                        <span>Edit</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className="image"
                                        src="./apple.png"
                                        alt=""
                                    />
                                </td>
                                <td>Chicken Breast Fillets,Boneless Marinated 6 Ounce Raw, Invivid </td>
                                <td>American Roland</td>
                                <td>$ 60.67 /6+1LB</td>
                                <td>0x6+ 1LB</td>
                                <td>0</td>
                                <td className='option'>
                                    <button>Quantity updated</button>
                                    <div className="change_option">
                                        <FaCheck className="check"/>
                                        <MdOutlineClose className="close" />
                                        <span>Edit</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className="image"
                                        src="./apple.png"
                                        alt=""
                                    />
                                </td>
                                <td>Chicken Breast Fillets,Boneless Marinated 6 Ounce Raw, Invivid </td>
                                <td>American Roland</td>
                                <td>$ 60.67 /6+1LB</td>
                                <td>0x6+ 1LB</td>
                                <td>0</td>
                                <td className='option'>
                                    <button>Quantity updated</button>
                                    <div className="change_option">
                                        <FaCheck className="check"/>
                                        <MdOutlineClose className="close" />
                                        <span>Edit</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className="image"
                                        src="./apple.png"
                                        alt=""
                                    />
                                </td>
                                <td>Chicken Breast Fillets,Boneless Marinated 6 Ounce Raw, Invivid </td>
                                <td>American Roland</td>
                                <td>$ 60.67 /6+1LB</td>
                                <td>0x6+ 1LB</td>
                                <td>0</td>
                                <td className='option'>
                                    <button>Quantity updated</button>
                                    <div className="change_option">
                                        <FaCheck className="check"/>
                                        <MdOutlineClose className="close" />
                                        <span>Edit</span>
                                    </div>
                                </td>
                            </tr>
                           
                            
                        </table>      
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order