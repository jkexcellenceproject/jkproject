import _ from 'lodash';
import { FETCH_ARTICLES, EDIT_ARTICLE } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_ARTICLES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
         case EDIT_ARTICLE:
             return {state: action.payload};   
        default:
            return state;
    }
}