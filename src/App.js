import React, { Component } from 'react';

import TaskList from './components/TaskList';
import TaskControl from './components/TaskControl';
import TaskForm from './components/TaskForm';

import './App.css';

class App extends Component {

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
                 <TaskControl/>
                  {/* button add item */}
                  <div className="col-xs-5">
                     <button type="button" className="btn btn-info btn-block">Add item</button>
                  </div>
               </div>
              <TaskList/>
               {/* form add or eidit */}
               <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                     <div className="panel panel-info">
                        <div className="panel-heading">
                           <h3 className="panel-title">Add Item</h3>
                           <h3 className="panel-title custom-times">x</h3>
                        </div>
                        {/* task form */}
                       <TaskForm/>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      );
   }
}

export default App;
