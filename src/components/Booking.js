import React, { Component } from 'react'


export class Booking extends Component {
  render() {
    const cost = this.props.orders.reduce((sum, orders)=>sum+orders.price*orders.count, 0) 
    return (
    
    <div className='booking-main'>

        <div className='form-main'>
            <form>

            </form>
        </div>
        <div className='booking'>
            <h2>ВАШ ЗАКАЗ</h2>
            <div className='booking-item'>
                    {this.props.orders.map(el => (
                            <div>
                            <div className='title-price'>
                                <h2>{el.title}</h2>
                                <b>{el.price} ₽</b>
                            </div>
                            <div className='btn-order'>
                                        <div>{el.count} шт.</div>
                            </div>
                        </div>
                        ))}
            <h3>ИТОГО: {cost} ₽</h3>            
            </div>
            
        </div>

            
        </div>
    )
  }
}

export default Booking