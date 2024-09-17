import React, { Component } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

export class Detail extends Component {
  render() {
    return (
      <div className='detail-item'> 
      
            <div>
                <div className='img-item'>
                    <img src={"./img/" + this.props.item.img} alt="картинка"/>
                </div>
                <div className='title-price'>
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.price} ₽</b>
                    <p>{this.props.item.descripton}</p>
                </div>
                <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>Купить</div>
                <IoIosCloseCircleOutline className='close-btn' onClick={()=>this.props.onDetail(this.props.item)}/>
            </div>
      </div>
    )
  }
}

export default Detail