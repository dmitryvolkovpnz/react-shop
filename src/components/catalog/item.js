import React from 'react';
import { IoIosStar } from "react-icons/io";

function Item(props) {
        return(
            <div className='item'>
                <div className='img-item'>
                    <img src={"./img/" + props.item.img} alt="картинка" onClick={()=>props.onDetail(props.item)}/>
                </div>
                <div className='title-price'>
                    <h2>{props.item.title}</h2>
                    <b>{props.item.price} ₽</b>
                </div>
                <span className='old-price'>{props.item.oldPrice}</span>
                <p><IoIosStar className='star'/> {props.item.star}</p>
                <div className='add-to-cart' onClick={()=> props.onAdd(props.item)}>Купить</div>
            </div>
            
        )
}


export default Item;