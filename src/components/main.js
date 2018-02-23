import React from 'react';
import {Link} from 'react-router-dom';
import { Switch, Route } from 'react-router';

import '../styles/main.scss';
import UsersButton from './usersButton';
import BindingsButton from './bindingsButton';
import AuthorsButton from './authorsButton';
import BooksButton from './booksButton';
import Books from './books';
import Bindings from './bindings';
import Users from './users';
import Authors from './authors';
import NoMatch from './noMatch';
import Home from './home';

const Main = () => (
    <section>
        <div className="selector__wrapper">
            <ul className="selector__menu">
                <UsersButton />
                <BooksButton />
                <AuthorsButton />
                <BindingsButton />
            </ul> 
        </div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
            <Route path="/books" component={Books}/>
            <Route path="/bindings" component={Bindings}/>
            <Route path="/authors" component={Authors}/>
            <Route component={NoMatch}/>
        </Switch>
    </section>
)

export default Main;