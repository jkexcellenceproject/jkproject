import axios from 'axios';
import { FETCH_BLOGS } from './types';

export const fetchBlogs = () => async dispatch => {
    const response = await axios.get('/api/blogs');

    dispatch({ type: FETCH_BLOGS, payload: response.data });
};


