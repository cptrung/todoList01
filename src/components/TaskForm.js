import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import * as actions from "./../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      name: "",
      level: "Medium"
    };
  }

  onSubmit = fields => {
    if (!fields._id ) {
      this.props.AddTaskRequest(fields);
      this.props.closeForm();
    } else {
      this.props.UpdateTaskRequest(fields);
      this.props.closeForm();
    }
  };

  // rest all filed form

  onClearFields = () => {
    this.setState({
      _id: "",
      name: "",
      level: "Medium"
    });
  };
  

  // UNSAFE_componentWillMount() {
  //   if (this.props.editing && this.props.editing._id != null) {
  //     this.setState({
  //       _id: this.props.editing._id,
  //       name: this.props.editing.name,
  //       level: this.props.editing.level
  //     });
  //   } else {
  //     this.onClearFields();
  //   }
  // }


  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps && nextProps.editing) {
  //     this.setState({
  //       _id: nextProps.editing._id,
  //       name: nextProps.editing.name,
  //       level: nextProps.editing.level
  //     });
  //   } else {
  //     this.onClearFields();
  //   }
  // }
  static getDerivedStateFromProps(props, state){
      if (props && props.editing) {
      // this.setState({
      //   _id: props.editing._id,
      //   name: props.editing.name,
      //   level: props.editing.level
      // });
      return {
        _id: props.editing._id,
        name: props.editing.name,
        level: props.editing.level
      }
    } else {
      this.onClearFields();
      return null;
    }
  }


  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={this.state}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required(" Name is required")
            .trim()
            .min(3, "Name must be at least 3 characters")
        })}
        onSubmit={this.onSubmit}
        render={({ errors, status, touched }) => (
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">
                {this.state._id ? "Edit Item" : "Add Item"}
              </h3>
              <h3
                onClick={this.props.closeForm}
                className="panel-title custom-times"
              >
                x
              </h3>
            </div>
            <div className="panel-body">
              <Form>
                <div className="form-group">
                  {touched.name && errors.name && (
                    <label className="custom-lable">{errors.name}</label>
                  )}
                  <br />
                  <label>Name :</label>
                  <Field name="name" type="text" className="form-control" />
                </div>
                <label>Level :</label>
                <Field component="select" className="form-control" name="level">
                  <option value="Medium">Medium</option>
                  <option value="Small">Small</option>
                  <option value="Hight">Hight</option>
                </Field>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-success ">
                    Submit
                  </button>
                  &nbsp;
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.props.closeForm}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    isDisplayForm: state.isDisplayForm,
    editing: state.tasks.editing
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
    AddTaskRequest: task => {
      dispatch(actions.AddTaskRequest(task));
    },
    UpdateTaskRequest: task => {
      dispatch(actions.UpdateTaskRequest(task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
