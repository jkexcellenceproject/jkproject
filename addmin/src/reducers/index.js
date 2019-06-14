import { combineReducers } from 'redux';
import blogsReducer from './blogsReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    blogs: blogsReducer,
    form: reduxForm
});