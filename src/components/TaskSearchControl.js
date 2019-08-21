import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSearchControl extends Component {

    constructor(props)
     {
        super(props);
        this.state={
        keyword:''      
        }
    }

    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    onSearChTaks = () => {
        this.props.searchTask(this.state.keyword);
    }

    render() {
        return (
            <div className="col-xs-8">
                {/* input clear */}
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search"
                        onChange = {this.onChange}
                        value = {this.state.keyword}
                        name = 'keyword'
                    />
                    <div className="input-group-btn">
                        <button onClick = {this.onSearChTaks} className="btn btn-info" type="submit">
                            <span >Clear</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
 }
 const mapDispatchToProps = (dispatch, props) => {
    return {
         searchTask:(keyword)=> {
            dispatch(actions.searchTask(keyword))
        }
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(TaskSearchControl);
 