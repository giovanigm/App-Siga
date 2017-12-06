import { types } from './reducer';

export const errorHandledSuccess = error => ({
    type: types.ERROR_HANDLED_SUCCESS,
    payload: error,
});

export const errorHandledFailed = error => ({
    type: types.ERROR_HANDLED_FAILED,
    payload: error,
});
