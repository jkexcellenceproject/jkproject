import axios from 'axios';
<<<<<<< HEAD
import { FETCH_ARTICLES, FETCH_ARTICLE, FETCH_TUTORS } from './types';
=======
import { FETCH_ARTICLES } from './types';
>>>>>>> Modified EnglishArticleCard.js

export const fetchDatas = datas => {
	return {
		type: 'FETCH_DATAS',
		payload: datas
	};
};

export const fetchArticles = () => async dispatch => {
<<<<<<< HEAD
	const response = await axios.get('http://wordpress.local.com:8888/wordpress/jk-wp/wp-json/wp/v2/posts');
	console.log(response.data);
	dispatch({ type: FETCH_ARTICLES, payload: response.data });
};

export const fetchArticle = slug => async dispatch => {
    const response = await axios.get(`http://wordpress.local.com:8888/wordpress/jk-wp/wp-json/wp/v2/posts?slug=${slug}`);
    dispatch({ type: FETCH_ARTICLE, payload: response.data[0] });
};

export const fetchTutors = () => async dispatch => {
	const response = await axios.get('http://wordpress.local.com:8888/wordpress/jk-wp/wp-json/wp/v2/tutors?_embed');
	console.log(response.data);
	dispatch({ type: FETCH_TUTORS, payload: response.data });
}
=======
	const response = await axios.get('/api/articles');

	dispatch({ type: FETCH_ARTICLES, payload: response.data });
};
>>>>>>> Modified EnglishArticleCard.js
