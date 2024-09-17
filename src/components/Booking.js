import React, { Component } from 'react'


export class Booking extends Component {
  render() {
    const cost = this.props.orders.reduce((sum, orders)=>sum+orders.price*orders.count, 0) 
    return (
    
    <div className='booking-main'>
        <div>
        <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
            <form>
                <div className='main-info'>
                    <input type="text" name="name" placeholder='Ваше имя...'/>
                    <input type="text" name="name" placeholder='Ваша фамилия...'/>
                </div>
                <div className='info'>
                    <input type="text" name="phone" placeholder='Ваш телефон...'/>
                    <input type="text" name="name" placeholder='Ваш адрес...'/>
                </div>
            </form>
            <button className='form-button'>Заказать</button>
        </div>
        <div className='booking'>
            <h2>ВАШ ЗАКАЗ</h2>
            <div className='booking-item'>
                    {this.props.orders.map(el => (
                            <div>
                            <div className='title-price'>
                                <h2>{el.title}</h2>
                                <p>{el.price} ₽</p>
                            </div>
                            <div className='btn-order'>
                                        <div>{el.count} шт.</div>
                            </div>
                        </div>
                        ))}     
            </div>
            <h4>ИТОГ: {cost} ₽</h4> 
        </div>

            
        </div>
    )
  }
}

export default Booking