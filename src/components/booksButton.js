import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/booksButton.scss';

const BooksButton = () => (
    <li className="menu__books-button">
            <Link className='menu__link' to='/books'>
                Books
            </Link>
        </li>
)

export default BooksButton;