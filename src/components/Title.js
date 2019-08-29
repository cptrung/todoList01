import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class Title extends Component {

    logout = () => {
        if (window.confirm('Do you want logout account ?')) {
            this.props.Logout();
            this.props.redirectToLogin();
        }
    }

    render() {
        return (
            <div className="title">
                <h2>Project01-ToDo List</h2>
                <h3 className="custom-title-small">React JS</h3>
                <button type="button" className="btn btn-small  btn-default username" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        Logout: (keyword) => {
            dispatch(actions.Logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
