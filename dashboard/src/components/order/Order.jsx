import React from 'react'
import "./order.scss"
import { GiFruitBowl,GiLoincloth} from "react-icons/gi";
import { CiIceCream } from "react-icons/ci";
import { LuMilk } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { GrPrint } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

import  { useState } from 'react';
import Modal from '../modal/modal';
import OrderItem from '../order-item/OrderItem';
import {useSelector,useDispatch} from "react-redux";
import { editSuccess } from '../../redux/action';

const Order = () => {
  const [changeData,setChangeData] = useState({})  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = useSelector((store) => store.data)
  const dispatch = useDispatch()

// handle the modal
  const handleOpenModal = (item) => {
    setIsModalOpen(true);
    setChangeData(item)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleYes = () => {
    let obj = {...changeData,"Status":"Missing Urgent"}
    dispatch(editSuccess(obj));
    setIsModalOpen(false);
  }
  const handleNo = () => {
    let obj = {...changeData,"Status":"Missing"}
    dispatch(editSuccess(obj));
    setIsModalOpen(false);
  }
//   console.log({"d":data})
  return (
    <>
     {
       isModalOpen && (
            <Modal>
                <div className="modal">
                    <div className="modal_title">
                        <h2>Missing Product</h2>
                        <MdOutlineClose className="modal_close" onClick={handleCloseModal}>Close Modal</MdOutlineClose>
                    </div>
                    <span>Is "Chicken Breast Fillets, Boneless..." urgent?</span>
                    <div className="modal_option">
                        <span onClick={handleNo}>No</span>
                        <span onClick={handleYes}>Yes</span>
                    </div>
                </div>
            </Modal>
        )
    }
    <div className="order">
        <div className="container">
            <div className="order_top">
                <div className="order_summary">
                    <span>Supplier</span>
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
                            {data && data.map((el) => {
                                return <OrderItem
                                   key={el.id}
                                   handleOpenModal={handleOpenModal}
                                   item={el}
                                 /> 
                            })}                            
                        </table>      
                   </div>
                </div>
            </div>
        </div>
    </div>
 </>
  )
}

export default Order