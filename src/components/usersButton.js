import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/usersButton.scss';

const UsersButton = () => (
    <li className="menu__users-button">
            <Link className='menu__link' to='/users'>
                Users
            </Link>
        </li>
)

export default UsersButton;