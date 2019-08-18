import * as types from './../contants/actionTypes';

var initialState = 'all';

const sort = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return action.sortName;
        
        default:
            return state;
    }
}
export default sort;