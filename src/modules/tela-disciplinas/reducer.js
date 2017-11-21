export const types = {
    FETCH_ALUNO_DISCIPLINAS: 'FETCH_ALUNO_DISCIPLINAS',
    FETCH_ALUNO_DISCIPLINAS_SUCCESS: 'FETCH_ALUNO_DISCIPLINAS_SUCCESS',
    FETCH_ALUNO_DISCIPLINAS_FAILED: 'API_REQUEST_FAILED',
    SELECIONA_DISCIPLINA: 'SELECIONA_DISCIPLINA',
};

const initialState = {
    data: [],
    disciplinaSelecionada: {},
    dataFetched: false,
    isFetching: false,
    error: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
    case types.FETCH_ALUNO_DISCIPLINAS:
        return {
            ...state,
            data: [],
            isFetching: true,
        };
    case types.FETCH_ALUNO_DISCIPLINAS_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isFetching: false,
        };
    case types.SELECIONA_DISCIPLINA:
        return {
            ...state,
            disciplinaSelecionada: action.payload,
        };
    default:
        return state;
    }
}
