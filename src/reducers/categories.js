import {SET_CATEGORIES} from '../actions/categories';

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    if (action.type === SET_CATEGORIES) {
        return {list: action.data};
    }
    return state;
};
