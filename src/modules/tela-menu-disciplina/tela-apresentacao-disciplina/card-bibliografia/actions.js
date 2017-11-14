import { types } from './reducer';

export const fetchDisciplinaBibliografia = codigo => ({
    type: types.FETCH_DISCIPLINA_BIBLIOGRAFIA,
    payload: codigo,
});

export const fetchDisciplinaBibliografiaSuccess = payload => ({
    type: types.FETCH_DISCIPLINA_BIBLIOGRAFIA_SUCCESS,
    payload,
});

export const fetchDisciplinaBibliografiaFailed = error => ({
    type: types.FETCH_DISCIPLINA_BIBLIOGRAFIA_FAILED,
    errorMessage: error,
});
