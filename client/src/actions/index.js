import axios from 'axios';
import { FETCH_ARTICLES } from './types';

export const fetchDatas = datas => {
	return {
		type: 'FETCH_DATAS',
		payload: datas
	};
};

export const fetchArticles = () => async dispatch => {
	const response = await axios.get('/api/articles');

	dispatch({ type: FETCH_ARTICLES, payload: response.data });
};
