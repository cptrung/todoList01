import * as types from './../contants/actionTypes';

var initialState = {
    showLoading:false
};

const loading = (state = initialState, action) => {
    switch (action.type) {
       case types.SHOW_LOADING:
            return { showLoading:true};
        case types.HIDDEN_LOADING:
            return {showLoading:false};
        
        default:
            return state;
    }
}
export default loading;