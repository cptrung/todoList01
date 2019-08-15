import React, { Component } from 'react';

class TaskForm extends Component {

    render() {
        return (
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <label>Levele :</label>
                    <select className="form-control" required="required">
                        <option value="1">small</option>
                        <option value="2">medium</option>
                        <option value="3">hight</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-success ">Submit</button>&nbsp;
                         <button type="submit" className="btn btn-warning">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TaskForm;
