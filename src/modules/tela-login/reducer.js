export const types = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'API_REQUEST_FAILED',
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
    default:
        return state;
    }
}
