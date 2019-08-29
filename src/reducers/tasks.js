import * as types from './../contants/actionTypes';
import _ from 'lodash';
var initialState = [];
// func find index task in tasks
var findIndex = (tasks, id) => {
    var index = -1;
    tasks.forEach((task, i) => {
        if(task.id === id){
            index = i;
        }
    });
    return index;
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        // all list 
        case types.API_CALL_REQUEST:
            return [];

        case types.API_CALL_SUCCESS:
            return action.data;

        case types.API_CALL_FAILURE:
            return [];
        
         // add task   
        case types.ADD_TASK:
            return [...state];

        case types.ADD_TASK_SUCCESS:
            return [
                ...state,
                action.data
            ];
        case types.ADD_TASK_FAILURE:
            return [...state];

        // update task
         case types.UPDATE_TASK:
            return [...state];

        case types.UPDATE_TASK_SUCCESS:
            // using lodash find id of task
            var index = _.findIndex(state,(task) =>{
                return task.id === action.task.id
            })
           
            return [
                ...state.slice(0, index),
                {
                    ...action.task, name:action.task.name, level: action.task.level 
                },
                ...state.slice(index + 1)
            ];
           


        case types.UPDATE_TASK_FAILURE:
            return [...state];

        // delete task
        case types.DELETE_TASK:
           
            return [...state];

        case types.DELETE_TASK_SUCCESS:
            
             return [
            ...state.slice(0, findIndex(state,action.id)),
            ...state.slice(findIndex(state,action.id) + 1)
            ]

        case types.DELETE_TASK_FAILURE:
            return [...state];
         
        default:
            return [...state];
    }
}
export default tasks;