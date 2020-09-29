import {combineReducers}  from 'redux'

import salaryReducer  from"./salaryReducer";

const salaryApp =combineReducers({salaryReducer});
export default salaryApp;