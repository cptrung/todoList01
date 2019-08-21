
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

export const DeleteTaskRequest = (id) => {
    return {
        type:types.DELETE_TASK,
        id
    }
}

export const DeleteTaskSuccess = (id) => {
    return {
        type:types.DELETE_TASK_SUCCESS,
        id
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
    console.log(task);
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
