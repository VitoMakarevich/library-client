import React from 'react';
import UserComponent from '../components/user';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {UserActions} from '../actions';
import Loading from '../components/loading';
import NoMatch from '../components/noMatch';

let id;

class User extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: null,
            lastName: null,
            passportNumber: null,
            email: null
        }
    }

    componentWillMount(){
        id = this.props.match.params.id;
        this.props.userActions.fetchUser(id);
    }

    componentWillReceiveProps(newProps){
        if(newProps.user){
            this.setState({
                firstName: newProps.user.firstName,
                lastName: newProps.user.lastName,
                email: newProps.user.email,
                passportNumber: newProps.user.passportNumber
            })
        }
    }

    handleDelete() {
        this.props.userActions.deleteUserById(id);
        this.props.history.push(`/users`)
    }

    handleUpdate() {
        this.props.userActions.updateUserById(id, this.state);
    }

    handleFirstNameChange(e) {
        this.setState(
            Object.assign({}, this.state, {
                firstName: e.target.value
            })
        )
    }

    handleLastNameChange(e) {
        this.setState(
            Object.assign({}, this.state, {
                lastName: e.target.value
            })
        )
    }

    handleEmailChange(e) {
        this.setState(
            Object.assign({}, this.state, {
                email: e.target.value
            })
        )
    }

    handlePassportNumberChange(e) {
        this.setState(
            Object.assign({}, this.state, {
                passportNumber: e.target.value
            })
        )
    }

    render() {
        console.log(this.state)
        if(this.props.isFetching){
            return <Loading /> 
        }
        else if(!this.props.user)
            return <NoMatch />
        else {
            
            return (
                <UserComponent user={this.props.user}
                    handleUpdate = {this.handleUpdate = this.handleUpdate.bind(this)}
                    handleDelete = {this.handleDelete = this.handleDelete.bind(this)}
                    handleFirstNameChange = {this.handleFirstNameChange = this.handleFirstNameChange.bind(this)}
                    handleLastNameChange = {this.handleLastNameChange = this.handleLastNameChange.bind(this)}
                    handlePassportNumberChange = {this.handleFirstNameChange = this.handleFirstNameChange.bind(this)}
                    handleEmailChange = {this.handleEmailChange = this.handleEmailChange.bind(this)}
                />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        user: state.users.byId[Number(id)]
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));