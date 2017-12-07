export const types = {
    USER_LOGOUT: 'LOGOUT',
    USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
    USER_LOGOUT_FAILED: 'LOGOUT_FAILED',
};

const initialState = {
    data: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.USER_LOGOUT:
        return {
            ...state,
        };
    case types.USER_LOGOUT_SUCCESS:
        return {
            ...state,
        };
    case types.USER_LOGOUT_FAILED:
        return {
            ...state,
        };
    default:
        return state;
    }
}
