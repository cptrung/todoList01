import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

import TaskItem from "./../components/TaskItem";
import TaskList from "./../components/TaskList";

class TaskListPage extends Component {
  showListItem = listItem => {
    const keyword = this.props.search;
    const sortName = this.props.sort;
    let result = null;
    if (listItem.length > 0) {
      // search item
      if (keyword !== "") {
        listItem = listItem.filter(task => {
          return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
      }
      // sort item by name
      listItem.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA > nameB) return sortName;
        else if (nameA < nameB) return -sortName;
        else return 0;
      });
      // foreach tasks
      result = listItem.map((item, index) => {
        return <TaskItem key={index} item={item} index={index} />;
      });
    }
    return result;
  };

  componentDidMount() {
    this.props.CallAPIRequest();
  }
  
  render() {
    const { tasks } = this.props.data;
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
              <TaskList>{this.showListItem(tasks)}</TaskList>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.tasks,
    search: state.tasks.keyword,
    sort: state.tasks.sort,
    login: state.login
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    CallAPIRequest: () => {
      dispatch(actions.CallAPIRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListPage);
