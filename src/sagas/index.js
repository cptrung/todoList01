
import { fork, put, takeLatest, delay, call, cancelled, take, cancel } from 'redux-saga/effects'
import { api } from './api';
import * as types from './../contants/actionTypes';
import * as actions from './../actions/index';
import { fetchAllUser, fetchUserByID } from './../ultils/index';
import _ from 'lodash';

// func fetch list
function* fetchTodoList() {
	try {
		const response = yield (api.fetchTodolist());
		yield put(actions.ShowLoading());
		const data = response.data;
		yield put({
			type: types.API_CALL_SUCCESS,
			data
		})
		yield delay(500);
		yield put(actions.HiddenLoading());
	}
	catch (err) {
		yield put({
			type: types.API_CALL_FAILURE,
			err
		})
	}
	yield put(actions.HiddenLoading());
}

// func add task
function* addTask(action) {
	try {
		const { task } = action;
		yield put(actions.ShowLoading());
		const response = yield (api.insertNewTaskAPI(task));
		yield put({
			type: types.ADD_TASK_SUCCESS,
			data: response.data
		})
		yield delay(500);
		yield put(actions.HiddenLoading());
	}
	catch (err) {
		yield put({
			type: types.ADD_TASK_FAILURE,
			err
		})
	}
}

// func delete task
function* DeleteTask(action) {

	try {
		const { id } = action;
		const response = yield (api.deleteTaskAPI(id));
		yield put(actions.ShowLoading());
		yield put({
			type: types.DELETE_TASK_SUCCESS,
			id: response.data.id
		})
		yield delay(500);
		yield put(actions.HiddenLoading());
	}
	catch (err) {
		yield put({
			type: types.DELETE_TASK_FAILURE,
			err
		})
	}
}

// func update task
function* UpdateTask(action) {
	try {
		const { task } = action;
		const response = yield (api.updateTaskAPI(task));
		yield put(actions.ShowLoading());
		yield delay(600);
		yield put({
			type: types.UPDATE_TASK_SUCCESS,
			task: response.data
		})

		yield put(actions.HiddenLoading());
	}
	catch (err) {
		yield put({
			type: types.UPDATE_TASK_FAILURE,
			err
		})
	}
}

// func editting
function* TaskEditing(action) {
	if (action) {
		yield put({
			type: types.TAKS_EDITING_SUCCESS,
			task: action.task
		})
	}
	else {
		yield put({
			type: types.TAKS_EDITING_FAILUR,
			error: ''
		})
	}
}
// func search
function* SeachTask(action) {
	console.log(action);
	if (action) {
		yield put({
			type: types.SEARCH_TASK_SUCCESS,
			keyword: action.keyword
		})
	}
	else {
		yield put({
			type: types.SEARCH_TASK_FAILURE,
			error: ''
		})
	}
}

// func sort task
function* SortTask(action) {
	if (action) {
		yield put({
			type: types.SORT_TASK_SUCCESS,
			sortName: action.sortName
		})
	}
	else {
		yield put({
			type: types.SORT_TASK_FAILURE,
			error: ''
		})
	}
}
// login

const findIndex = (data, username) => {
	var index = -1;
	data.forEach((user, i) => {
		if (user.username === username) {
			index = i;
		}
	});
	return index;
}

//login
export function* authorize(action) {
	try {
		const res = yield fetchAllUser();
		const index = findIndex(res.data, action.username);
		const user = yield fetchUserByID(res.data[index].id);
		const { token } = user.data;
		if (user.data.username === action.username && user.data.password === action.password) {
			localStorage.setItem('token', token);
			yield put(actions.LoginSuccess());
			yield put(actions.SaveTokens(token));
		} else {
			yield put(actions.SaveTokens(token = null));
		}
	} catch (error) {
		yield put({ type: 'LOGIN_ERROR', error })
	}
	
}

//logout
export function* logout(action) {
	localStorage.removeItem('token');
	yield put(actions.DeleteTokens());

}

// all func watch actions
function* watchFectTodoList() {
	yield takeLatest(types.API_CALL_REQUEST, fetchTodoList)
}
function* watchAddTask() {
	yield takeLatest(types.ADD_TASK, addTask)
}
function* watchDeleteTask() {
	yield takeLatest(types.DELETE_TASK, DeleteTask)
}
function* watchTaskEditing() {
	yield takeLatest(types.TAKS_EDITING, TaskEditing)
}
function* watchUpdateTask() {
	yield takeLatest(types.UPDATE_TASK, UpdateTask)
}
function* watchSeachTask() {
	yield takeLatest(types.SEARCH_TASK, SeachTask)
}
function* watchSortTask() {
	yield takeLatest(types.SORT_TASK, SortTask)
}
function* watchLogin() {
	yield takeLatest(types.LOGIN_REQUEST, authorize)
}
function* watchLogout() {
	yield takeLatest(types.LOGOUT, logout)
}

export default function* rootSaga() {
	yield fork(watchFectTodoList);
	yield fork(watchAddTask);
	yield fork(watchDeleteTask);
	yield fork(watchTaskEditing);
	yield fork(watchUpdateTask);
	yield fork(watchSeachTask);
	yield fork(watchSortTask);
	yield fork(watchLogin);
	yield fork(watchLogout);

}

