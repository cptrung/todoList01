import React, { Component } from 'react';



class TaskSearchControl extends Component {

    render() {
        return (
            <div className="col-xs-8">
                {/* input clear */}
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" id="txtSearch" />
                    <div className="input-group-btn">
                        <button className="btn btn-info" type="submit">
                            <span >Clear</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskSearchControl;
