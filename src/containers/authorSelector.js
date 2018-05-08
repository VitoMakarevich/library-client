import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {AuthorActions} from '../actions';
import {AuthorRequestActions} from '../actions/requests';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import '../styles/authorSelector.scss'

class AuthorSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            authorId: null
        }
        this.handleId = props.handleId;
        this.handleAuthorIdChange = this.handleAuthorIdChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.props.authorRequestActions.resetAuthorsRequest();
        this.props.authorActions.fetchAuthors();
    }

    handleAuthorIdChange (e) {
        this.setState({
            authorId: e.value
        });
        this.handleId(e);
    }

    handleInputChange (inputValue) {
        if(inputValue.length) {
            this.props.authorRequestActions.addAuthorsFilter({lastName: inputValue})
            this.props.authorActions.fetchAuthors();
        }
    }

    render(){
        return (
            <Select
                className="author__select"
                name="form-field-name"
                value = {this.state.authorId}
                onChange = {this.handleAuthorIdChange}
                onInputChange = {this.handleInputChange}
                options={this.props.authors}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authorActions: bindActionCreators(AuthorActions, dispatch),
        authorRequestActions: bindActionCreators(AuthorRequestActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.authors.isFetching,
        authors: state.authors.items.map((author) => {
            return {
                value: author.id,
                label: `${author.firstName} ${author.lastName}`
            }
        })
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthorSelector));