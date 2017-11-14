import { types } from './reducer';

export const fetchDisciplinaApresentacao = codigo => ({
    type: types.FETCH_DISCIPLINA_APRESENTACAO,
    payload: codigo,
});

export const fetchDisciplinaApresentacaoSuccess = payload => ({
    type: types.FETCH_DISCIPLINA_APRESENTACAO_SUCCESS,
    payload,
});

export const fetchDisciplinaApresentacaoFailed = error => ({
    type: types.FETCH_DISCIPLINA_APRESENTACAO_FAILED,
    errorMessage: error,
});
