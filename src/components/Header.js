import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";


const Header = (props) => {

    return (
             <header>
                <div>
                    <Link to='/' className='logo'><span>QPICK</span></Link>
                    <span className='count'>
                        {props.orders.length}
                    </span>
                    <Link to='/cart'><IoCartOutline className='shop-cart-button' /></Link>
                    <span className='count-like'>
                        2
                    </span>
                    <BiHeart className='shop-like-button' />
                </div>
            </header>
           
    );
};

export default Header;