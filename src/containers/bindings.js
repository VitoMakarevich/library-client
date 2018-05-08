import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import { bindActionCreators} from 'redux'
import BindingsTable from '../components/bindingsTable';
import {BindingActions} from '../actions';
import {BindingRequestActions} from '../actions/requests';
import '../styles/bindings.scss'

class BindingsContainer extends React.Component {
    componentWillMount() {
        this.props.bindingRequestActions.resetBindingsRequest();
        this.props.bindingActions.fetchBindings({});
    }

    handleSortChange(column, direction) {
        this.props.bindingRequestActions.addBindingsSorter({
            orderField: column,
            orderDirection: direction ? "DESC" : "ASC"
        });
        this.props.bindingActions.fetchBindings({});
    }

    handleFilterChange(arg) {
        const filterObj = {}
        arg.forEach((filter) => {
            filterObj[filter.id] = filter.value;
        })
        this.props.bindingRequestActions.addBindingsFilter(filterObj);
        this.props.bindingActions.fetchBindings({});
    }

    handlePaginationChange(arg) {
        const pagination = {
            limit: 10,
            offset: arg * 10
        }
        this.props.bindingRequestActions.addBindingsPagination(pagination);
        this.props.bindingActions.fetchBindings({});
    }

    handleBindingSelect(state, rowInfo) {
        return {
          onClick: ()=> this.props.history.push(`/bindings/${rowInfo.original.id}`)
        }
      }

    render() {
        return (
            <div className="bindingsPage">
                <Link className="bindingsPage__link" to='bindings/create'>
                    +
                </Link>
                <BindingsTable bindings={this.props.bindings}
                    numItems= {this.props.numItems}
                    isFetching = {this.props.isFetching}
                    handleSortChange = {this.handleSortChange = this.handleSortChange.bind(this)}
                    handleFilterChange = {this.handleFilterChange = this.handleFilterChange.bind(this)}
                    handlePaginationChange = {this.handlePaginationChange = this.handlePaginationChange.bind(this)}
                    handleBindingSelect = {this.handleBindingSelect = this.handleBindingSelect.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { bindings: state.bindings.items.map((binding) => {
                binding.createdAt = new Date(binding.createdAt).toLocaleString();
                binding.finishedAt = binding.finishedAt ? new Date(binding.finishedAt).toLocaleString() : undefined;
                return binding;
            }),
            isFetching: state.bindings.isFetching,
            numItems: state.bindings.numItems}
}

function mapDispatchToProps(dispatch) {
    return {
        bindingActions: bindActionCreators(BindingActions, dispatch),
        bindingRequestActions: bindActionCreators(BindingRequestActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BindingsContainer))