import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.scss';

const Header = () => (
    <header className="header">
        <h1 className="header__text">
            <Link to="/" className="header__link">
                Library
            </Link> 
        </h1>
    </header>
)

export default Header;