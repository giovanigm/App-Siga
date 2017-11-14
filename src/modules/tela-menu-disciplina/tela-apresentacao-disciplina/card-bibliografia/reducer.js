export const types = {
    FETCH_DISCIPLINA_BIBLIOGRAFIA: 'FETCH_DISCIPLINA_BIBLIOGRAFIA',
    FETCH_DISCIPLINA_BIBLIOGRAFIA_SUCCESS: 'FETCH_DISCIPLINA_BIBLIOGRAFIA_SUCCESS',
    FETCH_DISCIPLINA_BIBLIOGRAFIA_FAILED: 'API_REQUEST_FAILED',
};

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.FETCH_DISCIPLINA_BIBLIOGRAFIA:
        return {
            ...state,
            data: [],
            isFetching: true,
        };
    case types.FETCH_DISCIPLINA_BIBLIOGRAFIA_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
        };
    default:
        return state;
    }
}
