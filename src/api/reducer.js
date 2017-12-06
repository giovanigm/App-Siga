export const types = {
    ERROR_HANDLED_SUCCESS: 'ERROR_HANDLED_SUCCESS',
    ERROR_HANDLED_FAILED: 'ERROR_HANDLED_FAILED',
};

const initialState = {
    error: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.ERROR_HANDLED_SUCCESS:
        return {
            ...state,
            error: action.payload,
        };
    case types.ERROR_HANDLED_FAILED:
        return {
            ...state,
            error: action.payload,
        };
    default:
        return state;
    }
}
