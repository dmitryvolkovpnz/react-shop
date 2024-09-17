import React, {Component} from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";


export class Order extends Component {
    render() {
        return(
            <div className='order'>
                <div className='img-order'>
                    <img src={"./img/" + this.props.orders.img} alt="картинка"/>
                        <div className='btn-order'>
                            <div className='btn' onClick={()=>this.props.decrimentItem(this.props.orders)}>-</div><div>{this.props.orders.count}</div><div className='btn' onClick={()=>this.props.incrimentItem(this.props.orders)}>+</div>
                        </div>
                </div>
                <div className='title-price'>
                    <h2>{this.props.orders.title}</h2>
                    <b>{this.props.orders.price} ₽</b>
                </div>
                <div className='bottom-price'>
                    {this.props.orders.price} ₽
                </div>
                <div className='top-delete-btn' onClick={()=>this.props.deleteItem(this.props.orders.id)}>
                    <RiDeleteBin2Line className='delete'/>
                </div>
            </div>
        )
    }
}


export default Order;