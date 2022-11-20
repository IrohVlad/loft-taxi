import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header _container">
                <div className="header__logo">
                    <img src={logo} alt='' />
                </div>
                <ul className="header__nav">
                    <li className="nav__item"><Link to={'/'}>Карта</Link></li>
                    <li className="nav__item">Профиль</li>
                    <li className="nav__item"><Link to={'/reg'}>Логин</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;