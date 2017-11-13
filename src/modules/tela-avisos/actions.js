import { types } from './reducer';

export const fetchAvisos = () => ({
    type: types.FETCH_AVISOS,
});

export const fetchAvisosSuccess = payload => ({
    type: types.FETCH_AVISOS_SUCCESS,
    payload,
});

export const fetchAvisosFailed = error => ({
    type: types.FETCH_AVISOS_FAILED,
    errorMessage: error,
});
