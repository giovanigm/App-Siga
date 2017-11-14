export const types = {
    FETCH_DISCIPLINA_AVALIACOES: 'FETCH_DISCIPLINA_AVALIACOES',
    FETCH_DISCIPLINA_AVALIACOES_SUCCESS: 'FETCH_DISCIPLINA_AVALIACOES_SUCCESS',
    FETCH_DISCIPLINA_AVALIACOES_FAILED: 'API_REQUEST_FAILED',
};

const initialState = {
    data: {},
    dataFetched: false,
    isFetching: false,
    error: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.FETCH_DISCIPLINA_AVALIACOES:
        return {
            ...state,
            data: {},
            isFetching: true,
        };
    case types.FETCH_DISCIPLINA_AVALIACOES_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
        };
    default:
        return state;
    }
}
