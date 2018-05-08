import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.scss';

const Header = () => (
    <header className="header">
        <h1 className="header__text">
            <Link to="/" className="header__link">
                <i className="header__icon fas fa-book"></i>
            </Link> 
        </h1>
        <ul className="header__menu">
            <li className="header__menu-item"> <Link className="header__menu-link"  to='/authors'> Authors </Link> </li>
            <li className="header__menu-item"> <Link className="header__menu-link" to='/books'> Books </Link> </li>
            <li className="header__menu-item"> <Link className="header__menu-link" to='/users'> Users </Link> </li>
            <li className="header__menu-item"> <Link className="header__menu-link" to='/bindings'> Bindings </Link> </li>
        </ul>
    </header>
)

export default Header;