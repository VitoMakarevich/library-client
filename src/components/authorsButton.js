import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/authorsButton.scss';
import AuthorsList from './authorsList'

const AuthorsButton = () => (
    
        <li className="menu__authors-button">
            <Link className='menu__link' to='/authors'>
                Authors
            </Link>
        </li>
    
)

export default AuthorsButton;