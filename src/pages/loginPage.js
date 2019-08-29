import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/');
        }
    }

    onSubmit = (value) => {
        this.props.LoginRequest(value.username, value.password);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <Formik
                enableReinitialize
                initialValues={this.state}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required(' Username is required')
                        .trim(),
                    password: Yup.string()
                        .required(' Password is required')
                        .trim()
                        .min(3, 'Password must be at least 3 characters'),
                })}
                onSubmit={this.onSubmit}
                render={({ errors, status, touched, setFieldValue }) => (
                    <div className="login-customs container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="panel panel-success login-customs-mt">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Login</h3>
                                    </div>
                                    <div className="panel-body">
                                        <Form>
                                            <div className="form-group">
                                                {this.props.login.status && this.props.login.status !== 'Logged out' && <label className="custom-lable">{this.props.login.status}</label>}
                                                {touched.username && errors.username && <label className="custom-lable">{errors.username}</label>}
                                                <br />
                                                <label >User name</label>
                                                <Field
                                                    name='username'
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="User name"

                                                />
                                            </div>
                                            <div className="form-group">
                                                {touched.password && errors.password && <label className="custom-lable">{errors.password}</label>}
                                                <br />
                                                <label >Password</label>
                                                <Field
                                                    name='password'
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-10">Login</button>
                                            <button type="button" className="btn btn-warning mt-10 ml-10">Cannel</button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

        );
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        LoginRequest: (username, password) => {
            dispatch(actions.LoginRequest(username, password))
        },
        SaveTokens: (token) => {
            dispatch(actions.SaveTokens(token))
        },
        LoginSuccess: () => {
            dispatch(actions.LoginSuccess())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);

