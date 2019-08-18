import React, { Component } from 'react';
import {connect} from 'react-redux';

import TaskItem from './TaskItem';

class TaskList extends Component {

   showListItem = (listItem) => {
      const keyword = this.props.search;
      const sortName = this.props.sort;
      let result = null;
      if(listItem.length > 0) {
         // search item
         if(keyword !== ''){
            listItem = listItem.filter((task) => {
               console.log(task.name.toLowerCase().indexOf(keyword));
               return task.name.toLowerCase().indexOf(keyword) === -1;
            })
         }
         // sort item by name
         listItem.sort((a, b) => {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if(nameA> nameB) return sortName;
            else if(nameA < nameB) return -sortName;
            else return 0;
        });
        // forach tasks
         result =  listItem.map( (item, index) => {
            return <TaskItem key = {index} item = {item} index = {index} />
         })
      }
      return result;   
   }

   render() {
      const {tasks} = this.props;
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
                        {this.showListItem(tasks)}   
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      tasks:state.tasks,
      search:state.search,
      sort:state.sort
   }
}
const mapDispatchToProps = (dispatch, props) => {
   return {

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
