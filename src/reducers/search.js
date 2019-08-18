import * as types from './../contants/actionTypes';

var initialState = '';

const search = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;
        
        default:
            return state;
    }
}
export default search;