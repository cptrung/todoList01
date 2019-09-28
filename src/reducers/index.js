import { combineReducers } from 'redux';

import tasks from './tasks';
import loading from './loading';
import login from './login'
const myReducer = combineReducers({
    tasks,
    loading,
    login
})
export default myReducer;