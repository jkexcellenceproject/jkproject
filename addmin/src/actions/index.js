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
    await axios.post('/api/blog/submit', {values});
    history.push('/');
}

export const submitBlogEdit = (id, values, history) => async dispatch => {
    await axios.post('/api/blog/editSubmit', {id, values});
    history.push('/');
}

export const deleteBlog = (id, history) => async dispatch => {
    await axios.post(`/api/blog/delete/`, {id});
}