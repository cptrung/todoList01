import * as types from './../contants/actionTypes';

var initialState = 'all';

const sort = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASK:
            return state;
        case types.SORT_TASK_SUCCESS:
            return action.sortName;
        case types.SORT_TASK_FAILURE:
            return state;
        default:
            return state;
    }
}
export default sort;