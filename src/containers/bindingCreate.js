import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {BindingActions} from '../actions';
import UserSelector from './userSelector';
import BookSelector from './bookSelector';


import '../styles/bindingCreate.scss'

class BindingCreate extends React.Component {
    constructor(){
        super();
        this.state = {
            bookId: null,
            userId: null
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleBookIdChange = this.handleBookIdChange.bind(this);
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
    }

    handleCreate(e){
        e.preventDefault();
        this.props.bindingActions.createBinding(this.state);
        this.props.history.push(`/bindings`);
    }

    handleBookIdChange(event) {
        const value = event.value;
        this.setState(Object.assign({}, this.state, {
            bookId: value
        }));
      }

      handleUserIdChange(event) {
        const value = event.value;
        this.setState(Object.assign({}, this.state, {
            userId: value
        }));
      }



    render(){
        return (
            <div className="binding">
                <form className="binding__form" onSubmit={this.handleCreate}>
                    <div className="form-group">
                        <label htmlFor="userIdAuthor">User</label>
                        <UserSelector id="userIdAuthor" handleId = {this.handleUserIdChange} />
                        <label htmlFor="bookIdAuthor">Book</label>
                        <BookSelector id="bookIdAuthor" handleId = {this.handleBookIdChange} />
                    </div>
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bindingActions: bindActionCreators(BindingActions, dispatch)
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.bindings.isFetching
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BindingCreate));