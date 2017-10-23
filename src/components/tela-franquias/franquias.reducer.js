export const types = {
    RETRIEVE_FRANQUIAS_SUCCESS: 'RETRIEVE_FRANQUIAS_SUCCESS',
    RETRIEVE_FRANQUIAS_FAILED: 'RETRIEVE_FRANQUIAS_FAILED',
    EXECUTE_LOGOUT: 'EXECUTE_LOGOUT',
};

const initialState = {
    franquias: {
        lista: [],
        errorStatus: 0,
    },
};

export default function (state = initialState.franquias, action) {
    switch (action.type) {
    case types.RETRIEVE_FRANQUIAS_SUCCESS:
        return {
            ...state,
            lista: action.franquias,
            errorStatus: 0,
        };
    case types.RETRIEVE_FRANQUIAS_FAILED:
        return {
            ...state,
            errorStatus: action.errorStatus,
        };
    default:
        return state;
    }
}
