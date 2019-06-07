import _ from 'lodash';
import { FETCH_BLOGS, EDIT_BLOG } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_BLOGS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
         case EDIT_BLOG:
             return {state: action.payload};   
        default:
            return state;
    }
}