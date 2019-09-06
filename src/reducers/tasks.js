import * as types from './../contants/actionTypes';
import _ from 'lodash';
var initialState = [];
// func find index task in tasks
var findIndex = (tasks, id) => {
    var index = -1;
    tasks.forEach((task, i) => {
        if(task._id === id){
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
            console.log(action);
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
            console.log(action);
            var index = _.findIndex(state,(task) =>{
                return task._id === action.task._id
            })
            console.log([
                ...state.slice(0, index),
                {
                    ...action.task, name:action.task.name, level: action.task.level 
                },
                ...state.slice(index + 1)
            ]);
           
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
            console.log(action);
            return [...state];

        case types.DELETE_TASK_SUCCESS:
            console.log(action._id);
             return [
            ...state.slice(0, findIndex(state,action._id)),
            ...state.slice(findIndex(state,action._id) + 1)
            ]

        case types.DELETE_TASK_FAILURE:
            return [...state];
         
        default:
            return [...state];
    }
}
export default tasks;