import React, { Component } from 'react';


class TaskList extends Component {

   render() {
      return ( 
         <tbody>
            {this.props.children}
       </tbody>
      );
   }
}

export default  TaskList;
