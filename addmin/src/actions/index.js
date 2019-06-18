import axios from 'axios';
import { FETCH_BLOGS, EDIT_BLOG } from './types';

export const fetchBlogs = () => async dispatch => {
    const response = await axios.get('/api/blogs');

    dispatch({ type: FETCH_BLOGS, payload: response.data });
};

export const editBlog = id => async dispatch => {
    const response = await axios.post(`/api/blog/edit/${id}`, {id});
    dispatch({ type: EDIT_BLOG, payload: response.data });
}

export const submitBlog = (values, history) => async dispatch => {
    const response = await axios.post('/api/blog/submit', {values});
    dispatch({ type: FETCH_BLOGS, payload: response.data });
    history.push('/');
}

export const submitBlogEdit = (id, values, history) => async dispatch => {
    const response = await axios.post('/api/blog/editSubmit', {id, values});
    dispatch({ type: FETCH_BLOGS, payload: response.data });
    history.push('/');
}

export const deleteBlog = id => async dispatch => {
    const response = await axios.post(`/api/blog/delete/`, {id});
    dispatch({ type: FETCH_BLOGS, payload: response.data });
}