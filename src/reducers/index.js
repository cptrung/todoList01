import { combineReducers } from 'redux';

import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editing from './editing';
import search from './search';
import sort from './sort'
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editing,
    search,
    sort
})
export default myReducer;