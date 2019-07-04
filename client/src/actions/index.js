import axios from 'axios';
import { FETCH_ARTICLES } from './types';

export const fetchDatas = datas => {
	return {
		type: 'FETCH_DATAS',
		payload: datas
	};
};

export const fetchArticles = () => async dispatch => {
	const response = await axios.get(
		'http://localhost:8888/wordpress/jk-wp/wp-json/wp/v2/posts'
		// 'http://wordpress.local.com:8888/wordpress/jk-wp/wp-json/wp/v2/posts'
	);

	dispatch({ type: FETCH_ARTICLES, payload: response.data });
};
