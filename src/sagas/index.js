
import { fork,put, takeLatest } from 'redux-saga/effects'
import { api } from './api';
import * as types from './../contants/actionTypes';

// func fetch list
function* fetchTodoList(){
	try{
		const response = yield (api.fetchTodolist());
    	const data = response.data;
		yield put({
			type:types.API_CALL_SUCCESS,
			data
		})
	} 
	catch(err){
		yield put({
			type:types.API_CALL_FAILURE,
			err
		})
	}
}

// func add task
function* addTask(action){
	try {
		const {task} = action;
		const response = yield (api.insertNewTaskAPI(task));
		yield put({
			type:types.ADD_TASK_SUCCESS,
			data : response.data
		})
	}
	catch(err){
		yield put({
			type:types.ADD_TASK_FAILURE,
			err
		})
	}
}

// func delete task
function* DeleteTask(action){

	try {
		const {id} = action;
		const response = yield (api.deleteTaskAPI(id));
		yield put({
			type:types.DELETE_TASK_SUCCESS,
			id : response.data.id
		})
	}
	catch(err){
		yield put({
			type:types.DELETE_TASK_FAILURE,
			err
		})
	}
}

// func update task
function* UpdateTask(action){
	try {
		const {task} = action;
		
		const response = yield (api.updateTaskAPI(task));
	
		yield put({
			type:types.UPDATE_TASK_SUCCESS,
			task : response.data
		})
	}
	catch(err){
		yield put({
			type:types.UPDATE_TASK_FAILURE,
			err
		})
	}
}

// func editting
function * TaskEditing(action){
	if(action){
		yield put({
		type:types.TAKS_EDITING_SUCCESS,
			task:action.task
		})
	}
	else{
		yield put({
		type:types.TAKS_EDITING_FAILUR,
			error:''
		})
	}	
}
// func search
function* SeachTask(action){
	console.log(action);
	if(action){
		yield put({
		type:types.SEARCH_TASK_SUCCESS,
		keyword:action.keyword
		})
	}
	else{
		yield put({
		type:types.SEARCH_TASK_FAILURE,
			error:''
		})
	}	
}

// func sort task
function* SortTask(action){
	if(action){
		yield put({
		type:types.SORT_TASK_SUCCESS,
		sortName:action.sortName
		})
	}
	else{
		yield put({
		type:types.SORT_TASK_FAILURE,
			error:''
		})
	}	
}

// all func watch actions
function* watchFectTodoList(){
	yield takeLatest(types.API_CALL_REQUEST,fetchTodoList)
}
function* watchAddTask(){
	yield takeLatest(types.ADD_TASK,addTask)
}
function* watchDeleteTask(){
	yield takeLatest(types.DELETE_TASK,DeleteTask)
}
function* watchTaskEditing(){
	yield takeLatest(types.TAKS_EDITING,TaskEditing)
}
function* watchUpdateTask(){
	yield takeLatest(types.UPDATE_TASK,UpdateTask)
}
function* watchSeachTask(){
	yield takeLatest(types.SEARCH_TASK,SeachTask)
}
function* watchSortTask(){
	yield takeLatest(types.SORT_TASK,SortTask)
}


export default function* rootSaga(){
	yield fork(watchFectTodoList);
	yield fork(watchAddTask);
	yield fork(watchDeleteTask);
	yield fork(watchTaskEditing);
	yield fork(watchUpdateTask);
	yield fork(watchSeachTask);
	yield fork(watchSortTask);
	
} 

