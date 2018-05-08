import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import { bindActionCreators} from 'redux'
import BooksTable from '../components/booksTable';
import {BookActions} from '../actions';
import {BookRequestActions} from '../actions/requests';
import '../styles/books.scss'

class BooksContainer extends React.Component {
    componentWillMount() {
        this.props.bookRequestActions.resetBooksRequest();
        this.props.bookActions.fetchBooks({});
    }

    handleSortChange(column, direction) {
        this.props.bookRequestActions.addBooksSorter({
            orderField: column,
            orderDirection: direction ? "DESC" : "ASC"
        });
        this.props.bookActions.fetchBooks({});
    }

    handleFilterChange(arg) {
        const filterObj = {}
        arg.forEach((filter) => {
            filterObj[filter.id] = filter.value;
        })
        this.props.bookRequestActions.addBooksFilter(filterObj);
        this.props.bookActions.fetchBooks({});
    }

    handlePaginationChange(arg) {
        const pagination = {
            limit: 10,
            offset: arg * 10
        }
        this.props.bookRequestActions.addBooksPagination(pagination);
        this.props.bookActions.fetchBooks({});
    }

    handleBookSelect(state, rowInfo) {
        return {
          onClick: ()=> this.props.history.push(`/books/${rowInfo.original.id}`)
        }
      }

    render() {
        return (
            <div className="booksPage">
                <Link className="booksPage__link" to='books/create'>
                    +
                </Link>
                <BooksTable books={this.props.books}
                    numItems= {this.props.numItems}
                    isFetching = {this.props.isFetching}
                    handleSortChange = {this.handleSortChange = this.handleSortChange.bind(this)}
                    handleFilterChange = {this.handleFilterChange = this.handleFilterChange.bind(this)}
                    handlePaginationChange = {this.handlePaginationChange = this.handlePaginationChange.bind(this)}
                    handleBookSelect = {this.handleBookSelect = this.handleBookSelect.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { books: state.books.items.map((book) => {
                book.createdAt = new Date(book.createdAt).toLocaleString();
                return book;
            }),
            isFetching: state.books.isFetching,
            numItems: state.books.numItems}
}

function mapDispatchToProps(dispatch) {
    return {
        bookActions: bindActionCreators(BookActions, dispatch),
        bookRequestActions: bindActionCreators(BookRequestActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BooksContainer))