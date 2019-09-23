import * as types from './../contants/actionTypes';

var initialState = {
    login: {
    token: null,
    status: 'Logged out',
    isAuthenticated:false
  }
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
          return {...state, status: types._LOGGED_IN,isAuthenticated:true};

        case types.SAVE_TOKEN:
          localStorage.setItem('token', action.token);
          return {...state, token: action.token,isAuthenticated:true};

        case types.DELETE_TOKEN:
          return {...state, token: null};

        case types.LOGOUT:    
          return {...state, status: types._LOGGED_OUT,isAuthenticated:false};

        case types.LOGIN_ERROR: 
          return {...state, status: types._LOGIN_ERROR};
          
        default:
          return state;
      }
}
export default login;