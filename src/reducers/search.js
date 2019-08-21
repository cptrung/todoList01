import * as types from './../contants/actionTypes';

var initialState = '';

const search = (state = initialState, action) => {
    switch (action.type) {
       case types.SEARCH_TASK:
            return state;
        case types.SEARCH_TASK_SUCCESS:
           	return action.keyword;
        case types.SEARCH_TASK_FAILURE:
        	return state;
        default:
            return state;
    }
}
export default search;