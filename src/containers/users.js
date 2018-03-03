import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import { bindActionCreators} from 'redux'
import UsersTable from '../components/usersTable';
import {UserActions} from '../actions';
import {UserRequestActions} from '../actions/requests';

class UsersContainer extends React.Component {
    componentWillMount() {
        this.props.userActions.fetchUsers({});
    }

    handleSortChange(column, direction) {
        this.props.userRequestActions.addUsersSorter({
            orderField: column,
            orderDirection: direction ? "DESC" : "ASC"
        });
        this.props.userActions.fetchUsers({});
    }

    handleFilterChange(arg) {
        const filterObj = {}
        arg.forEach((filter) => {
            filterObj[filter.id] = filter.value;
        })
        this.props.userRequestActions.addUsersFilter(filterObj);
        this.props.userActions.fetchUsers({});
    }

    handlePaginationChange(arg) {
        const pagination = {
            limit: 10,
            offset: arg * 10
        }
        this.props.userRequestActions.addUsersPagination(pagination);
        this.props.userActions.fetchUsers({});
    }

    handleUserSelect(state, rowInfo) {
        console.log(rowInfo)
        return {
          onClick: ()=> this.props.history.push(`${rowInfo.original.id}`)
        }
      }

    render() {
        return (
            <UsersTable users={this.props.users}
                numItems= {this.props.numItems}
                isFetching = {this.props.isFetching}
                handleSortChange = {this.handleSortChange = this.handleSortChange.bind(this)}
                handleFilterChange = {this.handleFilterChange = this.handleFilterChange.bind(this)}
                handlePaginationChange = {this.handlePaginationChange = this.handlePaginationChange.bind(this)}
                handleUserSelect = {this.handleUserSelect = this.handleUserSelect.bind(this)}/>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users.items,
             isFetching: state.users.isFetching,
             numItems: state.users.numItems}
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch),
        userRequestActions: bindActionCreators(UserRequestActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))