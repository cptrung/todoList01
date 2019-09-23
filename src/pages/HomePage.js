import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./../actions/index";
import TaskListPage from "./TaskListPage";
import Title from "./../components/Title";
import TaskForm from "./../components/TaskForm";
import TaskControl from "./../components/TaskControl";
import Loading from "./../components/Loading";


class HomePage extends Component {
  toggleFormTask = () => {
    if (this.props.editing && this.props.editing.id !== "") {
      this.props.openForm();
    } else {
      this.props.toggleForm();
    }
    this.props.onClearTaskFileds({
      id: "",
      name: "",
      level: "Medium"
    });
  };
 
  UNSAFE_componentWillMount() {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.props.history.push("/login");
    }
  }

  redirectToLogin = () => {
    this.props.history.push("/login");
  };

 

  render() {
    return (
      <div className="container">
        {this.props.loading.showLoading ? <Loading /> : ""}
        <Title redirectToLogin={this.redirectToLogin} />
        <hr />
        <div className="row">
          <TaskControl />
          {/* button add item */}
          <div className="col-xs-5">
            <button
              onClick={this.toggleFormTask}
              type="button"
              className="btn btn-info btn-block"
            >
              Add item
            </button>
          </div>
        </div>
        <TaskListPage />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {/* task form */}
            {this.props.isDisplayForm ? <TaskForm /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    isDisplayForm: state.isDisplayForm,
    editing: state.editing,
    loading: state.loading
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleForm: () => {
      dispatch(actions.toggleForm());
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    },
    openForm: () => {
      dispatch(actions.openForm());
    },
    onClearTaskFileds: task => {
      dispatch(actions.TaskEditingRequest(task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
