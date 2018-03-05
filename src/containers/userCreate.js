import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {UserActions} from '../actions';

import '../styles/userCreate.scss'

class UserCreate extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: null,
            lastName: null,
            passportNumber: null,
            email: null
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleCreate(e){
        e.preventDefault();
        this.props.userActions.createUser(this.state);
        this.props.history.push(`/users`);
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
            <div className="user">
                <form className="user__form" onSubmit={this.handleCreate}>
                    <div className="form-group">
                        <label htmlFor="firstNameUser">First name</label>
                        <input required className="form-control" name="firstName" onChange={this.handleInputChange} placeholder="first name"/>
                        <label htmlFor="lastNameUser">Last name</label>
                        <input required className="form-control" name="lastName" onChange={this.handleInputChange}  placeholder="last name"/>
                        <label htmlFor="passportNumberUser">Passport number</label>
                        <input required className="form-control" name="passportNumber" onChange={this.handleInputChange}  placeholder="passport number"/>
                        <label htmlFor="emailUser">Email</label>
                        <input required type="email" className="form-control" name="email" onChange={this.handleInputChange} placeholder="email"/>
                    </div>
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCreate));