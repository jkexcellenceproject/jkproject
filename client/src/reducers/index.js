import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import { reducer as reduxForm } from 'redux-form';

import tutorsReducer from './tutorsReducer';

const carouselDatasReducer = () => {
	return [
		{
			name: 'Kano',
			age: 24,
			image: `${process.env.PUBLIC_URL}/images/avator1.png`
		},
		{
			name: 'Flordelis',
			age: 56,
			image: `${process.env.PUBLIC_URL}/images/avator2.png`
		},
		{
			name: 'Hijikata',
			age: 12,
			image: `${process.env.PUBLIC_URL}/images/avator3.png`
		}
	];
};

export default combineReducers({
	datas: carouselDatasReducer,
	articles: articlesReducer,
	tutors: tutorsReducer,
	form: reduxForm
});
