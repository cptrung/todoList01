import * as types from './../contants/actionTypes';
import  randomstring  from 'randomstring';

var initialState = [
    {
        id:1,
        name:'Tìm thấy mãnh vỡ máy bay ở Iran làm 66 người chết',
        level:'Hight'
    },
    {
        id:2,
        name:'Không còn cướp lộc xe hoa ở giáng sinh 2018',
        level:'Small'
    },
    {
        id:3,
        name:'Hơn 3700 người nhập viện vì đốt phao',
        level:'Medium'
    }
]

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
        case types.LIST_ALL:
            return [...state];

        case types.SAVE_TASK:
            if(action.task.id){   
                return [
                    ...state.slice(0, findIndex(state,action.task.id)),
                    {
                        ...action.task,
                        name:action.task.name,
                        level: action.task.level
                    },
                    ...state.slice(findIndex(state,action.task.id) + 1)
                ]
            }
            else{
                action.task.id = randomstring.generate(7);
                return [...state, action.task];
            }
           
        
        case types.DELETE_TASK:
            
                return [
                    ...state.slice(0, findIndex(state,action.id)),
                    ...state.slice(findIndex(state,action.id) + 1)
                    ]
                   
        default:
            return [...state];
    }
}
export default tasks;