import { types } from './reducer';

export const logout = () => ({
    type: types.USER_LOGOUT,
});

export const logoutSuccess = () => ({
    type: types.USER_LOGOUT_SUCCESS,
});

export const logoutFailed = () => ({
    type: types.USER_LOGOUT_FAILED,
});
