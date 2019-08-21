import * as types from './../contants/actionTypes';

var initialState = {};

const editing = (state = initialState, action) => {
    switch (action.type) {
        case types.TAKS_EDITING:
 
            return {...state}
        case types.TAKS_EDITING_SUCCESS:
      		
        	return action.task
        	 case types.TAKS_EDITING_FAILUR:
        	return {...state}
        default:
            return state;
    }
}
export default editing;