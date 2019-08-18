
import * as types from  './../contants/actionTypes';

export const listAll = () => {
    return {
        type:types.LIST_ALL
    }
}

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

export const addTask = (task) => {
    return {
        type:types.SAVE_TASK,
        task
    }
}

export const deleteTask = (id) => {
    return {
        type:types.DELETE_TASK,
        id
    }
}

export const editask = (task) => {
    return {
        type:types.EDIT_TASK,
        task
    }
}

export const searchTask = (keyword) => {
    return {
        type:types.SEARCH,
        keyword
    }
}
export const sortTask = (sortName) => {
    return {
        type:types.SORT,
        sortName
    }
}

