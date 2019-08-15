import React, { Component } from 'react';


class TaskItem extends Component {

    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>
                    <span className="label label-success">hight</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm mr">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
