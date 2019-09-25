import { fork, put, takeLatest, delay } from "redux-saga/effects";
import { taskApi } from "./../ultils/taskApi";
import { authUserApi } from "./../ultils/authUserApi";
import * as types from "./../contants/actionTypes";
import * as actions from "./../actions/index";

// func fetch list
function* fetchTodoList() {
  try {
    const response = yield taskApi.fetchTodolist();
    const data = response.data ? response.data:[] ;
    yield put(actions.ShowLoading());
    yield put({
      type: types.API_CALL_SUCCESS,
      data
    });
    yield delay(500);
    yield put(actions.HiddenLoading());
  } catch (err) {
    yield put({
      type: types.API_CALL_FAILURE,
      err
    });
  }
  yield put(actions.HiddenLoading());
}

// func add task
function* addTask(action) {
  try {
    const { task } = action;
    const newTask = { name: task.name, level: task.level };
    yield put(actions.ShowLoading());
    yield delay(400);
    const response = yield taskApi.insertNewTaskAPI(newTask);
    console.log(response);
    yield put({
      type: types.ADD_TASK_SUCCESS,
      data: response.data
    });
    yield delay(500);
    yield put(actions.HiddenLoading());
  } catch (err) {
    yield put({
      type: types.ADD_TASK_FAILURE,
      err
    });
  }
}
// func delete task
function* DeleteTask(action) {
  try {
    const { _id } = action;
    console.log(action);
    yield taskApi.deleteTaskAPI(_id);

    yield put(actions.ShowLoading());
    yield delay(400);
    yield put({
      type: types.DELETE_TASK_SUCCESS,
      _id
    });
    yield delay(500);
    yield put(actions.HiddenLoading());
  } catch (err) {
    yield put({
      type: types.DELETE_TASK_FAILURE,
      err
    });
  }
}

// func update task
function* UpdateTask(action) {
  try {
    const { task } = action;

    yield taskApi.updateTaskAPI(task);

    yield put(actions.ShowLoading());
    yield delay(600);
    yield put({
      type: types.UPDATE_TASK_SUCCESS,
      task: action.task
    });

    yield put(actions.HiddenLoading());
  } catch (err) {
    yield put({
      type: types.UPDATE_TASK_FAILURE,
      err
    });
  }
}

// func editting
function* TaskEditing(action) {
  if (action) {
    yield put({
      type: types.TAKS_EDITING_SUCCESS,
      task: action.task
    });
  } else {
    yield put({
      type: types.TAKS_EDITING_FAILUR,
      error: ""
    });
  }
}
// func search
function* SeachTask(action) {
  if (action) {
    yield put({
      type: types.SEARCH_TASK_SUCCESS,
      keyword: action.keyword
    });
  } else {
    yield put({
      type: types.SEARCH_TASK_FAILURE,
      error: ""
    });
  }
}

// func sort task
function* SortTask(action) {
  if (action) {
    yield put({
      type: types.SORT_TASK_SUCCESS,
      sortName: action.sortName
    });
  } else {
    yield put({
      type: types.SORT_TASK_FAILURE,
      error: ""
    });
  }
}
// login

// const findIndex = (data, username) => {
//   var index = -1;
//   data.forEach((user, i) => {
//     if (user.username === username) {
//       index = i;
//     }
//   });
//   return index;
// };

//login
export function* authorize(action) {
  try {
    const res = yield authUserApi.getTokensAuth(action);
    var token = res.data.access_token;
    if (res.status === 200) {
 
      yield put(actions.SaveTokens(token));
      yield put(actions.LoginSuccess());
    } else {
      yield put(actions.SaveTokens((token = null)));
    }
   
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", error });
  }
}

//logout
export function* logout(action) {
  localStorage.removeItem("token");
  yield put(actions.DeleteTokens());
}

// all func watch actions
function* watchFectTodoList() {
  yield takeLatest(types.API_CALL_REQUEST, fetchTodoList);
}
function* watchAddTask() {
  yield takeLatest(types.ADD_TASK, addTask);
}
function* watchDeleteTask() {
  yield takeLatest(types.DELETE_TASK, DeleteTask);
}
function* watchTaskEditing() {
  yield takeLatest(types.TAKS_EDITING, TaskEditing);
}
function* watchUpdateTask() {
  yield takeLatest(types.UPDATE_TASK, UpdateTask);
}
function* watchSeachTask() {
  yield takeLatest(types.SEARCH_TASK, SeachTask);
}
function* watchSortTask() {
  yield takeLatest(types.SORT_TASK, SortTask);
}
function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUEST, authorize);
}
function* watchLogout() {
  yield takeLatest(types.LOGOUT, logout);
}

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchFectTodoList);
  yield fork(watchAddTask);
  yield fork(watchDeleteTask);
  yield fork(watchTaskEditing);
  yield fork(watchUpdateTask);
  yield fork(watchSeachTask);
  yield fork(watchSortTask);
  yield fork(watchLogout);
}
