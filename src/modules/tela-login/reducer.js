export const types = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'API_REQUEST_FAILED',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

const initialState = {
    data: {},
    dataFetched: false,
    isFetching: false,
    error: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.LOGIN:
        return {
            ...state,
            data: {},
            isFetching: true,
        };
    case types.LOGIN_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
            dataFetched: true,
        };
    case types.LOGIN_FAILED:
        return {
            ...state,
            isFetching: false,
        };
    case types.LOGOUT_SUCCESS:
        return {
            initialState,
        };
    default:
        return state;
    }
}
