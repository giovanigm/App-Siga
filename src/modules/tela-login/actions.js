import { types } from './reducer';

export const login = (usuario, senha) => ({
    type: types.LOGIN,
    payload: { usuario, senha },
});

export const loginSuccess = payload => ({
    type: types.LOGIN_SUCCESS,
    payload,
});

export const loginFailed = error => ({
    type: types.LOGIN_FAILED,
    errorMessage: error,
});

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});
