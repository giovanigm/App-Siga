import { types } from './reducer';

export const fetchAlunoDisciplinas = usuario => ({
    type: types.FETCH_ALUNO_DISCIPLINAS,
    payload: usuario,
});

export const fetchAlunoDisciplinasSuccess = payload => ({
    type: types.FETCH_ALUNO_DISCIPLINAS_SUCCESS,
    payload,
});

export const fetchAlunoDisciplinasFailed = error => ({
    type: types.FETCH_ALUNO_DISCIPLINAS_FAILED,
    errorMessage: error,
});
