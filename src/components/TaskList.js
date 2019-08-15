import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

   render() {
      return (
         <div className="row mt-30">
            <div className="panel panel-info panel-info-custom">
               <div className="panel-heading">List item</div>
               <div className="panel-body">
                  <table className="table table-bordered">
                     <thead>
                        <tr>
                           <th className="col-lg-1">#</th>
                           <th className="col-lg-7">Name</th>
                           <th className="col-lg-2">Level</th>
                           <th className="col-lg-2">action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <TaskItem/>
                        <TaskItem/>
                        <TaskItem/>     
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      );
   }
}

export default TaskList;
