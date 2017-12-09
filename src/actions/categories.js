import axios from 'axios';

export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (data) => {
    return {
        type: SET_CATEGORIES,
        data
    };
};

export const getCategories = (url) => {
    return (dispatch) => {
        return axios.get(url)
            .then(response => {
                return dispatch(setCategories(response.data.collection));
            });
    };
};
