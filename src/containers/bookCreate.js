import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {BookActions} from '../actions';
import AuthorSelector from './authorSelector';

import '../styles/bookCreate.scss'

class BookCreate extends React.Component {
    constructor(){
        super();
        this.state = {
            name: null,
            description: null,
            authorId: null
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAuthorIdChange = this.handleAuthorIdChange.bind(this);
    }

    handleCreate(e){
        e.preventDefault();
        this.props.bookActions.createBook(this.state);
        this.props.history.push(`/books`);
    }

    handleAuthorIdChange(event) {
        const value = event.value;
        this.setState(Object.assign({}, this.state, {
            authorId: value
        }));
      }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState(Object.assign({}, this.state, {
          [name]: value
        }));
      }

    render(){
        return (
            <div className="book">
                <form className="book__form" onSubmit={this.handleCreate}>
                    <div className="form-group">
                        <label htmlFor="nameBook">Name</label>
                        <input required className="form-control" name="name" onChange={this.handleInputChange} placeholder="name"/>
                        <label htmlFor="DescriptionBook">Description</label>
                        <textarea required className="form-control" name="description" onChange={this.handleInputChange}  placeholder="description"/>
                        <AuthorSelector handleId = {this.handleAuthorIdChange} />
                    </div>
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bookActions: bindActionCreators(BookActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.books.isFetching
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookCreate));