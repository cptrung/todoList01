import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from './../actions/index';


class TaskItem extends Component {

    onDeleteTask = (task) => {
        this.props.deleteTask(task.id);
    }

    onEditTask = (task) => {
        this.props.openForm();
        this.props.editask(task);
        
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
       deleteTask: (id) => { 
        dispatch(actions.deleteTask(id)) 
       },
       editask: (id) => { 
        dispatch(actions.editask(id)) 
       },
     
 
 
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
