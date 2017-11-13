export const types = {
    FETCH_AVISOS: 'FETCH_AVISOS',
    FETCH_AVISOS_SUCCESS: 'FETCH_AVISOS_SUCCESS',
    FETCH_AVISOS_FAILED: 'API_REQUEST_FAILED',
};

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.FETCH_AVISOS:
        return {
            ...state,
            data: [],
            isFetching: true,
        };
    case types.FETCH_AVISOS_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
        };
    default:
        return state;
    }
}
