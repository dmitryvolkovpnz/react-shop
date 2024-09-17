import React, {Component} from 'react';
import Order from "./Order";
import { Link } from "react-router-dom"; 


export class Orders extends Component {
    render() {
        const cost = this.props.orders.reduce((sum, orders)=>sum+orders.price*orders.count, 0)          // Данная переменная отвечает за подсчет суммы всех товаров, которые находятся в корзине.
        return(
            <div>                    
                <h3>Корзина</h3> 
                <div className='order-block'>
                    <div className='order-list'>
                        {this.props.orders.map(el => (
                            <Order key={el.id} orders={el} incrimentItem={this.props.incrimentItem} decrimentItem={this.props.decrimentItem} deleteItem={this.props.deleteItem}/>
                        ))}
                    </div>
                    <div className='order-info'>
                        <div className='total-price'>
                           <span className='text'>Итого:</span><span className='price'>{cost} ₽</span>
                        </div>
                        <Link to='/booking'><button className='order-btn'>Перейти к оформлению</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Orders;