import React, { Component } from 'react';

import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl'


class TaskControl extends Component {

    render() {
        return (
            <div className="col-xs-7">
                <div className="row">
                    <TaskSearchControl />
                    <TaskSortControl />
                </div>
            </div>
        );
    }
}

export default TaskControl;
