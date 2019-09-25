import * as types from "./../contants/actionTypes";
import _ from "lodash";
var initialState = {
  tasks: [],
  keyword: "",
  sort: "all",
  isDisplayForm: false,
  loading:false,
  editing: {}
};
// func find index task in tasks
var findIndex = (tasks, id) => {
  var index = -1;
  tasks.forEach((task, i) => {
    if (task._id === id) {
      index = i;
    }
  });
  return index;
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    // all list
    case types.API_CALL_REQUEST:
      return { ...state, loading:true };

    case types.API_CALL_SUCCESS:
      return { ...state, tasks: action.data,loading:false };

    case types.API_CALL_FAILURE:
      return {...state,loading:false};

    // add task
    case types.ADD_TASK:
      return { ...state};

    case types.ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.data]};

    case types.ADD_TASK_FAILURE:
      return { ...state};

    // update task
    case types.UPDATE_TASK:
      return { ...state,loading:true };

    case types.UPDATE_TASK_SUCCESS:
      var index = _.findIndex(state.tasks, task => {
        return task._id === action.task._id;
      });

      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          {
            ...action.task,
            name: action.task.name,
            level: action.task.level
          },
          ...state.tasks.slice(index + 1)
        ]
      };

    case types.UPDATE_TASK_FAILURE:
      return {...state};

    // delete task
    case types.DELETE_TASK:
      return { ...state,loading:false };

    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, findIndex(state.tasks, action._id)),
          ...state.tasks.slice(findIndex(state.tasks, action._id) + 1)
        ],
        loading:false
      };

    case types.DELETE_TASK_FAILURE:
      return { ...state };

    case types.SEARCH_TASK:
      return { ...state };
    case types.SEARCH_TASK_SUCCESS:
      return { ...state, keyword: action.keyword };
    case types.SEARCH_TASK_FAILURE:
      return { ...state };

    case types.SORT_TASK:
      return state;
    case types.SORT_TASK_SUCCESS:
      return { ...state, sort: action.sortName };
    case types.SORT_TASK_FAILURE:
      return state;


    case types.TAKS_EDITING:
      return { ...state };
    case types.TAKS_EDITING_SUCCESS:
      return {...state,editing:action.task};
    case types.TAKS_EDITING_FAILUR:
      return { ...state };

    case types.TOGGLE_FORM:
        return {...state,isDisplayForm:!state.isDisplayForm};
    case types.OPEN_FORM:
        return {...state,isDisplayForm:true};
    case types.CLOSE_FORM:
        return {...state,isDisplayForm:false};

    default:
      return { ...state };
      
  }
};
export default tasks;
