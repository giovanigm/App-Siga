import { types } from './reducer';

export const fetchDisciplinaAvaliacoes = () => ({
    type: types.FETCH_DISCIPLINA_AVALIACOES,
});

export const fetchDisciplinaAvaliacoesSuccess = payload => ({
    type: types.FETCH_DISCIPLINA_AVALIACOES_SUCCESS,
    payload,
});

export const fetchDisciplinaAvaliacoesFailed = error => ({
    type: types.FETCH_DISCIPLINA_AVALIACOES_FAILED,
    errorMessage: error,
});
