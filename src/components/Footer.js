import React from 'react';
import { SlSocialVkontakte } from "react-icons/sl";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom"; 

const Footer = () => {
    return (
            <footer>
                <Link to='/' className='logo-footer'><span>QPICK</span></Link>
                <div className='footer-menu'>
                    <ul>
                        <li>Избранное</li>
                        <li>Корзина</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className='lang-footer'>
                    <ul>
                        <li>Условия сервиса</li>
                    </ul>
                    <div className='lang'>
                        <TbWorld className='world' /> <span className='rus'>Рус</span> <span>Eng</span>
                    </div>
                </div>
                <div className='social'>
                   <a href='https://vk.com/dmitryvolkovoffical'><SlSocialVkontakte className='items'/></a> 
                   <a href='https://t.me/dmitryvolkovoffical'><RiTelegramLine className='items'/></a> 
                   <a href='https://wa.me/79521982630'><FaWhatsapp className='items'/></a>
                </div>
            </footer>
    );
};

export default Footer;