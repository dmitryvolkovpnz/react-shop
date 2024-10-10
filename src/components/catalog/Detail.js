import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

function Detail(props) {
    return (
      <div className='detail-item'> 
      
            <div>
                <div className='img-item'>
                    <img src={"./img/" + props.item.img} alt="картинка"/>
                </div>
                <div className='title-price'>
                    <h2>{props.item.title}</h2>
                    <b>{props.item.price} ₽</b>
                    <p>{props.item.descripton}</p>
                </div>
                <div className='add-to-cart' onClick={()=> props.onAdd(props.item)}>Купить</div>
                <IoIosCloseCircleOutline className='close-btn' onClick={()=>props.onDetail(props.items)}/>
            </div>
      </div>
    )
}

export default Detail