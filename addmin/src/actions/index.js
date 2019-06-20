import axios from 'axios';
import { FETCH_ARTICLES, EDIT_ARTICLE } from './types';

export const fetchArticles = () => async dispatch => {
    const response = await axios.get('/api/articles');

    dispatch({ type: FETCH_ARTICLES, payload: response.data });
};

export const editArticle = id => async dispatch => {
    const response = await axios.post(`/api/article/edit/${id}`, {id});
    dispatch({ type: EDIT_ARTICLE, payload: response.data });
}

export const submitArticle = (values, history) => async dispatch => {
    await axios.post('/api/article/submit', {values});
    history.push('/');
}

export const submitArticleEdit = (id, values, history) => async dispatch => {
    await axios.post('/api/article/editSubmit', {id, values});
    history.push('/');
}

export const deleteArticle = (id, history) => async dispatch => {
    await axios.post(`/api/article/delete/`, {id});
}