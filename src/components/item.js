import React, {Component} from 'react';
import { IoIosStar } from "react-icons/io";

export class Item extends Component {
    render() {
        return(
            <div className='item'>
                <div className='img-item'>
                    <img src={"./img/" + this.props.item.img} alt="картинка"/>
                </div>
                <div className='title-price'>
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.price} ₽</b> 
                </div>
                <span className='old-price'>{this.props.item.oldPrice}</span>
                <p><IoIosStar className='star'/> {this.props.item.star}</p> 
                <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>Купить</div>
            </div>
        )
    }
}


export default Item;