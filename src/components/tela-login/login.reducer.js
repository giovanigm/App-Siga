export const types = {
    EXECUTE_LOGIN_SUCCESS: 'EXECUTE_LOGIN_SUCCESS',
    EXECUTE_LOGIN_FAILED: 'EXECUTE_LOGIN_FAILED',
    EXECUTE_LOGOUT_SUCCESS: 'EXECUTE_LOGOUT_SUCCESS',
    EXECUTE_LOGOUT_FAILED: 'EXECUTE_LOGOUT_FAILED',
};

const initialState = {
    login: {
        usuario: '',
        token: '',
        errorStatus: 0,
    },
};

export default function (state = initialState.login, action) {
    switch (action.type) {
    case types.EXECUTE_LOGIN_SUCCESS:
        return {
            ...state,
            usuario: action.login.usuario,
            token: action.login.token,
            errorStatus: 0,
        };
    case types.EXECUTE_LOGIN_FAILED:
        return {
            ...state,
            errorStatus: action.errorStatus,
        };
    case types.EXECUTE_LOGOUT_SUCCESS:
        return {
            ...state,
            usuario: '',
            token: '',
            errorStatus: 0,
        };
    case types.EXECUTE_LOGOUT_FAILED:
        return {
            ...state,
            errorStatus: action.errorStatus,
        };
    default:
        return state;
    }
}
