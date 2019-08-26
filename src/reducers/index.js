import { combineReducers } from 'redux';

import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import editing from './editing';
import search from './search';
import sort from './sort'
import loading from './loading';
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    editing,
    search,
    sort,
    loading
})
export default myReducer;