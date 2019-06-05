import users from '../api/user';
import { FETCH_USERS } from './types';

export const fetchUsers = () => async dispatch => {
    const response = await users.get('users');

    dispatch({ type: FETCH_USERS, payload: response.data });
};


