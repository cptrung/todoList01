import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';

import TaskList from './components/TaskList';
import TaskControl from './components/TaskControl';
import TaskForm from './components/TaskForm';

import './App.css';

class App extends Component {


   toggleFormTask = () => {
    if(this.props.editing && this.props.editing.id !== ''){
      this.props.openForm();

    }else{
       this.props.toggleForm();
    }
    this.props.onClearTaskFileds({
      id:"",
      name: '',
      level: 'Medium'
    })

   }
   render() {
      
      return (
         <div className="App">
            <div className="container">
               <div className="title">
                  <h2>Project01-ToDo List</h2>
                  <h3 className="custom-title-small">React JS</h3>
               </div>
               <hr />
               <div className="row">
                  <TaskControl />
                  {/* button add item */}
                  <div className="col-xs-5">
                     <button onClick={this.toggleFormTask} type="button" className="btn btn-info btn-block">Add item</button>
                  </div>
               </div>
               <TaskList />
               {/* form add or eidit */}
               <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                     {/* task form */}
                     {this.props.isDisplayForm ? <TaskForm /> : ''}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      tasks: state.tasks,
      isDisplayForm: state.isDisplayForm,
      editing:state.editing
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
       onClearTaskFileds: (task) => {
          dispatch(actions.editask(task))
       }

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
