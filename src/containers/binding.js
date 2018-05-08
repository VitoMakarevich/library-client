import React from 'react';
import BindingComponent from '../components/binding';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {BindingActions} from '../actions';
import Loading from '../components/loading';
import NoMatch from '../components/noMatch';

let id;

class Binding extends React.Component {

    constructor() {
        super();
    }

    componentWillMount(){
        id = this.props.match.params.id;
        this.props.bindingActions.fetchBinding(id);
    }

    componentWillReceiveProps(newProps){
        if(newProps.binding){
            this.setState({
                firstName: newProps.binding.firstName,
                lastName: newProps.binding.lastName
            })
        }
    }

    handleDelete() {
        this.props.bindingActions.deleteBindingById(id);
        this.props.history.push(`/bindings`)
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.bindingActions.updateBindingById(id);
    }

    render() {
        if(this.props.isFetching){
            return <Loading /> 
        }
        else if(!this.props.binding)
            return <NoMatch />
        else {
            
            return (
                <BindingComponent binding={this.props.binding}
                    handleUpdate = {this.handleUpdate = this.handleUpdate.bind(this)}
                    handleDelete = {this.handleDelete = this.handleDelete.bind(this)}
                />
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.bindings.isFetching,
        binding: state.bindings.byId[Number(id)]
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        bindingActions: bindActionCreators(BindingActions, dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Binding));