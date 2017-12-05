import { types } from './reducer';

export const fetchAlunoHistorico = () => ({
    type: types.FETCH_ALUNO_HISTORICO,
});

export const fetchAlunoHistoricoSuccess = payload => ({
    type: types.FETCH_ALUNO_HISTORICO_SUCCESS,
    payload,
});

export const fetchAlunoHistoricoFailed = error => ({
    type: types.FETCH_ALUNO_HISTORICO_FAILED,
    errorMessage: error,
});
