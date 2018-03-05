import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import { bindActionCreators} from 'redux'
import AuthorsTable from '../components/authorsTable';
import {AuthorActions} from '../actions';
import {AuthorRequestActions} from '../actions/requests';
import '../styles/authors.scss'

class AuthorsContainer extends React.Component {
    componentWillMount() {
        this.props.authorActions.fetchAuthors({});
    }

    handleSortChange(column, direction) {
        this.props.authorRequestActions.addAuthorsSorter({
            orderField: column,
            orderDirection: direction ? "DESC" : "ASC"
        });
        this.props.authorActions.fetchAuthors({});
    }

    handleFilterChange(arg) {
        const filterObj = {}
        arg.forEach((filter) => {
            filterObj[filter.id] = filter.value;
        })
        this.props.authorRequestActions.addAuthorsFilter(filterObj);
        this.props.authorActions.fetchAuthors({});
    }

    handlePaginationChange(arg) {
        const pagination = {
            limit: 10,
            offset: arg * 10
        }
        this.props.authorRequestActions.addAuthorsPagination(pagination);
        this.props.authorActions.fetchAuthors({});
    }

    handleAuthorSelect(state, rowInfo) {
        return {
          onClick: ()=> this.props.history.push(`/authors/${rowInfo.original.id}`)
        }
      }

    render() {
        return (
            <div className="authorsPage">
                <Link className="authorsPage__link" to='authors/create'>
                    +
                </Link>
                <AuthorsTable authors={this.props.authors}
                    numItems= {this.props.numItems}
                    isFetching = {this.props.isFetching}
                    handleSortChange = {this.handleSortChange = this.handleSortChange.bind(this)}
                    handleFilterChange = {this.handleFilterChange = this.handleFilterChange.bind(this)}
                    handlePaginationChange = {this.handlePaginationChange = this.handlePaginationChange.bind(this)}
                    handleAuthorSelect = {this.handleAuthorSelect = this.handleAuthorSelect.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { authors: state.authors.items,
             isFetching: state.authors.isFetching,
             numItems: state.authors.numItems}
}

function mapDispatchToProps(dispatch) {
    return {
        authorActions: bindActionCreators(AuthorActions, dispatch),
        authorRequestActions: bindActionCreators(AuthorRequestActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorsContainer))