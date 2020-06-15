import * as actionsTypes from './actionTypes'
import axios from 'axios'
import { ENDPOINT, access_token } from '../../utils/globals'

export const getListBook = () => {
    const request = axios.get(`${ENDPOINT}/book/findAll`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    });

    return (dispatch) =>
        request.then((response) => {
            console.log(response);
            return dispatch({
                type: actionsTypes.GET_BOOK,
                payload: response.data
            });
        });
};