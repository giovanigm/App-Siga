export const types = {
    FETCH_ALUNO: 'FETCH_ALUNO',
    FETCH_ALUNO_SUCCESS: 'FETCH_ALUNO_SUCCESS',
    FETCH_ALUNO_FAILED: 'API_REQUEST_FAILED',
};

const initialState = {
    data: {},
    dataFetched: false,
    isFetching: false,
    error: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.FETCH_ALUNO:
        return {
            ...state,
            data: {},
            isFetching: true,
        };
    case types.FETCH_ALUNO_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
        };
    default:
        return state;
    }
}
