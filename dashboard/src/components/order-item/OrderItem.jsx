import React from 'react';
import "./orderItem.scss";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { editSuccess } from '../../redux/action';

const OrderItem = ({handleOpenModal,item}) => {
    const {id,img,Product_name,Brand,Price,Quantity,Total,Status} = item;
    const dispatch = useDispatch()

    const handleCheck = () => {
        let obj = {...item,"Status":"Approved"}
        dispatch(editSuccess(obj))
    }
   console.log(item)
  return (
        <tr>
            <td>
                <img
                    className="image"
                    src={img}
                    alt=""
                />
            </td>
            <td>{Product_name} </td>
            <td>{Brand}</td>
            <td>$ {Price} </td>
            <td>{Quantity}</td>
            <td>{Total}</td>
            <td className='option'>
                {
                Status?<button
                  className={
                    Status==="Missing"?"status_btn missing":
                    (Status==="Missing Urgent"?"status_btn urgent":
                       (Status==="Approved"?"status_btn approved":null)
                    )
                  }
                 >{Status}</button>:"."
                 }
                <div className="change_option">
                    <FaCheck 
                      className={Status==="Approved"?"check":null}
                      onClick={handleCheck}
                    />
                    <MdOutlineClose 
                        className={
                            (Status==="Missing"?"close missing":
                            (Status==="Missing Urgent"?"close urgent":"close"))
                        }
                        onClick={()=>handleOpenModal(item)}
                    />
                    <span className="edit">Edit</span>
                </div>
            </td>
        </tr> 
   
  )
}

export default OrderItem