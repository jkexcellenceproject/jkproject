import axios from 'axios';

import { FETCH_ARTICLES, FETCH_ARTICLE, FETCH_TUTORS } from './types';

export const fetchDatas = datas => {
	return {
		type: 'FETCH_DATAS',
		payload: datas
	};
};

export const fetchArticles = () => async dispatch => {
	const response = await axios.get(
		'http://localhost:8888/jk-wp/wp-json/wp/v2/posts'
	);
	console.log(response.data);
	dispatch({ type: FETCH_ARTICLES, payload: response.data });
};

export const fetchArticle = slug => async dispatch => {
	const response = await axios.get(
		`http://localhost:8888/jk-wp/wp-json/wp/v2/posts?slug=${slug}`
	);
	dispatch({ type: FETCH_ARTICLE, payload: response.data[0] });
};

export const fetchTutors = () => async dispatch => {
	const response = await axios.get(
		'http://localhost:8888/jk-wp/wp-json/wp/v2/tutors?_embed'
	);
	console.log(response.data);
	dispatch({ type: FETCH_TUTORS, payload: response.data });
};
