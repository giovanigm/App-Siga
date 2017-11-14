import { types } from './reducer';

export const fetchDisciplinaAulas = codigo => ({
    type: types.FETCH_DISCIPLINA_AULAS,
    payload: codigo,
});

export const fetchDisciplinaAulasSuccess = payload => ({
    type: types.FETCH_DISCIPLINA_AULAS_SUCCESS,
    payload,
});

export const fetchDisciplinaAulasFailed = error => ({
    type: types.FETCH_DISCIPLINA_AULAS_FAILED,
    errorMessage: error,
});
