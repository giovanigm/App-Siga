export const types = {
    RETRIEVE_POSICAO_FRANQUIA_SUCCESS: 'RETRIEVE_POSICAO_FRANQUIA_SUCCESS',
    RETRIEVE_POSICAO_FRANQUIA_FAILED: 'RETRIEVE_POSICAO_FRANQUIA_FAILED',
};

const initialState = {
    posicao: {
        posicoes: [],
        errorStatus: 0,
    },
};

export default function (state = initialState.posicao, action) {
    switch (action.type) {
    case types.RETRIEVE_POSICAO_FRANQUIA_SUCCESS:
        return {
            ...state,
            posicoes: action.posicao.posicoes,
            errorStatus: 0,
        };
    case types.RETRIEVE_POSICAO_FRANQUIA_FAILED:
        return {
            ...state,
            errorStatus: action.errorStatus,
        };
    default:
        return state;
    }
}
