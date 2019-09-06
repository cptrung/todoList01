import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from './../actions/index';


class TaskItem extends Component {

    onDeleteTask = (task) => {
       
        if(window.confirm('Confirm deleting the task tapping OK or Cancel if don’t want to delete the task')){
          this.props.DeleteTaskRequest(task._id);
        }
    }

    onEditTask = (task) => {
        this.props.openForm();
        this.props.TaskEditingRequest(task);    
    }

    render() {
        const {item, index} = this.props;
        var classLevel = item.level === 'Hight'? 'label-danger':item.level === 'Medium' ? 'label-info':'label-default'
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>
                    <span className={`label ${classLevel}`}>{item.level}</span>
                </td>
                <td>
                    <button onClick = {() => this.onEditTask(item)} type="button" className="btn btn-warning btn-sm mr">Edit</button>
                    <button onClick = {() => this.onDeleteTask(item)} type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {     
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
       DeleteTaskRequest: (_id) => { 
        dispatch(actions.DeleteTaskRequest(_id)) 
       },
       TaskEditingRequest: (task) => { 
        dispatch(actions.TaskEditingRequest(task)) 
       },
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
