import axios from 'axios';

export const SETTING_OVERVIEW = 'SETTING_OVERVIEW';
export const SETTING_OVERVIEW_SUCCESS = 'SETTING_OVERVIEW_SUCCESS';
export const SETTING_OVERVIEW_FAILURE = 'SETTING_OVERVIEW_FAILURE';

export const SETTING_RANKED = 'SETTING_RANKED';
export const SETTING_RANKED_SUCCESS =  'SETTING_RANKED_SUCCESS';
export const SETTING_RANKED_FAILURE = 'SETTING_RANKED_FAILURE';

export const setOverview = (username) => dispatch => {
    dispatch({type: SETTING_OVERVIEW});
    return axios
    .post('http://localhost:4000/api/user/by-name', {name: username})
    .then(response => {
        console.log(response)
        dispatch({type: SETTING_OVERVIEW_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: SETTING_OVERVIEW_FAILURE, payload: error})
    })
}

export const setRanked = (id) => dispatch => {
    dispatch({type: SETTING_RANKED});
    return axios
    .post('http://localhost:4000/api/user/by-name/ranked', {summonerId: id})
    .then(response => {
        console.log(response)
        dispatch({type: SETTING_RANKED_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: SETTING_RANKED_FAILURE, payload: error})
    })
}