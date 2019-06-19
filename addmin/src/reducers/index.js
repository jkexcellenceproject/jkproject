import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    articles: articlesReducer,
    form: reduxForm
});