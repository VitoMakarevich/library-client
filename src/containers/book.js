import React from 'react';
import BookComponent from '../components/book';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {BookActions} from '../actions';
import Loading from '../components/loading';
import NoMatch from '../components/noMatch';

let id;

class Book extends React.Component {

    constructor() {
        super();
        this.state = {
            name: null,
            description: null
        }
    }

    componentWillMount(){
        id = this.props.match.params.id;
        this.props.bookActions.fetchBook(id);
    }

    componentWillReceiveProps(newProps){
        if(newProps.book){
            this.setState({
                name: newProps.book.name,
                description: newProps.book.description
            })
        }
    }

    handleDelete() {
        this.props.bookActions.deleteBookById(id);
        this.props.history.push(`/books`)
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.bookActions.updateBookById(id, this.state);
    }

    handleNameChange(e) {
        this.setState(
            Object.assign({}, this.state, {
                name: e.target.value
            })
        )
    }

    handleDescriptionChange(e) {
        this.setState(
            Object.assign({}, this.state, {
                description: e.target.value
            })
        )
    }

    render() {
        console.log(this.state)
        if(this.props.isFetching){
            return <Loading /> 
        }
        else if(!this.props.book)
            return <NoMatch />
        else {
            
            return (
                <BookComponent book={this.props.book}
                    handleUpdate = {this.handleUpdate = this.handleUpdate.bind(this)}
                    handleDelete = {this.handleDelete = this.handleDelete.bind(this)}
                    handleNameChange = {this.handleNameChange = this.handleNameChange.bind(this)}
                    handleDescriptionChange = {this.handleDescriptionChange = this.handleDescriptionChange.bind(this)}
                />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.books.isFetching,
        book: state.books.byId[Number(id)]
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        bookActions: bindActionCreators(BookActions, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book));