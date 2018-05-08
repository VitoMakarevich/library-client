import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {BookActions} from '../actions';
import {BookRequestActions} from '../actions/requests';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import '../styles/bookSelector.scss'

class BookSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            bookId: null
        }
        this.handleId = props.handleId;
        this.handleBookIdChange = this.handleBookIdChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.props.bookRequestActions.resetBooksRequest();
        this.props.bookActions.fetchBooks();
    }

    handleBookIdChange (e) {
        this.setState({
            bookId: e.value
        });
        this.handleId(e);
    }

    handleInputChange (inputValue) {
        if(inputValue.length) {
            this.props.bookRequestActions.addBooksFilter({name: inputValue})
            this.props.bookActions.fetchBooks();
        }
    }

    render(){
        return (
            <Select
                required
                className="book__select"
                name="form-field-name"
                value = {this.state.bookId}
                onChange = {this.handleBookIdChange}
                onInputChange = {this.handleInputChange}
                options={this.props.books}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bookActions: bindActionCreators(BookActions, dispatch),
        bookRequestActions: bindActionCreators(BookRequestActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.books.isFetching,
        books: state.books.items.map((book) => {
            return {
                value: book.id,
                label: `${book.name}`
            }
        })
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSelector));