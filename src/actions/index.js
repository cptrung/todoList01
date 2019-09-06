
import * as types from  './../contants/actionTypes';

// fetch api
export const CallAPIRequest = () => {
    return {
        type:types.API_CALL_REQUEST }
}

export const CallApiSuccess = (data) => {
    return {
        type:types.API_CALL_SUCCESS,
        data
    }
}
export const CallApiFail = (error) => {
    return {
        type:types.API_CALL_FAILURE,
        error
    }
}

// add task

export const AddTaskRequest = (task) => {
    return {
        type:types.ADD_TASK,
        task
    }
}

export const AddTaskSuccess = (data) => {
    return {
        type:types.ADD_TASK_SUCCESS,
        data
    }
}

export const AddTaskFail = (error) => {
    return {
        type:types.ADD_TASK_FAILURE,
        error
    }
}

// delete a task in listask

export const DeleteTaskRequest = (_id) => {
    return {
        type:types.DELETE_TASK,
        _id
    }
}

export const DeleteTaskSuccess = (_id) => {
    return {
        type:types.DELETE_TASK_SUCCESS,
        _id
    }
}

export const DeleteTaskFail = (error) => {
    return {
        type:types.DELETE_TASK_FAILURE,
        error
    }
}

// taskedtiting

export const TaskEditingRequest = (task) => {
    return {
        type:types.TAKS_EDITING,
        task
    }
}

export const TaskEditingSuccess = (task) => {
    return {
        type:types.TAKS_EDITING_SUCCESS,
        task
    }
}

export const TaskEditingFail = (error) => {
    return {
        type:types.TAKS_EDITING_FAILUR,
        error
    }
}

// edit task
export const UpdateTaskRequest = (task) => {
    return {
        type:types.UPDATE_TASK,
        task
    }
}

export const UpdateTaskSuccess = (task) => {
    return {
        type:types.UPDATE_TASK_SUCCESS,
        task
    }
}

export const UpdateTaskFail = (error) => {
    return {
        type:types.UPDATE_TASK_FAILURE,
        error
    }
}
// search task
export const searchTask = (keyword) => {
    return {
        type:types.SEARCH_TASK,
        keyword
    }
}
export const searchTaskSuccess = (keyword) => {
    return {
        type:types.SEARCH_TASK_SUCCESS,
        keyword
    }
}
export const searchTaskFail = (err) => {
    return {
        type:types.SEARCH_TASK_FAILURE,
        err
    }
}
// display form

export const toggleForm = () => {
    return {
        type:types.TOGGLE_FORM
    }
}

export const closeForm = () => {
    return {
        type:types.CLOSE_FORM
    }
}

export const openForm = () => {
    return {
        type:types.OPEN_FORM
    }
}

// sort task
export const sortTask = (sortName) => {
    return {
        type:types.SORT_TASK,
        sortName
    }
}

export const sortTaskSuccess = (sortName) => {
    return {
        type:types.SORT_TASK_SUCCESS,
        sortName
    }
}

export const sortTaskFail = (err) => {
    return {
        type:types.SORT_TASK_FAILURE,
        err
    }
}

export const ShowLoading = () => {
    return {
        type:types.SHOW_LOADING
    }
}
export const HiddenLoading = () => {
    return {
        type:types.HIDDEN_LOADING
    }
}

//login
export const LoginRequest = (username,password) => {
    return {
        type:types.LOGIN_REQUEST,
        username,
        password
    }
}

export const LoginSuccess = () => {
    return {
        type:types.LOGIN_SUCCESS,
       
    }
}

export const LoginError = (err) => {
    return {
        type:types.LOGIN_ERROR,
        err
    }
}

export const SaveTokens = (token) => {
    console.log(token);
    return {
        type:types.SAVE_TOKEN,
        token
    }
}

//logout
export const Logout = () => {
    return {
        type:types.LOGOUT
    }
}

export const DeleteTokens = () => {
    return {
        type:types.DELETE_TOKEN
    }
}

