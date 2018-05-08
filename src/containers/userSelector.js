import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {UserActions} from '../actions';
import {UserRequestActions} from '../actions/requests';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import '../styles/userSelector.scss'

class UserSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            userId: null
        }
        this.handleId = props.handleId;
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.props.userRequestActions.resetUsersRequest();
        this.props.userActions.fetchUsers();
    }

    handleUserIdChange (e) {
        this.setState({
            userId: e.value
        });
        this.handleId(e);
    }

    handleInputChange (inputValue) {
        if(inputValue.length) {
            this.props.userRequestActions.addUsersFilter({lastName: inputValue})
            this.props.userActions.fetchUsers();
        }
    }

    render(){
        return (
            <Select
                required
                className="user__select"
                name="form-field-name"
                value = {this.state.userId}
                onChange = {this.handleUserIdChange}
                onInputChange = {this.handleInputChange}
                options={this.props.users}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(UserActions, dispatch),
        userRequestActions: bindActionCreators(UserRequestActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        users: state.users.items.map((user) => {
            return {
                value: user.id,
                label: `${user.firstName} ${user.lastName}`
            }
        })
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSelector));