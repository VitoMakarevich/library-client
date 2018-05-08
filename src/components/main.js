import React from 'react';
import { Switch, Route } from 'react-router';

import '../styles/main.scss';
import UsersButton from './usersButton';
import BindingsButton from './bindingsButton';
import AuthorsButton from './authorsButton';
import BooksButton from './booksButton';
import Books from '../containers/books';
import BookCreate from '../containers/bookCreate';
import Book from '../containers/book';
import Bindings from '../containers/bindings';
import BindingCreate from '../containers/bindingCreate';
import Binding from '../containers/binding'
import Users from '../containers/users';
import Authors from '../containers/authors';
import NoMatch from './noMatch';
import User from '../containers/user';
import Home from './home';
import UserCreate from '../containers/userCreate';
import AuthorCreate from '../containers/authorCreate';
import Author from '../containers/author';


const Main = () => (
    <section>
        {/* <div className="selector__wrapper">
            <ul className="selector__menu">
                <UsersButton />
                <BooksButton />
                <AuthorsButton />
                <BindingsButton />
            </ul> 
        </div> */}
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users/create" component={UserCreate} />
            <Route exact path="/users" component={Users}/>
            <Route path="/users/:id" component={User} />
            <Route exact path="/authors/create" component={AuthorCreate} />
            <Route exact path="/authors" component={Authors}/>
            <Route path="/authors/:id" component={Author} />
            <Route exact path="/books/create" component={BookCreate} />
            <Route path="/books/:id" component={Book} />
            <Route exact path="/books" component={Books} /> 
            <Route exact path="/bindings/create" component={BindingCreate} />
            <Route path="/bindings/:id" component={Binding} />
            <Route exact path="/bindings" component={Bindings} /> 
            <Route component={NoMatch}/>
        </Switch>
    </section>
)

export default Main;