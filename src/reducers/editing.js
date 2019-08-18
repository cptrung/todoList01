import * as types from './../contants/actionTypes';

var initialState = {};

const isDisplayForm = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return  {...action.task};
        
        default:
            return state;
    }
}
export default isDisplayForm;