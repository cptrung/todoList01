import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik , Form, Field } from 'formik';
import * as Yup from 'yup';

import * as actions from './../actions/index';

class TaskForm extends Component {
    
   constructor(props) {
       super(props);
       this.state={
        id:"",
        name: '',
        level: 'Medium'
       }
   }

    onSubmit = ( fields ) => {

        if(fields.id === '') {
            this.props.AddTaskRequest(fields);
            this.props.closeForm();
        }else{
            this.props.UpdateTaskRequest(fields);
            this.props.closeForm();
        }
        
    }

    // rest all filed form

    onClearFields = () => {
        this.setState({
            id:"",
            name: '',
            level: 'Medium' 
        })
    }

    componentWillMount(){
        if(this.props.editing && this.props.editing.id != null ) { 
            this.setState({
                id:this.props.editing.id,
                name:this.props.editing.name,
                level:this.props.editing.level
            })
        }else{
            this.onClearFields();
        }
    }
    
    componentWillReceiveProps(nextProps){   
        if(nextProps && nextProps.editing) {
            this.setState({
                id:nextProps.editing.id,
                name:nextProps.editing.name,
                level:nextProps.editing.level
            })
        }else{
            this.onClearFields();
        }
        
    }

    render() {
        return (          
            <Formik
                enableReinitialize  
                initialValues={this.state}     
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required(' Name is required')
                        .trim()
                        .min(3, 'Name must be at least 3 characters'),       
                })}
                onSubmit={this.onSubmit}               
                render={({ errors, status, touched }) => (
                    <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.id  ? 'Edit Item': 'Add Item'}</h3>
                        <h3 onClick = {this.props.closeForm} className="panel-title custom-times">x</h3>
                    </div>
                    <div className="panel-body">
                        <Form>
                            <div className="form-group">
                                {touched.name && errors.name && <label className="custom-lable">{errors.name}</label>}     
                                <br/>
                                <label>Name :</label>
                            <Field 
                            name="name" 
                            type="text" 
                            className="form-control"
    
                            />
                            </div>
                            <label>Level :</label>
                            <Field component="select" className="form-control" name="level" >
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                                <option value="Hight">Hight</option>
                            </Field>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-success ">Submit</button>&nbsp;
                                <button type="submit" className="btn btn-warning" onClick = {this.props.closeForm} >Cancel</button>
                            </div>
                        </Form>
                    </div>
                </div>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
       tasks: state.tasks,
       isDisplayForm: state.isDisplayForm,
       editing:state.editing,
    }
 }
 const mapDispatchToProps = (dispatch, props) => {
    return {
       toggleForm: () => { 
          dispatch(actions.toggleForm()) 
       },
       closeForm: () => { 
          dispatch(actions.closeForm())
        },
       openForm: () => { 
          dispatch(actions.openForm()) 
       },
       AddTaskRequest: (task) => { 
        dispatch(actions.AddTaskRequest(task)) 
       },
       UpdateTaskRequest:(task) => {
        dispatch(actions.UpdateTaskRequest(task))
       }
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);