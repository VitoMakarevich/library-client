import React from 'react';
import AuthorComponent from '../components/author';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {AuthorActions} from '../actions';
import Loading from '../components/loading';
import NoMatch from '../components/noMatch';

let id;

class Author extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: null,
            lastName: null
        }
    }

    componentWillMount(){
        id = this.props.match.params.id;
        this.props.authorActions.fetchAuthor(id);
    }

    componentWillReceiveProps(newProps){
        if(newProps.author){
            this.setState({
                firstName: newProps.author.firstName,
                lastName: newProps.author.lastName
            })
        }
    }

    handleDelete() {
        this.props.authorActions.deleteAuthorById(id);
        this.props.history.push(`/authors`)
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.authorActions.updateAuthorById(id, this.state);
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

    render() {
        console.log(this.state)
        if(this.props.isFetching){
            return <Loading /> 
        }
        else if(!this.props.author)
            return <NoMatch />
        else {
            
            return (
                <AuthorComponent author={this.props.author}
                    handleUpdate = {this.handleUpdate = this.handleUpdate.bind(this)}
                    handleDelete = {this.handleDelete = this.handleDelete.bind(this)}
                    handleFirstNameChange = {this.handleFirstNameChange = this.handleFirstNameChange.bind(this)}
                    handleLastNameChange = {this.handleLastNameChange = this.handleLastNameChange.bind(this)}
                />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.authors.isFetching,
        author: state.authors.byId[Number(id)]
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        authorActions: bindActionCreators(AuthorActions, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Author));