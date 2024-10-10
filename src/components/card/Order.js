import React from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";


function Order(props) {
        return(
            <div className='order'>
                <div className='img-order'>
                    <img src={"./img/" + props.orders.img} alt="картинка"/>
                        <div className='btn-order'>
                            <div className='btn' onClick={()=>props.decrimentItem(props.orders)}>-</div><div>{props.orders.count}</div><div className='btn' onClick={()=>props.incrimentItem(props.orders)}>+</div>
                        </div>
                </div>
                <div className='title-price'>
                    <h2>{props.orders.title}</h2>
                    <b>{props.orders.price} ₽</b>
                </div>
                <div className='bottom-price'>
                    {props.orders.price} ₽
                </div>
                <div className='top-delete-btn' onClick={()=>props.deleteItem(props.orders.id)}>
                    <RiDeleteBin2Line className='delete'/>
                </div>
            </div>
        )
}


export default Order;