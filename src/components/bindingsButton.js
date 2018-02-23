import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/bindingsButton.scss';

const BindingsButton = () => (
    <li className="menu__bindings-button">
        <Link className='menu__link' to='/bindings'>
            Bindings
        </Link>
    </li>
)

export default BindingsButton;