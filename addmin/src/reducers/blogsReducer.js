import _ from 'lodash';
import { FETCH_BLOGS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_BLOGS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}