import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class TaskSortControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortName: 0
        }
    }

    onChange = (e) => {
        this.props.sortTask(e.target.value);
        this.setState({
            sortName: e.target.value
        })
    }

    render() {
        const { sortName } = this.state;
        return (
            <div className="col-xs-4 ">
                <div className="row cutoms-button" >
                    <div className="custom-input">
                        <select
                            className="form-control"
                            name="sortName"
                            onChange={this.onChange}
                            value={this.state.sortName}
                        >
                            <option className="custom-font" value={0}>Sort by</option>
                            <option value={-1}>DESC</option>
                            <option value={1}>ASC</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-success custom-desc">{parseInt(sortName) === 0 ? 'SORT BY' : parseInt(sortName) === -1 ? 'NAME DESC' : 'NAME ASC'}</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return { 
        sortTask:(sortName) => {
            dispatch(actions.sortTask(sortName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);
