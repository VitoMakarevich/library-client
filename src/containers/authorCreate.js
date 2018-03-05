import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {AuthorActions} from '../actions';

import '../styles/authorCreate.scss'

class AuthorCreate extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: null,
            lastName: null
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleCreate(e){
        e.preventDefault();
        console.log(this.props)
        this.props.authorActions.createAuthor(this.state);
        this.props.history.push(`/authors`);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render(){
        return (
            <div className="author">
                <form className="author__form" onSubmit={this.handleCreate}>
                    <div className="form-group">
                        <label htmlFor="firstNameAuthor">First name</label>
                        <input required className="form-control" name="firstName" onChange={this.handleInputChange} placeholder="first name"/>
                        <label htmlFor="lastNameAuthor">Last name</label>
                        <input required className="form-control" name="lastName" onChange={this.handleInputChange}  placeholder="last name"/>
                    </div>
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(1)
    return {
        authorActions: bindActionCreators(AuthorActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.authors.isFetching
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorCreate));