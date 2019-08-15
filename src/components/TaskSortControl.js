import React, { Component } from 'react';


class TaskSearchControl extends Component {

    render() {
        return (
            <div className="col-xs-4 ">
                <div className="row cutoms-button" >
                    <div className="custom-input">
                        <select className="form-control" required="required">
                            <option className="custom-font" value="all">Sort by</option>
                            <option value="1">DESC</option>
                            <option value="0">INC</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-success custom-desc">NAME-DESC</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskSearchControl;
